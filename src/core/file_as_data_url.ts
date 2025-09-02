export type FileLoader = {
    promise?: Promise<string>,
    abortRef?: { abort: () => void }
}

export function fileAsDataURL(file: File): FileLoader {
    if (!file) {
        return {
            promise: Promise.reject(new Error('No file'))
        };
    }

    const fileLoader: FileLoader = {};

    fileLoader.promise = new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('error', () => {
            reject(new Error('FileReader error'));
        });

        reader.addEventListener('load', () => {
            fileLoader.abortRef.abort = null;
            resolve(reader.result.toString());
        });

        reader.readAsDataURL(file);
        fileLoader.abortRef = { abort: reader.abort.bind(reader) };
    })

    return fileLoader;
}
