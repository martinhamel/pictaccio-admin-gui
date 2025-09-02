export const environment = {
    production: false,
    apiUrl: process.env.VUE_APP_ROOT_URL_API || '', // Must end with /
    guiUrl: process.env.VUE_APP_ROOT_URL_GUI || '', // Updated to use ROOT_URL
    printServiceUrl: process.env.VUE_APP_ROOT_URL_PRINT || '', // Must end with /
    imageFallbackPath: 'img/no-image.jpg',
    features: {
        _appIntegrationsPaypalSandboxEndpoint: true,
        _debug: true,
        _devThemes: false,
        accessReports: true,
        allowUsedCodes: true,
        archiveDeleteBackground: true,
        archiveDeleteBackgroundCategory: true,
        archiveDeleteCampaign: true,
        archiveDeleteCrosssell: true,
        archiveDeleteDeliveryGroup: true,
        archiveDeleteDeliveryOption: true,
        archiveDeleteOrder: true,
        archiveDeleteOrderComment: true,
        archiveDeleteProduct: true,
        archiveDeleteProductCatalog: true,
        archiveDeleteProductCategory: true,
        archiveDeleteProductCustom: true,
        archiveDeleteProductTheme: true,
        archiveDeleteSession: true,
        archiveDeleteSubject: true,
        archiveDeleteSubjectGroup: true,
        archiveDeleteWorkflow: true,
        crudSubjects: true,
        scrubProducts: false,
        sessionDigitalAutoSend: false,
        sessionPhotoSwap: false,
        sessionEditItems: false
    }
};
