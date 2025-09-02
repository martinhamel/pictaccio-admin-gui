import { decodeExtra } from '@pictaccio/admin-gui/src/utils/route_extra';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { ComponentBase, Prop, Vue } from 'vue-facing-decorator';
import DialogBox from '@pictaccio/admin-gui/src/views/components/layout/DialogBox.vue';

@ComponentBase({
    components: [
        DataTable,
        DialogBox,
        Filters,
        TutorialText
    ],
    emits: [
        'menu-visible'
    ],
    expose: [
        'canSafelyExit',
        'unserializeExtra'
    ]
})
export default class AdminActivities extends Vue {
    @Prop
    public extra: string | null = null;
    public dialogVisible = false;
    public tableHasRows = false;
    public unsavedChange = false;

    public canSafelyExit(): boolean {
        return true;
    }

    public checkAndReloadFilters(): void {
        this.$nextTick(() => {
            const decodedExtra = decodeExtra(this.extra);

            if (decodedExtra && decodedExtra.filters) {
                const waitForFilters = async () => {
                    if (this.$refs['filters-holder']) {
                        try {
                            // @ts-ignore
                            await (this.$refs['filters-holder'] as Filters)
                                .unserializeFilters(decodedExtra.filters);
                        } catch {
                            // @ts-ignore
                            (this.$refs['filters-holder'] as Filters).applyFilters();
                        }
                    } else {
                        setTimeout(waitForFilters, 100);
                    }
                }

                waitForFilters();
            }
        });
    }

    public checkIfTableHasRow(count: number): void {
        this.tableHasRows = count > 0;
    }

    public closeDialog(dialog: string): void {
        // @ts-ignore
        (this.$refs[dialog] as DialogBox).closeDialog();
        this.dialogVisible = false;
    }

    public inputChange(): void {
        this.unsavedChange = !this.canSafelyExit();
    }

    public openDialog(dialog: string): void {
        this.dialogVisible = true;
        this.$nextTick(() => {
            // @ts-ignore
            (this.$refs[dialog] as DialogBox).openDialog();
        });
    }

    /* LIFECYCLE */
    public created(): void {
        //
    }

    public mounted(): void {
        this.$emit('menu-visible', true);
        this.$emit('initialFormData');
    }
}
