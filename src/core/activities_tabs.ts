export const activitiesTabs = {
    configureStore: {
        id: 'configureStore',
        subs: [
            'AppIntegration',
            'StoreCustomization',
            'ExposeCodeSnippet',
            'ManageContactInfo',
            'StoreStatus',
            'TaxId'
        ]
    },
    // subscription: {
    //     id: 'subscription',
    //     subs: [
    //         'ChangePlan',
    //         'ManageSubscription',
    //         'SubscriptionStatus'
    //     ]
    // },
    users: {
        id: 'users',
        subs: [
            'ManageUsers'
        ]
    },
    backgrounds: {
        id: 'backgrounds',
        subs: [
            'Backgrounds',
            'BackgroundCategories'
        ]
    },
    campaign: {
        id: 'campaign',
        subs: [
            'Campaign',
            'FreeShipping',
            'Crosssells'
        ]
    },
    codePromo: {
        id: 'codePromo',
        subs: [
            'CodePromo'
        ]
    },
    products: {
        id: 'products',
        subs: [
            'Products',
            'CustomProduct',
            'ProductThemes',
            'ProductCategories',
            'ProductCatalogs'
        ]
    },
    reports: {
        id: 'reports',
        subs: [
            'ReportSales'/*,
            'ReportBackgroundUsage'*/
        ]
    },
    shipping: {
        id: 'shipping',
        subs: [
            'ShippingOptions',
            'ShippingGroups'
        ]
    },
    manageSessions: {
        id: 'manageSessions',
        subs: [
            'ManageSessions',
            'SubjectCodeCreation'
        ]
    },
    subjects: {
        id: 'subjects',
        subs: [
            'Subjects',
            'SubjectGroups'
        ]
    },
    orders: {
        id: 'orders',
        subs: [
            'Orders'
        ]
    },
    workflows: {
        id: 'workflows',
        subs: [
            'Workflows'
        ]
    }
}
