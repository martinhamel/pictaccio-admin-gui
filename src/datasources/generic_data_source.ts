import { DataSource, DataSourceOption, ValueKeyOf } from '@pictaccio/admin-gui/src/core/types/data_source';

export class GenericDataSource<Tmodel, Tvalue, ToptionId, ToptionValue>
    implements DataSource<Tmodel, Tvalue, ToptionId, ToptionValue> {
    private name: keyof Tmodel;
    private value: Tvalue;
    private options: Iterable<DataSourceOption<ToptionId, ToptionValue>>;

    public static from<Tmodel, Tvalue, ToptionId, ToptionValue>(
        value: Tvalue,
        name: keyof Tmodel,
        options?: Iterable<DataSourceOption<ToptionId, ToptionValue>>)
        : GenericDataSource<Tmodel, Tvalue, ToptionId, ToptionValue> {
        const dataSource = new GenericDataSource<Tmodel, Tvalue, ToptionId, ToptionValue>();

        dataSource.value = value;
        dataSource.name = name;
        dataSource.options = options;
        return dataSource;
    }

    public getName(): keyof Tmodel {
        return this.name;
    }

    public getOptions(): DataSourceOption<ToptionId, ToptionValue>[] {
        if (!this.options) {
            throw new Error('JsonDataSource getOptions method was called but there is no options');
        }
        return Array.from(this.options);
    }

    public getValue(): Tvalue {
        return this.value;
    }
}
