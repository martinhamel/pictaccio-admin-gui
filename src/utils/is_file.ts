export function isFile(object: any): object is File {
    return object instanceof File;
}
