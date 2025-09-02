import { ComponentBase, Vue } from 'vue-facing-decorator';

@ComponentBase({
    expose: [
        'validateValue'
    ]
})
export default class ShippingMethod extends Vue {
    public validateValue(values: Record<string, string | number | string[]>, key: string): string | number | string[] {
        if (!values || !key) {
            return null;
        }
        if (!values[key]) {
            return null;
        }
        return values[key];
    }
}
