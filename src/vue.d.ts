import { BreadcrumbItem } from '@pictaccio/admin-gui/core/types/breadcrumb_item';
import { validateCapability } from '@pictaccio/admin-gui/utils/validate_capability';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        count: number
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
        $validateCapability: typeof validateCapability;
        $route: RouteLocationNormalizedLoaded;
        $router: Router;
        $i18n: I18n;
        $t: (key: string, ...params: any[]) => string;
        $te: (key: string, locale?: string) => boolean;
    }
}

declare module 'vue-router' {
    interface RouteMeta {
        capabilityQuery?: string;
        title?: string;
        topLevelBreadcrumb?: Pick<BreadcrumbItem, 'routerLink' | 'display'>;
    }
}
