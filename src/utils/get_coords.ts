export type Coords = { x: number, y: number };
export type TwoPointCoords = { x1: number, y1: number, x2: number, y2: number };
export function getCoords(element: Element, position: string, parentElement?: Element | null): Coords {
    if (element === null) {
        return { x: 0, y: 0 };
    }
    const targetRect = element.getBoundingClientRect();
    let ancestor;
    const positionCoords: Coords = { x: -1000, y: -1000 };

    // Find the nearest positioned ancestor
    if (parentElement === undefined) {
        ancestor = element.parentElement;
        while (ancestor && !(
            getComputedStyle(ancestor).position === 'fixed' ||
            getComputedStyle(ancestor).position === 'absolute'
        )) {
            ancestor = ancestor.parentElement;
        }
    }

    if (ancestor) {
        const ancestorRect = ancestor.getBoundingClientRect();
        positionCoords.y = targetRect.top - ancestorRect.top;
        positionCoords.x = targetRect.left - ancestorRect.left;
    } else if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        positionCoords.y = targetRect.top - parentRect.top;
        positionCoords.x = targetRect.left - parentRect.left;
    } else {
        positionCoords.y = targetRect.top;
        positionCoords.x = targetRect.left;
    }

    let point;
    switch (position) {
    case 'top left':
        point = {
            x: positionCoords.x + window.scrollX,
            y: positionCoords.y + window.scrollY
        };
        break;
    case 'top center':
        point = {
            x: positionCoords.x + targetRect.width / 2 + window.scrollX,
            y: positionCoords.y + window.scrollY
        };
        break;
    case 'top right':
        point = {
            x: positionCoords.x + targetRect.width + window.scrollX,
            y: positionCoords.y + window.scrollY
        };
        break;
    case 'center left':
        point = {
            x: positionCoords.x + window.scrollX,
            y: positionCoords.y + targetRect.height / 2 + window.scrollY
        };
        break;
    case 'center':
        point = {
            x: positionCoords.x + targetRect.width / 2 + window.scrollX,
            y: positionCoords.y + targetRect.height / 2 + window.scrollY
        };
        break;
    case 'center right':
        point = {
            x: positionCoords.x + targetRect.width + window.scrollX,
            y: positionCoords.y + targetRect.height / 2 + window.scrollY
        };
        break;
    case 'bottom left':
        point = {
            x: positionCoords.x + window.scrollX,
            y: positionCoords.y + targetRect.height + window.scrollY
        };
        break;
    case 'bottom center':
        point = {
            x: positionCoords.x + targetRect.width / 2 + window.scrollX,
            y: positionCoords.y + targetRect.height + window.scrollY
        };
        break;
    case 'bottom right':
        point = {
            x: positionCoords.x + targetRect.width + window.scrollX,
            y: positionCoords.y + targetRect.height + window.scrollY
        };
        break;
    }

    return point;
}
