export function decodeExtra(extra: string): any {
    try {
        return JSON.parse(atob(extra));
    } catch {
        return null;
    }
}

export function shouldExtraSilenceRead(extra: string): boolean {
    const decodedExtra = decodeExtra(extra);

    return decodedExtra && Object.keys(decodedExtra).some(key => ['filters'].includes(key));
}

export function formatExtraKey(extra: string, key: string, value: any): string {
    const decodedExtra = decodeExtra(extra) ?? {};

    decodedExtra[key] = value;

    return btoa(JSON.stringify(decodedExtra)).replace(/=+$/, '');
}
