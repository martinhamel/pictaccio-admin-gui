import '../store/apply_config';
import App from '../store/modules/app';
import AppIntegration from '../store/modules/app_integration';
import Auth from '../store/modules/auth';
import BackgroundCategories from '../store/modules/background_categories';
import Backgrounds from '../store/modules/backgrounds';
import Config from '../store/modules/config';
import Crosssells from '../store/modules/cross_sells';
import CrudOverlay from '../store/modules/crud_overlay';
import CurrentActivity from '../store/modules/current_activity';
import CustomProducts from '../store/modules/custom_products';
import FormValidator from '../store/modules/form_validator';
import GlobalBreadcrumb from '../store/modules/global_breadcrumb';
import Notifications from '../store/modules/notifications';
import Orders from '../store/modules/orders';
import ProductCatalogs from '../store/modules/product_catalogs';
import ProductCategories from '../store/modules/product_categories';
import ProductThemes from '../store/modules/product_themes';
import Products from '../store/modules/products';
import PromoCodeCampaigns from '../store/modules/promo_code_campaigns';
import PromoCodes from '../store/modules/promo_codes';
import ShippingPromo from '../store/modules/promo_free_shippings';
import Prompt from '../store/modules/prompt';
import BackgroundCategoriesReader from '../store/modules/readers/background_categories_reader';
import BackgroundsReader from '../store/modules/readers/backgrounds_reader';
import CrosssellsReader from '../store/modules/readers/cross_sells_reader';
import CustomProductsReader from '../store/modules/readers/custom_products_reader';
import ProductCatalogsReader from '../store/modules/readers/product_catalogs_reader';
import ProductCategoriesReader from '../store/modules/readers/product_categories_reader';
import ProductThemesReader from '../store/modules/readers/product_themes_reader';
import ProductsReader from '../store/modules/readers/products_reader';
import PromoCodeCampaignsReader from '../store/modules/readers/promo_code_campaigns_reader';
import SessionsReader from '../store/modules/readers/sessions_reader';
import ShippingGroupsReader from '../store/modules/readers/shipping_groups_reader';
import ShippingMethodsReader from '../store/modules/readers/shipping_methods_reader';
import ShippingOptionsReader from '../store/modules/readers/shipping_options_reader';
import WorkflowsReader from '../store/modules/readers/workflows_reader';
import SessionSubjectData from '../store/modules/session_subject_data';
import Sessions from '../store/modules/sessions';
import ShippingGroups from '../store/modules/shipping_groups';
import ShippingOptions from '../store/modules/shipping_options';
import StoreConfig from '../store/modules/store_config';
import StoreCustomization from '../store/modules/store_customization';
import StoreStatus from '../store/modules/store_status';
import SubjectCodes from '../store/modules/subject_codes';
import SubjectGroups from '../store/modules/subject_groups';
import Subjects from '../store/modules/subjects';
import UploadStatus from '../store/modules/upload_status';
import User from '../store/modules/user';
import UserInfo from '../store/modules/user_info';
import UserPreference from '../store/modules/user_preference';
import Workflows from '../store/modules/workflows';
import { createStore } from 'vuex';

export const store = createStore({
    modules: {
        App,
        AppIntegration,
        Auth,
        BackgroundCategories,
        BackgroundCategoriesReader,
        Backgrounds,
        BackgroundsReader,
        Config,
        Crosssells,
        CrosssellsReader,
        CrudOverlay,
        CurrentActivity,
        CustomProducts,
        CustomProductsReader,
        FormValidator,
        GlobalBreadcrumb,
        Notifications,
        Orders,
        ProductCatalogs,
        ProductCatalogsReader,
        ProductCategories,
        ProductCategoriesReader,
        ProductThemes,
        ProductThemesReader,
        Products,
        ProductsReader,
        PromoCodeCampaigns,
        PromoCodeCampaignsReader,
        PromoCodes,
        Prompt,
        SessionSubjectData,
        Sessions,
        SessionsReader,
        ShippingGroups,
        ShippingGroupsReader,
        ShippingMethodsReader,
        ShippingOptions,
        ShippingOptionsReader,
        ShippingPromo,
        StoreConfig,
        StoreCustomization,
        StoreStatus,
        SubjectCodes,
        SubjectGroups,
        Subjects,
        UploadStatus,
        User,
        UserInfo,
        UserPreference,
        Workflows,
        WorkflowsReader
    }
});
