export function isHTMLElement(element: Node): element is HTMLElement {
    return Reflect.has(element, 'style');
}
