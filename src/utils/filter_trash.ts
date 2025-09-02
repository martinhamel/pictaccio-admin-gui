const queryAttributes = [
    'data-lastpass-icon-root'
];

export function filterThirdPartyElements(collection: HTMLCollection): any[] {
    return Array.from(collection)
        .filter(i => Array.from(i.attributes)
            .map(i => queryAttributes.includes(i.name))
            .every(i => i === false));
}
