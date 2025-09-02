import {
    DatasourceDefinitionType,
    DatasourceDefinitionTypes,
    DatasourceDefinitionValueSubType,
    DatasourceDefinitionValueType,
    DatasourceFilterDefinition, DatasourceReportParamsDefinition, DataType,
    isDatasourceFilter,
    isDatasourceFilterGroup,
    isDatasourceFilterLeaf,
    isDatasourceFilterNesting
} from '@pictaccio/admin-gui/src/datasources/data_definitions';
import { Datasource, NewDataCallback } from '@pictaccio/admin-gui/src/datasources/datasource';

type DataDefinitionNode = {
    name: string;
    item: DatasourceDefinitionValueSubType<DatasourceDefinitionType>;
    parent: DataDefinitionNode | null;
}

export abstract class CommonDatasource<Tdata, HasStreams extends boolean = false>
    implements Datasource<Tdata, HasStreams> {
    private dataDefinitionIndex = {} as Record<DatasourceDefinitionType, Map<string, DataDefinitionNode>>;
    protected dataDefinitions = {} as Record<
        DatasourceDefinitionType, DatasourceDefinitionValueType<DatasourceDefinitionType>
    >;

    public abstract getData<Tstream extends keyof Tdata | undefined>(stream?: Tstream)
        : Promise<DataType<Tdata, HasStreams, Tstream>[]>;
    public abstract getTotalCount(): number;
    public abstract setNewDataCallback(callback: NewDataCallback): void;

    constructor() {
        for (const type of DatasourceDefinitionTypes) {
            this.dataDefinitionIndex[type] = new Map();
        }
    }

    public setDataDefinition<Ttype extends DatasourceDefinitionType>(
        type: Ttype,
        name: string,
        item: DatasourceDefinitionValueSubType<Ttype>,
        parent: string = null)
        : void {
        // debugger;
        if (this.dataDefinitionIndex[type].has(name)) {
            this.replaceDataDefinitionNode(type, item, this.dataDefinitionIndex[type].get(name));
        } else if (parent && this.dataDefinitionIndex[type].has(parent)) {
            this.insertDataDefinitionNode(type, item, this.dataDefinitionIndex[type].get(parent));
        } else if (parent === null) {
            this.replaceRootDataDefinitionNode(type, item);
        } else {
            throw new Error('Parameter error');
        }
    }

    /* PRIVATE */
    private insertDataDefinitionNode<Ttype extends DatasourceDefinitionType>(
        type: Ttype,
        item: DatasourceDefinitionValueSubType<Ttype>,
        parent: DataDefinitionNode)
        : void {
        if (isDatasourceFilter(parent.item, type) && isDatasourceFilterGroup(item)) {
            if (isDatasourceFilterNesting(parent.item) && isDatasourceFilterNesting(item)) {
                parent.item.filters.push(Object.assign({}, item));
            } else if (isDatasourceFilterLeaf(parent.item) && isDatasourceFilterLeaf(item)) {
                parent.item.filters = [...parent.item.filters, ...Object.assign({}, item.filters)];
            } else {
                throw new Error('Parameter error, incompatible types');
            }
        }
    }

    private replaceDataDefinitionNode<Ttype extends DatasourceDefinitionType>(
        type: Ttype,
        item: DatasourceDefinitionValueSubType<Ttype>,
        node: DataDefinitionNode)
        : void {
        if (isDatasourceFilter(node, type) && isDatasourceFilter(item, type)) {
            node.item = Object.assign({}, item);
        }
    }

    private replaceRootDataDefinitionNode<Ttype extends DatasourceDefinitionType>(
        type: Ttype,
        definition: DatasourceDefinitionValueSubType<Ttype>)
        : void {
        switch (type) {
            case 'filter':
                this.dataDefinitions.filter = {
                    name: 'root',
                    group: Object.assign({}, definition)
                } as DatasourceFilterDefinition;
                break;

            case 'sort':
                break;

            case 'reportParams':
                this.dataDefinitions.reportParams = {
                    ...this.dataDefinitions.reportParams,
                    dateRange: (definition as DatasourceReportParamsDefinition).dateRange,
                    renderer: (definition as DatasourceReportParamsDefinition).renderer
                }
                break;
        }
    }
}
