export interface SubjectTransfer {
    photoCount: number;
    firstName: string;
    lastName: string;
    group: string;
    gpi: string;
    code: string;
    extra?: {[key: string]: string}
}
