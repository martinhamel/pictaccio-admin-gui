import { OneOrMany } from '@loufa/loufairy';

export function internalName<T extends {internal_name: string}> (
    parts: TemplateStringsArray, list: OneOrMany<Pick<T, 'internal_name'>>): string {
    if (!Array.isArray(list)) {
        list = [list];
    }

    return list.map(i => `<span>${i.internal_name}</span>`).join('\n');
}
