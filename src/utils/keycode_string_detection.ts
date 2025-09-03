import { VK_CODES } from '@pictaccio/admin-gui/utils/vk_codes';

export function fromKeyCode(keyCode) {
    if (keyCode >= VK_CODES['NUMPAD0'] && keyCode <= VK_CODES['NUMPAD9']) {
        keyCode -= 48;
    }
    return String.fromCharCode(keyCode);
}

export function isKeycodeAlpha(keyCode) {
    return keyCode.startsWith('Key') ||
        (keyCode.length === 1 && parseInt(keyCode, 10));
}

export function isKeycodeAlphaNumeric(keyCode) {
    return isKeycodeAlpha(keyCode) || isKeycodeNumeric(keyCode);
}

export function isKeycodeDigit(keyCode) {
    return /\d/.test(keyCode);
}

export function isKeycodeNumeric(keyCode) {
    return isKeycodeDigit(keyCode) ||
        ['Minus', 'NumpadSubtract', 'Period', 'NumpadDecimal'].includes(keyCode) ||
        ['-', '.'].includes(fromKeyCode(keyCode));
}
