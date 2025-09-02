export type ThemeColors =
    'light' |
    'dark';

export type ThemeTypes =
    'line' |
    'block';

export interface Theme {
    color: ThemeColors;
    type: ThemeTypes;
}
