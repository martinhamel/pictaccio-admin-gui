<style lang="scss" scoped>
.csv-upload-holder {
    --csv-upload-holder-max-height: var(--boxes-min-height);
    position: relative;
    width: 100%;
    min-height: var(--boxes-min-height);
    max-height: var(--csv-upload-holder-max-height);
    overflow: auto;

    [data-theme-color="dark"] & {
        --color-background-table-header: var(--color-primary-5);
        --color-background-table-body-odd: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                0.8
        );
        --color-background-table-body-even: var(--color-mix-5-6-step-3);
        --color-text-upload-icon: var(--color-mix-4-6-step-3);
        --color-text-upload-icon-hover: var(--color-primary-4);
    }

    [data-theme-color="light"] & {
        --color-background-table-header: var(--color-mix-4-7-step-1);
        --color-background-table-body-odd: hsla(
                var(--color-mix-4-7-step-1-h),
                var(--color-mix-4-7-step-1-s),
                var(--color-mix-4-7-step-1-l),
                0.7
        );
        --color-background-table-body-even: var(--color-primary-2);
        --color-text-upload-icon: var(--color-mix-1-7-step-3);
        --color-text-upload-icon-hover: var(--color-primary-1);
    }
}

.type-file {
    width: 100%;
    height: 100% !important;
    min-height: 22rem;
    border: 1px solid var(--color-text-upload-icon) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-upload-icon);
    transition-duration: 0.3s;
    border-radius: $ruler-border-radius;
    padding: 0 !important;
    margin: 0 !important;
    cursor: pointer;
    overflow: auto;

    &:hover {
        cursor: pointer;

        .upload-label {
            color: var(--color-text-upload-icon-hover);
        }
    }

    .upload-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        --font-weight: 500;
        color: var(--color-text-upload-icon);
        transition-duration: 0.3s;
        padding: 1rem;
        pointer-events: none;

        .svg-inline--fa {
            font-size: 7rem;
            margin: 1rem;
        }
    }

    .uploaded-file {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: 1rem;
        padding: 0.5rem;
        overflow: auto;

        .csv-table {
            font-size: 1.4rem;
            grid-auto-rows: 4rem;

            tr {
                display: grid;
                grid-auto-flow: column;
                grid-auto-columns: minmax(10rem, 1fr);
                min-height: 3.5rem;
                height: min-content;

                &:nth-of-type(odd) {
                    background-color: var(--color-background-table-body-odd);
                }

                &:nth-of-type(even) {
                    background-color: var(--color-background-table-body-even);
                }

                &:has(th) {
                    background-color: transparent;
                }

                th {
                    display: flex;
                    align-items: center;
                    color: var(--color-text-normal);
                    padding: 0.5rem;
                    background-color: var(--color-background-table-header);
                }

                td {
                    display: flex;
                    align-items: center;
                    padding: 0.5rem;
                    color: var(--color-text-normal);

                    &.invalid,
                    &:empty {
                        background-color: var(--color-semantic-error);

                        [data-theme-color="dark"] & {
                            opacity: 0.5;
                        }

                        [data-theme-color="light"] & {
                            color: var(--color-text-normal-reversed);
                        }
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div class="csv-upload-holder">
        <label class="type-file" ref="csv-upload-holder">
            <label v-if="csvData === undefined" class="upload-label">
                <font-awesome-icon :icon="['far', 'file-upload']" />
                <span>{{ $t('generic.ui.upload.csv') }}</span>
            </label>
            <div v-if="csvData !== undefined" class="uploaded-file" ref="preview">
                <table class="csv-table" ref="csv-table">
                    <tr>
                        <th v-for="header in Object.keys(csvData[0])" :key="header"
                            :class="header">
                            {{ header }}
                        </th>
                    </tr>
                     <tr v-for="row in csvData" :key="row">
                         <td v-for="(cell, index) in row" :key="cell"
                             :class="`${index}-${dasherize(cell)}`">
                             {{ cell }}
                         </td>
                     </tr>
                </table>
            </div>
            <input type="file" ref="csv" hidden accept=".csv, text/csv" @change="csvChange">
        </label>
        <input type="hidden" ref="loufairy-bridge" :name="name" __csvUpload__>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { dasherize, detectExcelEncoding, fixExcelEncoding } from '@loufa/loufairy';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { parse } from 'csv-parse';
import { detect } from 'jschardet';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'CSV Upload',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'csv-change'
    ],
    expose: [
        'getCsv',
        'invalidateCodes',
        'setCsv'
    ]
})
export default class CsvUpload extends Vue {
    @Prop
    private name: string;

    private apiUrl = environment.apiUrl;
    private csvData: Record<string, any>;
    private fileInput: HTMLInputElement;

    public dasherize: (input: string) => string = dasherize;

    public getCsv(): Record<string, any> {
        return {}
    }

    public invalidateCodes(codes: string[], mapping: Record<string, string>): void {
        const headerName = Object.keys(mapping).find((key) => mapping[key] === 'code');

        for (const code of codes) {
            const cell = this.getCellByHeader(headerName, code);
            if (cell) {
                cell.classList.add('invalid');
            }
        }
    }

    public setCsv(file: string): void {
        // this.fileOnLoad = file;
        this.$forceUpdate();
    }

    /* LIFECYCLE */
    public mounted(): void {
        const loufairyBridge = this.$refs['loufairy-bridge'] as HTMLElement;
        loufairyBridge['__loufairyBridge__'] = this;
    }

    /* EVENT HANDLERS */
    private async csvChange(event): Promise<void> {
        if (!event.target.files[0]) {
            return;
        }
        if (event.target.files[0].type !== 'text/csv') {
            globalToast(this.$t('messages.csvNotMatch'), 'error');
            return;
        }
        const previewRef = this.$refs['preview'] as HTMLElement;
        const data = await this.parseCsv(event.target.files[0]);

        this.csvData = data;
        this.$emit('csv-change', data);
        this.$forceUpdate();
    }

    /* PRIVATE */
    private asText(file: File): Promise<string> {
        if (!file) {
            return Promise.reject(new Error('No file'));
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            let detected = false;

            reader.addEventListener('error', () => {
                reject(new Error('FileReader error'));
            });

            reader.addEventListener('load', () => {
                if (!detected) {
                    const result = detect(reader.result as Buffer);
                    detected = true;
                    reader.readAsText(file, result.encoding);
                } else {
                    const csvText = reader.result.toString();

                    resolve(detectExcelEncoding(csvText)
                        ? fixExcelEncoding(csvText)
                        : csvText);
                }
            });

            reader.readAsBinaryString(file);
        });
    }

    private getCellByHeader(header: string, value: string): HTMLElement {
        const table = this.$refs['csv-table'] as HTMLTableElement;
        return table.querySelector(`td.${header}-${dasherize(value)}`);
    }

    private async parseCsv(file: File): Promise<Record<string, any>> {
        const csv = await this.asText(file);

        return new Promise((resolve, reject) => {
            parse(csv, {
                cast: false,
                columns: true
            }, (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            });
        });
    }
}
</script>
