import { Vue } from 'vue-facing-decorator';

export class CrudComponents extends Vue {
    public emitReady(parent = this.$parent): void {
        if (typeof parent['reviewInputs'] !== 'function') {
            this.emitReady(parent.$parent);
        } else {
            parent['reviewInputs'](this)
        }
    }
}
