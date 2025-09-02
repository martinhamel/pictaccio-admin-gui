export const FilterTypes = [
    'is',
    'is-not',
    'contains',
    'contains-not'
] as const;

export type FilterType = typeof FilterTypes[number];