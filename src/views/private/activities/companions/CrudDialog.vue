<style lang="scss" scoped>
.btn-primary {
    order: 2;
}

.btn-secondary {
    order: 0;
    :deep(.cancel) {
        order: 1;
    }

    &.delete {
        margin-right: auto;
    }
}

:deep(.fused-inputs) {
    margin-top: -0.2rem;
}
</style>

<template>
    <dialog-box ref="crud-dialog"
                v-if="dialogVisible"
                @dialog-close="dialogClose"
                :dismiss="true"
                :overlay="true"
                :title="$t(`generic.ui.crud.${crudDialogStatus.toString()}`,
                {
                    activity: $i18n.locale === 'fr'
                        ? $t(`activities.${activity}.single`).toLowerCase()
                        : $t(`activities.${activity}.single`),
                    item: rowSelected?.name_locale
                        ? rowSelected?.name_locale[$i18n.locale]
                        : rowSelected?.internal_name
                })">
        <template #content>
            <crud-dialog-content ref="form"
                                 v-if="dataSourceMap"
                                 :crudStatus="crudDialogStatus"
                                 :fields="columns.headers">
                <template v-for="field in columns.headers.filter(header => !header.tableOnly)"
                          :key="field"
                          #[field.name]>
                    <slot :name="field.name"></slot>
                </template>
            </crud-dialog-content>
        </template>
        <template #uiDialog>
            <slot name="uiDialog"></slot>
            <button class="btn btn-primary" @click="confirmClick">
                {{ $t(`generic.ui.confirm`) }}
            </button>
            <button v-if="crudDialogStatus === 'update' &&
                        $validateCapability(`${permission}:delete`) &&
                        featureArchiveDelete"
                    class="btn btn-secondary delete"
                    @click="deleteClick">
                {{ $t(`generic.ui.${archiveBtn ? 'archive' : 'delete'}`) }}
            </button>
        </template>
    </dialog-box>
</template>

<script lang="ts">
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { DataSourceMap } from '@pictaccio/admin-gui/core/types/data_source_map';
import DialogBox from '@pictaccio/admin-gui/views/components/layout/DialogBox.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataTableColumns } from '@pictaccio/admin-gui/core/types/data_table_columns';
import CrudDialogContent from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialogContent.vue';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';

@Component({
    name: 'CRUD Dialog',
    components: {
        CrudDialogContent,
        FontAwesomeIcon
    },
    emits: [
        'confirm',
        'delete',
        'close'
    ],
    expose: [
        'closeDialog',
        'getActivity',
        'getFields',
        'openDialog',
        'refreshField',
        'setActivity',
        'setColumns',
        'setCrudDialogStatus',
        'setRowSelected',
        'update'
    ]
})
export default class CrudDialog<T> extends Vue {
    @Prop
    private permission?: string;
    @Prop
    private allowArchiveDelete?: boolean;
    @Prop
    private archiveBtn: boolean;
    private featureArchiveDelete?: boolean;
    private activity: string;
    private columns: DataTableColumns;
    private crudDialogStatus: CRUDStatus = 'read';
    private rowSelected: any;
    private dataSourceMap: DataSourceMap<T, any, any, any>;
    public dialogVisible = false;

    public closeDialog(): void {
        // @ts-ignore
        if (this.$refs['crud-dialog']) {
            (this.$refs['crud-dialog'] as DialogBox).closeDialog();
        }
        this.dialogVisible = false;
        this.crudDialogStatus = 'read';
    }

    public getActivity(): string {
        return this.activity;
    }

    public getFields(): any {
        return (this.$refs['form'] as CrudDialogContent<T>).getFields();
    }

    public openDialog(): void {
        this.dialogVisible = true;
        this.$nextTick(() => {
            // @ts-ignore
            (this.$refs['crud-dialog'] as DialogBox).openDialog();
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<T, any, any, any>) {
        (this.$refs['form'] as CrudDialogContent<T>).refreshField(fieldRef, dataSource);
    }

    public setActivity(activity: string): void {
        this.activity = activity;
    }

    public setColumns(columns: DataTableColumns): void {
        this.columns = columns;
    }

    public setCrudDialogStatus(status: CRUDStatus): void {
        this.crudDialogStatus = status;
    }

    public setRowSelected(row): void {
        this.rowSelected = row;
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        this.featureArchiveDelete = this.allowArchiveDelete !== undefined
            ? this.allowArchiveDelete
            : true;
    }
    public update(dataSourceMap: DataSourceMap<T, any, any, any>): void {
        this.dataSourceMap = dataSourceMap;
        this.$nextTick(() => {
            (this.$refs['form'] as CrudDialogContent<T>).update(dataSourceMap);
        });
    }

    /* EVENT HANDLERS */
    private confirmClick(): void {
        if ((this.$refs['form'] as CrudDialogContent<T>).validate()) {
            this.$emit('confirm');
        } else {
            globalToast(this.$t('messages.missingInputs'), 'warning');
        }
    }

    private deleteClick(): void {
        this.$emit('delete');
    }

    private dialogClose(): void {
        this.$emit('close');
    }
}

</script>
