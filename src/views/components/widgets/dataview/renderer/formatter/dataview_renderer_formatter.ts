import { Nestable } from '@pictaccio/admin-gui/views/components/nested_container';
import { ComponentBase, Vue } from 'vue-facing-decorator';

@ComponentBase({
    expose: [
        'setData',
        'setNext'
    ]
})
export abstract class DataviewRendererFormatter extends Vue implements Nestable {
    protected data;

    /* DATAVIEW_TABLE_RENDERER_FORMATTER INTERFACE */
    public setData<Ttype>(value: Ttype): void {
        this.data = value;
    }
}
