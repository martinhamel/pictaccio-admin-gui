import { DateRange } from '@pictaccio/shared/src/types/date_range';
import { Operator } from '@pictaccio/shared/src/types/operator';
import { ReportRendererType } from '@pictaccio/shared/src/types/report';
import { SortDirection } from '@pictaccio/shared/src/types/sort_direction';

export type DatasourceFilterType = 'leaf' | 'filter' | 'or' | 'and';

export type DatasourceFilterMetadata = {
    name: string;
    type: DatasourceFilterType;
}

export const DatasourceDefinitionTypes = [
    'filter',
    'sort',
    'reportParams'
] as const;

export type DatasourceDefinitionType = typeof DatasourceDefinitionTypes[number];

export type DatasourceFilter = DatasourceFilterMetadata & {
    type: 'filter';
    name: string;
    operator: Operator;
    value: any;
}

// eslint-disable-next-line no-use-before-define
export type DatasourceFilterGroup = DatasourceFiltersOr | DatasourceFiltersAnd | DatasourceFilters;

export type DatasourceFiltersOr = DatasourceFilterMetadata & {
    type: 'or';
    filters: DatasourceFilterGroup[];
}

export type DatasourceFiltersAnd = DatasourceFilterMetadata & {
    type: 'and';
    filters: DatasourceFilterGroup[];
}

export type DatasourceFilters = DatasourceFilterMetadata & {
    type: 'leaf';
    filters: DatasourceFilter[];
}

export type DatasourceFilterDefinition = {
    name: string;
    group: DatasourceFilterGroup;
}

export type DatasourceSortDefinition = {
    name: string;
    direction: SortDirection;
}

export type DatasourceReportParamsDefinition = {
    dateRange: DateRange;
    renderer: ReportRendererType;
}

export type DatasourceDefinition = DatasourceFilterDefinition | DatasourceSortDefinition;

export type DatasourceDefinitionTypeMap = {
    filter: DatasourceFilterDefinition,
    sort: DatasourceSortDefinition,
    reportParams: DatasourceReportParamsDefinition
};

export type DatasourceDefinitionSubTypeMap = {
    filter: DatasourceFilterGroup;
    sort: never;
    reportParams: DatasourceReportParamsDefinition;
};

export type DatasourceDefinitionValueType<Tkey extends DatasourceDefinitionType> = DatasourceDefinitionTypeMap[Tkey];
export type DatasourceDefinitionValueSubType<Tkey extends DatasourceDefinitionType> =
    DatasourceDefinitionSubTypeMap[Tkey];

export function isDatasourceFilter(definition: any,
    type: DatasourceDefinitionType): definition is DatasourceFilterDefinition {
    return type === 'filter' && 'items' in definition;
}

export function isDatasourceFilterGroup(item: any): item is DatasourceFilterGroup {
    return 'type' in item && ['leaf', 'or', 'and'].includes(item.type) &&
        'filters' in item && Array.isArray(item.filters);
}

export function isDatasourceFilterNesting(item: any): item is DatasourceFiltersOr {
    return ['or', 'and'].includes(item.type);
}

export function isDatasourceFilterLeaf(item: any): item is DatasourceFilters {
    return item.type === 'leaf';
}

export function isDatasourceSort(type: DatasourceDefinitionType): type is 'sort' {
    return type === 'sort';
}

export type DataType<Tdata, HasStreams extends boolean, Tstream extends keyof Tdata | undefined> =
    HasStreams extends true
    ? Tdata[Tstream][]
    : Tdata[];
