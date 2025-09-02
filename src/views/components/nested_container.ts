import { VueCons } from 'vue-facing-decorator';

export type NestedParameter<Ttype extends string, Tprops> = {
    component: VueCons,
    props?: Record<Ttype, Tprops>
};

export interface Nestable {
    setData<T>(value: T): void;
}
