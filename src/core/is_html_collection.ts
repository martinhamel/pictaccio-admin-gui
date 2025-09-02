export function isHTMLCollection(collection: Node | HTMLCollection): collection is HTMLCollection {
    return Reflect.has(collection, Symbol.iterator) && !Reflect.has(collection, 'forEach');
}
