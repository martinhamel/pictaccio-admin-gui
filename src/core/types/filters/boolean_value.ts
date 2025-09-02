export const BooleanValues = [
    'true',
    'false',
    'unset'
] as const;

export type BooleanValue = typeof BooleanValues[number];