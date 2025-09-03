import { DataviewComponent } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_component';
import { VNode } from 'vue';

export interface DataviewRenderer<Tdata, HasSteams extends boolean = false>
    extends DataviewComponent<Tdata, HasSteams> {
    render(): VNode;
}
