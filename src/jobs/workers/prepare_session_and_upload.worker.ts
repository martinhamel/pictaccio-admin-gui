import { isEmpty } from '@loufa/loufairy';
import { load } from 'exifreader';
import { GroupTransfer } from '@pictaccio/admin-gui/core/types/group_transfer';
import { GroupPhotos } from '@pictaccio/admin-gui/core/types/group_photos';
import { SubjectPhotos } from '@pictaccio/admin-gui/core/types/subject_photos';
import { SubjectTransfer } from '@pictaccio/admin-gui/core/types/subject_transfer';
import { ProcessedPhotos } from '@pictaccio/admin-gui/core/types/processed_photos';
import { Job } from '@pictaccio/admin-gui/jobs/job';

const IMAGE_PORTRAIT_SIZE = 2000;
const IMAGE_LANDSCAPE_SIZE = 3000;

type CanvasAndContext = { canvas: OffscreenCanvas, context: OffscreenCanvasRenderingContext2D };

class PrepareSessionAndUpload extends Job {
    private batches: ProcessedPhotos[] = [];
    private currentUpload = 0;
    private sessionId: number;
    private totalUploads: number;
    private sessionUploadService: any;

    constructor() {
        super();
    }

    public async init(): Promise<void> {
        await import('@pictaccio/admin-gui/store');
        this.sessionUploadService = (await import('@pictaccio/admin-gui/services/session_upload_service')).default;
    }

    /* MESSAGE HANDLERS */
    private onAddImages(data: ProcessedPhotos): void {
        this.batches.push(data);
    }

    private async onProcessAndUpload(): Promise<void> {
        await this.init();

        if (isEmpty(this.batches) || this.sessionId === undefined) {
            return;
        }

        await this.processBatches();
    }

    private onSetSessionId(id: number): void {
        this.sessionId = id;
    }

    /* PRIVATE */
    private async getCanvasAndContext(file: File,
        avoidChromeBug: boolean,
        width: number,
        height: number): Promise<CanvasAndContext> {
        const bitmap = await createImageBitmap(file, {
            resizeHeight: avoidChromeBug ? width : height,
            resizeWidth: avoidChromeBug ? height : width,
            imageOrientation: 'none'
        });
        const canvas = new OffscreenCanvas(width, height);
        const context = canvas.getContext('2d');

        context.drawImage(bitmap, 0, 0);

        return { canvas, context };
    }

    private async processFile(file: File): Promise<Blob> {
        const {
            'Image Height': exifImageHeight,
            'Image Width': exifImageWidth,
            Orientation: exifOrientation
        } = file['metadata'];
        let height = [6, 8].includes(exifOrientation ? exifOrientation.value : 1)
            ? exifImageWidth.value
            : exifImageHeight.value;
        let width = [6, 8].includes(exifOrientation ? exifOrientation.value : 1)
            ? exifImageHeight.value
            : exifImageWidth.value;
        const portrait = width < height;
        const ratio = width / height;
        width = Math.min(width, portrait ? IMAGE_PORTRAIT_SIZE : IMAGE_LANDSCAPE_SIZE);
        height = width / ratio;
        const rotation = {
            1: 0,
            3: 180,
            6: 270,
            8: 90
        }[exifOrientation];

        let { canvas, context } = await this.getCanvasAndContext(file, false, width, height);
        const imageData = context.getImageData(0, height - 1, width, 1);

        if (imageData.data.every(subpixel => subpixel === 0)) {
            ({ canvas, context } = await this.getCanvasAndContext(file, true, width, height));
        }

        return await canvas.convertToBlob({
            quality: 0.9,
            type: 'image/jpeg'
        });
    }

    private processPhoto(file: File): Promise<File> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener('load', async () => {
                const metadata = load(reader.result as ArrayBuffer);

                file['metadata'] = metadata;
                file['bitmap-blob'] = await this.processFile(file);
                resolve(file);
            });
            reader.addEventListener('error', (error) => {
                console.log('[PrepareSessionAndUpload] Error loading image');
                console.log(error);
                reject(error);
            })
            reader.readAsArrayBuffer(file);
        });
    }

    private async processPhotos(photos: File[]): Promise<File[]> {
        return await Promise.all(
            photos.map(async photo => await this.processPhoto(photo))
        );
    }

    private async processAndUploadGroup(group: GroupPhotos): Promise<void> {
        const transfer: GroupTransfer = {
            photoCount: group.photos.length,
            name: group.name
        };
        const photos = (await this.processPhotos(group.photos)).map(file => file['bitmap-blob']);

        let success = false;
        do {
            success = await this.sessionUploadService.uploadGroup(this.sessionId, transfer, photos);
        } while (!success);
    }

    private async processAndUploadSubject(subject: SubjectPhotos): Promise<void> {
        const transfer: SubjectTransfer = {
            photoCount: subject.photos.length,
            firstName: subject.firstName,
            lastName: subject.lastName,
            gpi: subject.gpi,
            group: subject.group,
            code: subject.code
        };
        const photos = (await this.processPhotos(subject.photos)).map(file => file['bitmap-blob']);

        let success = false;
        do {
            success = await this.sessionUploadService.uploadSubject(this.sessionId, transfer, photos);
        } while (!success);
    }

    private async processBatch(batch: ProcessedPhotos): Promise<void> {
        if (batch.groups) {
            for (const group of Object.values(batch.groups)) {
                for (let i = 0; i < 5; i++) {
                    try {
                        await this.processAndUploadGroup(group);
                        break;
                    } catch {
                        // Pass
                    }
                }

                this.processProgress();
            }
        }

        if (batch.subjects) {
            for (const subject of Object.values(batch.subjects)) {
                for (let i = 0; i < 5; i++) {
                    try {
                        await this.processAndUploadSubject(subject);
                        break;
                    } catch {
                        // Pass
                    }
                }

                this.processProgress();
            }
        }
    }

    private async processBatches(): Promise<void> {
        try {
            this.totalUploads = this.batches.flat().reduce((total: number, batch: ProcessedPhotos) =>
                (Object.values(batch.groups)?.length ?? 0) + (Object.values(batch.subjects)?.length ?? 0) + total, 0);
            for (const batch of this.batches) {
                try {
                    await this.processBatch(batch);
                } catch (error) {
                    // Pass
                }
            }
        } catch (error) {
            debugger;
        }
    }

    private processProgress(): void {
        this.currentUpload++;
        this.send('progress', {
            percent: Math.round(this.currentUpload / this.totalUploads * 100),
            current: this.currentUpload,
            total: this.totalUploads
        });
    }
}

export default new PrepareSessionAndUpload();
