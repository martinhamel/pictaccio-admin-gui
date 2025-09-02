import { USER_LOCAL_STORAGE_KEY } from './core/user_local_storage_key';
import { store } from './store';
import { resetBreadcrumb } from './utils/global_breadcrumb';
import { nextTick } from 'vue';
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router';
import { validateCapability } from './utils/validate_capability';
import Login from './views/public/Login.vue';
import Logout from './views/private/Logout.vue';
import Dashboard from './views/private/Dashboard.vue';
import DebugPage from './views/private/DebugPage.vue';
import { i18n } from './i18n';
import localStorageService from './services/local_storage_service';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Welcome',
        component: Dashboard,
        meta: {
            title: 'page.title.welcome'
        }
    },
    {
        path: '/debug',
        name: 'Debug',
        component: DebugPage,
        meta: {
            title: 'page.title.debug',
            topLevelBreadcrumb: {
                display: 'page.title.debug',
                routerLink: '/debug'
            }
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'page.title.login'
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        meta: {
            title: 'page.title.logout'
        }
    },
    {
        path: '/invite/:email/:token',
        name: 'Accept invite',
        component: () => import('./views/public/AcceptInvite.vue'),
        props: true,
        meta: {
            title: 'page.title.invite'
        }
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: () => import('./views/public/ForgotPassword.vue'),
        meta: {
            title: 'page.title.forgotPassword'
        }
    },
    {
        path: '/activities/report-background-usage/:extra?',
        name: 'Background Usage',
        component: () => import('./views/private/activities/ReportBackgroundUsage.vue'),
        meta: {
            capabilityQuery: 'report:read',
            title: 'page.title.reportBackgroundUsage',
            topLevelBreadcrumb: {
                display: 'activities.titles.reports',
                routerLink: '/activities/report-sales'
            }
        },
        props: true
    },
    {
        path: '/activities/custom-product/:extra?',
        name: 'Custom Product',
        component: () => import('./views/private/activities/ManageCustomProduct.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.customProduct',
            topLevelBreadcrumb: {
                display: 'activities.titles.products',
                routerLink: '/activities/products'
            }
        },
        props: true
    },
    {
        path: '/activities/backgrounds/:extra?',
        name: 'Backgrounds',
        component: () => import('./views/private/activities/Backgrounds.vue'),
        meta: {
            capabilityQuery: 'background:read',
            title: 'page.title.backgrounds',
            topLevelBreadcrumb: {
                display: 'activities.titles.backgrounds',
                routerLink: '/activities/backgrounds'
            }
        },
        props: true
    },
    {
        path: '/activities/background-categories/:extra?',
        name: 'Background Categories',
        component: () => import('./views/private/activities/BackgroundCategories.vue'),
        meta: {
            capabilityQuery: 'background:read',
            title: 'page.title.backgroundCategories',
            topLevelBreadcrumb: {
                display: 'activities.titles.backgrounds',
                routerLink: '/activities/backgrounds'
            }
        },
        props: true
    },
    {
        path: '/activities/campaign/:extra?',
        name: 'Codes Promo campaign',
        component: () => import('./views/private/activities/PromoCodeCampaign.vue'),
        meta: {
            capabilityQuery: 'campaign:read',
            title: 'page.title.promo',
            topLevelBreadcrumb: {
                display: 'activities.titles.campaign',
                routerLink: '/activities/campaign'
            }
        },
        props: true
    },
    {
        path: '/activities/code-promo/:campaignId/:extra?',
        name: 'Codes Promo',
        component: () => import('./views/private/activities/PromoCodes.vue'),
        meta: {
            capabilityQuery: 'campaign:read',
            title: 'page.title.codePromo',
            topLevelBreadcrumb: {
                display: 'activities.titles.campaign',
                routerLink: '/activities/campaign'
            }
        },
        props: true
    },
    {
        path: '/activities/create-session',
        name: 'Create Session',
        component: () => import('./views/private/activities/create_session/CreateSession.vue'),
        meta: {
            capabilityQuery: 'session:create',
            canSafelyExit: true,
            title: 'page.title.createSession'
        }
    },
    {
        path: '/activities/free-shipping',
        name: 'Free Shipping',
        component: () => import('./views/private/activities/FreeShipping.vue'),
        meta: {
            capabilityQuery: 'campaign:read',
            title: 'page.title.freeShipping',
            topLevelBreadcrumb: {
                display: 'activities.titles.campaign',
                routerLink: '/activities/campaign'
            }
        }
    },
    {
        path: '/activities/manage-sessions/:extra?',
        name: 'Manage Sessions',
        component: () => import('./views/private/activities/ManageSessions.vue'),
        meta: {
            capabilityQuery: 'session:read',
            title: 'page.title.manageSessions',
            topLevelBreadcrumb: {
                display: 'activities.titles.manageSessions',
                routerLink: '/activities/manage-sessions'
            }
        },
        props: true
    },
    {
        path: '/activities/orders/:extra?',
        name: 'Orders',
        component: () => import('./views/private/activities/Orders.vue'),
        meta: {
            capabilityQuery: 'order:read',
            title: 'page.title.orders',
            topLevelBreadcrumb: {
                display: 'page.title.orders',
                routerLink: '/activities/orders'
            }
        },
        props: true
    },
    {
        path: '/activities/order/:orderId',
        name: 'View Order',
        component: () => import('./views/private/activities/ViewOrder.vue'),
        meta: {
            capabilityQuery: 'order:read',
            title: 'page.title.orderView',
            topLevelBreadcrumb: {
                display: 'page.title.orders',
                routerLink: '/activities/orders'
            }
        },
        props: true
    },
    {
        path: '/activities/products/:extra?',
        name: 'Products',
        component: () => import('./views/private/activities/Products.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.products',
            topLevelBreadcrumb: {
                display: 'page.title.products',
                routerLink: '/activities/products'
            }
        },
        props: true
    },
    {
        path: '/activities/product-categories/:extra?',
        name: 'Product Categories',
        component: () => import('./views/private/activities/ProductCategories.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.productCategories',
            topLevelBreadcrumb: {
                display: 'page.title.products',
                routerLink: '/activities/products'
            }
        },
        props: true
    },
    {
        path: '/activities/product-catalogs/:extra?',
        name: 'Product Catalogs',
        component: () => import('./views/private/activities/ProductCatalogs.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.productCatalogs',
            topLevelBreadcrumb: {
                display: 'page.title.products',
                routerLink: '/activities/products'
            }
        },
        props: true
    },
    {
        path: '/activities/product-themes/:extra?',
        name: 'Product Themes',
        component: () => import('./views/private/activities/ProductThemes.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.productThemes',
            topLevelBreadcrumb: {
                display: 'page.title.products',
                routerLink: '/activities/products'
            }
        },
        props: true
    },
    {
        path: '/activities/crosssells/:extra?',
        name: 'Cross sells',
        component: () => import('./views/private/activities/Crosssells.vue'),
        meta: {
            capabilityQuery: 'product:read',
            title: 'page.title.crosssells',
            topLevelBreadcrumb: {
                display: 'activities.titles.campaign',
                routerLink: '/activities/campaign'
            }
        },
        props: true
    },
    {
        path: '/activities/report-sales/:extra?',
        name: 'Sales Report',
        component: () => import('./views/private/activities/ReportSales.vue'),
        meta: {
            capabilityQuery: 'report:read',
            title: 'page.title.reportSales',
            topLevelBreadcrumb: {
                display: 'activities.titles.reports',
                routerLink: '/activities/report-sales'
            }
        },
        props: true
    },
    {
        path: '/activities/shipping-groups/:extra?',
        name: 'Shipping Groups',
        component: () => import('./views/private/activities/ShippingGroups.vue'),
        meta: {
            capabilityQuery: 'shipping:read',
            title: 'page.title.shippingGroups',
            topLevelBreadcrumb: {
                display: 'activities.titles.shipping',
                routerLink: '/activities/shipping-options'
            }
        },
        props: true
    },
    {
        path: '/activities/shipping-options/:extra?',
        name: 'Shipping Options',
        component: () => import('./views/private/activities/ShippingOptions.vue'),
        meta: {
            capabilityQuery: 'shipping:read',
            title: 'page.title.shippingOptions',
            topLevelBreadcrumb: {
                display: 'activities.titles.shipping',
                routerLink: '/activities/shipping-options'
            }
        },
        props: true
    },
    {
        path: '/activities/subjects/:sessionId/:extra?',
        name: 'View subjects',
        component: () => import('./views/private/activities/ManageSubjects.vue'),
        meta: {
            capabilityQuery: 'session:read',
            title: 'page.title.subjects',
            topLevelBreadcrumb: {
                display: 'activities.titles.manageSessions',
                routerLink: '/activities/manage-sessions'
            }
        },
        props: true
    },
    {
        path: '/activities/subject-groups/:sessionId/:extra?',
        name: 'View subject groups',
        component: () => import('./views/private/activities/ManageSubjectGroups.vue'),
        meta: {
            capabilityQuery: 'session:read',
            title: 'page.title.subjectGroups',
            topLevelBreadcrumb: {
                display: 'activities.titles.manageSessions',
                routerLink: '/activities/manage-sessions'
            }
        },
        props: true
    },
    {
        path: '/activities/subject-code-creation',
        name: 'Subjects Codes',
        component: () => import('./views/private/activities/SubjectCodeCreation.vue'),
        meta: {
            capabilityQuery: 'session:read',
            title: 'page.title.subjectCodeCreation'
        }
    },
    {
        path: '/activities/workflows/:extra?',
        name: 'Workflows',
        component: () => import('./views/private/activities/Workflows.vue'),
        meta: {
            capabilityQuery: 'session:read',
            title: 'page.title.workflows',
            topLevelBreadcrumb: {
                display: 'page.title.workflows',
                routerLink: '/activities/workflows'
            }
        },
        props: true
    },
    {
        path: '/400',
        name: 'Bad Request',
        component: () => import('./views/components/ErrorPage.vue'),
        props: {
            errorCode: '400'
        },
        meta: {
            title: 'page.title.badRequest'
        }
    },
    {
        path: '/401',
        name: 'Unauthorized',
        component: () => import('./views/components/ErrorPage.vue'),
        props: {
            errorCode: '401'
        },
        meta: {
            title: 'page.title.unauthorized'
        }
    },
    {
        path: '/403',
        name: 'Forbidden',
        component: () => import('./views/components/ErrorPage.vue'),
        props: {
            errorCode: '403'
        },
        meta: {
            title: 'page.title.forbidden'
        }
    },
    {
        path: '/500',
        name: 'Internal Server Error',
        component: () => import('./views/components/ErrorPage.vue'),
        props: {
            errorCode: '500'
        },
        meta: {
            title: 'page.title.internalServerError'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('./views/components/ErrorPage.vue'),
        props: {
            errorCode: '404'
        },
        meta: {
            title: 'page.title.notFound'
        }
    }
];

const publicRoutes = [
    '/login',
    '/invite/:email/:token',
    '/forgot-password'
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const DEFAULT_TITLE = 'Pictaccio';
const TITLE_PREFIX = 'Pictaccio - ';

router.beforeEach(async (to, from, next) => {
    const user = JSON.parse(localStorageService.get(USER_LOCAL_STORAGE_KEY, false));
    const matchedRoutes = to.matched.map(i => i.path);
    const authRequired = publicRoutes.reduce<boolean>((required: boolean, route: string): boolean => {
        return required && !matchedRoutes.includes(route);
    }, true);
    const isLoggedIn = user?.loggedIn;

    if (isLoggedIn && to?.meta.capabilityQuery && !validateCapability(to.meta.capabilityQuery)) {
        next('/403');
    } else {
        next(authRequired && !isLoggedIn ? '/login' : undefined);
    }
});

router.afterEach((to, from, failure) => {
    if (to.name !== from.name) {
        store.commit('App/commitContentVisibility', false);
    }

    if (to.meta.topLevelBreadcrumb) {
        resetBreadcrumb({ id: 'level1', ...to.meta.topLevelBreadcrumb });
    }

    nextTick(() => {
        document.title = TITLE_PREFIX + i18n.global.t(to.meta.title) || DEFAULT_TITLE;
        if (to.name !== from.name) {
            store.commit('App/commitContentVisibility', true);
        }
    });
})

export default router;
