import DataviewRendererAlignmentFormatter from
    '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/DataviewRendererAlignmentFormatter.vue';
import DataviewRendererCurrencyFormatter
    from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/DataviewRendererCurrencyFormatter.vue';
import DataviewRendererLocaleFormatter
    from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/DataviewRendererLocaleFormatter.vue';
import DataviewRendererStringFormatter from
    '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/DataviewRendererStringFormatter.vue';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { VueCons, Base } from 'vue-facing-decorator';
import { PropsConfig } from 'vue-facing-decorator/dist/option/props';

export const DataviewFormatters = [
    'string',
    'alignment',
    'locale',
    'currency'
] as const;

export type DataviewFormatter = typeof DataviewFormatters[number];

export type DataviewAlignmentFormatterPropAlignment = 'flex-start' | 'flex-end' | 'center';
export type DataviewAlignmentFormatterProps = {
    alignItems?: DataviewAlignmentFormatterPropAlignment;
    justifyContent?: DataviewAlignmentFormatterPropAlignment;
    alignContent?: DataviewAlignmentFormatterPropAlignment;
}

export type DataviewLocaleFormatterProps = {
    collapseThreshold?: number;
    expandable?: boolean;
    overrideLocaleOrder?: StoreLanguageItem[];
    showLabel?: boolean;
}

export type DataviewFormatterPropTypeMap = {
    string: null,
    alignment: DataviewAlignmentFormatterProps,
    locale: DataviewLocaleFormatterProps,
    currency: null
}

export type DataviewFormatterProps<Tformatter extends DataviewFormatter> = DataviewFormatterPropTypeMap[Tformatter];

const DataviewFormatterMap: Record<DataviewFormatter, VueCons> = {
    alignment: DataviewRendererAlignmentFormatter,
    string: DataviewRendererStringFormatter,
    locale: DataviewRendererLocaleFormatter,
    currency: DataviewRendererCurrencyFormatter
}

export function createFormatter<Tformatter extends DataviewFormatter>
    (formatter: Tformatter, props?: DataviewFormatterProps<Tformatter>): VueCons {
    const vueProps: Record<string, PropsConfig> = Object.fromEntries(Object.entries(props ?? {})
        .map(([key, value]) => [key, {
            required: true,
            default: value
        }]));

    return {
        ...DataviewFormatterMap[formatter],
        ...{
            props: {
                ...('props' in DataviewFormatterMap[formatter]
                    ? (DataviewFormatterMap[formatter] as any)?.props
                    : {}
                ),
                ...vueProps
            }
        }
    };
}
