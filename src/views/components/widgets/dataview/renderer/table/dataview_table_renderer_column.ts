import { VueCons } from 'vue-facing-decorator';

export type DataviewTableRendererFormatterClass = {
    component: VueCons,
    props?: Record<string, any>
};

export type DataviewTableRendererColumn = {
    targetName: string;
    columnNameLocale: string;
    defaultSize: number;
    defaultOrder: number;
    defaultVisible: boolean;
    formatters?: VueCons[];
}

export type DataviewTableRendererColumnType<Tdata, HasStreams> = HasStreams extends true
    ? Record<keyof Tdata, DataviewTableRendererColumn[]>
    : DataviewTableRendererColumn[];
