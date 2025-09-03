<style lang="scss" scoped>
.default-render-target {
    grid-column: 1 / -1;
}
</style>

<template>
    <div ref="default-render-target" class="default-render-target"></div>
</template>

<script lang="ts">
import {
    DatasourceDefinitionType,
    DatasourceDefinitionValueSubType, DataType
} from '@pictaccio/admin-gui/datasources/data_definitions';
import { renderVueNode } from '@pictaccio/admin-gui/utils/render_vue_node';
import {
    DataviewComponent,
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_component';
import { DataviewDatasource } from '@pictaccio/admin-gui/views/components/widgets/dataview/datasource/dataview_datasource';
import { DataviewHost } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_host';
import { DataviewRenderer } from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/dataview_renderer';
import {
    DataviewEventKey,
    DataviewEventListener,
    DataviewEventValueTypeMap
} from '@pictaccio/admin-gui/views/components/widgets/dataview/event_types';
import {
    DataviewStoreKey,
    DataviewStoreValueTypeMap,
    DataviewStoreValueTypeTypes
} from '@pictaccio/admin-gui/views/components/widgets/dataview/store_keys';
import mitt from 'mitt';
import { Component, Vue } from 'vue-facing-decorator';

type ComponentMetadata<Tdata, HasSteams extends boolean = false> = {
    meta: DataviewComponentConfiguration;
    ref: DataviewComponent<Tdata, HasSteams>;
};

@Component({
    name: 'Dataview',
    components: {
    },
    emits: [
    ],
    expose: [
        'addComponents',
        'emit',
        'getData',
        'getStoreValue',
        'on',
        'setDataDefinition',
        'setStoreValue',
        'showRenderer'
    ]
})
export default class Dataview<Tdata, HasStreams extends boolean = false> extends Vue
        implements DataviewHost<Tdata, HasStreams> {
    private components: Record<string, ComponentMetadata<Tdata, HasStreams>> = {};
    private events = mitt();
    private hasDatasource = false;
    private kvStore: Map<DataviewStoreKey, DataviewStoreValueTypeTypes> =
        new Map<DataviewStoreKey, DataviewStoreValueTypeTypes>();

    /* PUBLIC */
    public addComponents(
            components: DataviewComponent<Tdata, HasStreams> | DataviewComponent<Tdata, HasStreams>[]): void {
        components = Array.isArray(components) ? components : [components];

        for (const component of components) {
            this.activateComponent(component);
        }
    }

    public showRenderer(name: string, target: 'default'): void {
        if (!this.components[name] || this.components[name].meta.type !== 'renderer') {
            throw new Error(`Component ${name} not found`);
        }

        const renderer = this.components[name].ref as DataviewRenderer<Tdata, HasStreams>;
        const defaultRenderTarget = this.$refs['default-render-target'] as HTMLElement;

        renderVueNode(renderer.render(), defaultRenderTarget);
    }

    /* DATAVIEW_HOST INTERFACE */
    public emit<Tkey extends DataviewEventKey>(event: Tkey, arg: DataviewEventValueTypeMap<Tkey>): void {
        this.events.emit(event, arg);
    }

    public hasStoreValue<Tkey extends DataviewStoreKey>(key: Tkey): boolean {
        return this.kvStore.has(key);
    }

    public getData<Tstream extends keyof Tdata | undefined>(stream?: Tstream)
            : Promise<DataType<Tdata, HasStreams, Tstream>[]> {
        if (!this.hasDatasource) {
            throw new Error('No datasource component found');
        }

        const datasource = Object.values(this.components)
            .find(c => c.meta.type === 'datasource').ref as DataviewDatasource<Tdata, HasStreams>;
        return datasource.getData(stream);
    }

    public getStoreValue<Tkey extends DataviewStoreKey>(key: Tkey): DataviewStoreValueTypeMap<Tkey> {
        if (!this.kvStore.has(key)) {
            throw new Error(`Key ${key} not found in store`);
        }

        return this.kvStore.get(key);
    }

    public on<Tkey extends DataviewEventKey>(event: Tkey, listener: DataviewEventListener<Tkey>): void {
        this.events.on(event as string, listener as () => void);
    }

    public setDataDefinition<Ttype extends DatasourceDefinitionType>(
        type: DatasourceDefinitionType,
        name: string,
        definition: DatasourceDefinitionValueSubType<Ttype>)
        : void {
        if (!this.hasDatasource) {
            throw new Error('No datasource component found');
        }

        const datasource = Object.values(this.components)
            .find(c => c.meta.type === 'datasource').ref as DataviewDatasource<Tdata, HasStreams>;
        datasource.setDataDefinition(type, name, definition);
    }

    public setDirty(): void {
        this.emit('dataview-dirty', null);
    }

    public setStoreValue<Tkey extends DataviewStoreKey>(key: Tkey, value: DataviewStoreValueTypeMap<Tkey>): void {
        this.kvStore.set(key, value);
    }

    /* LIFECYCLE */

    /* EVENT HANDLER */

    /* PRIVATE */
    private activateComponent(component: DataviewComponent<Tdata, HasStreams>): void {
        const metadata = component.configure(this);

        if (metadata.type === 'datasource' && this.hasDatasource) {
            throw new Error('Only one datasource component is allowed');
        } else if (metadata.type === 'datasource') {
            this.hasDatasource = true;
        }

        this.components[metadata.name] = {
            meta: metadata,
            ref: component
        };
    }
}
</script>
