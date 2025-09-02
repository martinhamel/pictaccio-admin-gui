/**
 * Will display an array as a list for wrapping available rows
 * @param value is an array
 */
export function unwrapData(value: any): string {
    return value.map(element =>
        `<div class="unwrap-data-item">
            ${element}
        </div>`
    );
}
