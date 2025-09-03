import { DataviewComponent } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_component';

export type DataviewTransformerExtra<Tdata, Tkey extends string, Textra> = Tdata & { [key in Tkey]: Textra }

export interface DataviewTransformer<Tdata, TextraKey extends string, Textra> extends DataviewComponent<Tdata> {
    transform(data: Tdata[]): DataviewTransformerExtra<Tdata, TextraKey, Textra>[];
}
