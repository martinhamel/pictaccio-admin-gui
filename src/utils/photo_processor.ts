import { NamedContextIndex } from '@pictaccio/admin-gui/src/core/types/named_context_index';
import { NamedGroupPhotos } from '@pictaccio/admin-gui/src/core/types/named_group_photos';
import { NamedSubjectPhotos } from '@pictaccio/admin-gui/src/core/types/named_subject_photos';
import { ProcessedPhotos } from '@pictaccio/admin-gui/src/core/types/processed_photos';
import { SubjectData } from '@pictaccio/admin-gui/src/core/types/subject_data';
import { TotalReports } from '@pictaccio/admin-gui/src/core/types/total_reports';
import { UnmatchedReports } from '@pictaccio/admin-gui/src/core/types/unmatched_reports';
import { store } from '@pictaccio/admin-gui/src/store';

export class PhotoProcessor {
    private processedPhotos: ProcessedPhotos;
    private unmatchedImagesReport: string[] = [];
    private totalImageReport: string[] = [];
    private matchedItems: { [key: string]: boolean } = {};

    constructor() {
        this.processedPhotos = {
            groups: {},
            subjects: {}
        };
    }

    public clear(): void {
        this.processedPhotos = {
            groups: {},
            subjects: {}
        };
        this.unmatchedImagesReport = [];
        this.totalImageReport = [];
        this.matchedItems = {};
    }

    public get photos(): ProcessedPhotos {
        return this.processedPhotos;
    }

    public get unmatchedReport(): UnmatchedReports {
        return {
            unmatchedImages: this.unmatchedImagesReport,
            unmatchedSubjects: Object.entries(this.matchedItems)
                .filter(([p, v]) => v !== true && p.startsWith('code'))
                .map(([p, v]) => p),
            unmatchedGroups: Object.entries(this.matchedItems)
                .filter(([p, v]) => v !== true && p.startsWith('group'))
                .map(([p, v]) => p)
        }
    }

    public get totalReport(): TotalReports {
        return {
            totalImages: this.totalImageReport,
            totalSubjects: Object.entries(this.matchedItems)
                .filter(([p, v]) => p.startsWith('code'))
                .map(([p, v]) => p),
            totalGroups: Object.entries(this.matchedItems)
                .filter(([p, v]) => p.startsWith('group'))
                .map(([p, v]) => p)
        }
    }

    public process(files: File[]): void {
        const subjectData = store.getters['SessionSubjectData/subjectData'];
        const groupsIndex = this.indexContext<string>(subjectData, 'group');
        const codesIndex = this.indexContext<SubjectData>(subjectData, 'code');
        const groupTester =
            RegExp(`^group_(?<group_name>${Object.keys(groupsIndex).join('|')})(_\\d+)?\\.(jpeg|jpg|png)$`, 'i');
        const groups: NamedGroupPhotos = {};
        const subjects: NamedSubjectPhotos = {};

        for (const file of files) {
            let matched = false;

            if (groupTester.test(file.name)) {
                const groupName = file.name.match(groupTester).groups.group_name;

                matched = true;
                if (groups[groupName] === undefined) {
                    groups[groupName] = {
                        name: groupName,
                        photos: []
                    }
                    this.matchedItems[`group-${groupName}`] = true;
                }
                groups[groupName].photos.push(file)
            }

            for (const [code, value] of Object.entries(codesIndex)) {
                if (file.name.startsWith(code)) {
                    matched = true;
                    if (subjects[code] === undefined) {
                        subjects[code] = {
                            lastName: value.ref.lastName,
                            firstName: value.ref.firstName,
                            group: value.ref.group,
                            gpi: value.ref.gpi,
                            code: value.ref.code,
                            photos: []
                        }
                        this.matchedItems[`code-${code}`] = true;
                    }

                    subjects[code].photos.push(file);
                }
            }

            this.totalImageReport.push(file.name);

            if (!matched && !this.unmatchedImagesReport.includes(file.name)) {
                this.unmatchedImagesReport.push(file.name);
            }
        }

        this.processedPhotos = {
            groups: { ...groups, ...this.processedPhotos.groups },
            subjects: { ...subjects, ...this.processedPhotos.subjects }
        };
    }

    /* PRIVATE */
    private indexContext<T>(subjectData: SubjectData[], context: keyof SubjectData): NamedContextIndex<T> {
        const contextIndex: NamedContextIndex<T> = {};

        subjectData.forEach((i, index, array) => {
            if (contextIndex[i[context]] === undefined) {
                contextIndex[i[context]] = {
                    ref: array[index] as unknown as T,
                    name: i[context] as string
                }
            }

            if (this.matchedItems[`${context}-${contextIndex[i[context]].name}`] === undefined) {
                this.matchedItems[`${context}-${contextIndex[i[context]].name}`] = false;
            }
        });

        return contextIndex;
    }
}
