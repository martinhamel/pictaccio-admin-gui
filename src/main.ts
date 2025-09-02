import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@loufa/loufairy';
import 'normalize.css/normalize.css';
import 'animate.css/animate.css';
import { globalToast } from './utils/global_toast';
import { createApp } from 'vue';
import App from './views/App.vue';
import { store } from './store';
import { i18n } from './i18n';
import router from './router';
import { validateCapability } from './utils/validate_capability';

// faIconInCamelCase
import {
    faChevronDoubleDown,
    faCircle as fadCircle,
    faCircleDot,
    faPenField as fadPenField
} from '@fortawesome/pro-duotone-svg-icons'; // fad
import {
    faArrowTurnDown,
    faArrowTurnUp,
    faCheck,
    faCheckCircle,
    faEmptySet as falEmptySet,
    faExclamationCircle,
    faExclamationTriangle,
    faInfoCircle,
    faTimes as falTimes
} from '@fortawesome/pro-light-svg-icons'; // fal
import {
    faArrowRightToArc,
    faArrowUp,
    faAsterisk,
    faBell,
    faBringForward,
    faBug,
    faBullhorn,
    faCabinetFiling,
    faCactus,
    faCalendarAlt,
    faCalendarDay,
    faCamera,
    faCaretDown,
    faCaretUp,
    faCheck as fasCheck,
    faChevronDoubleLeft,
    faChevronDoubleRight,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faCog,
    faEllipsisStrokeVertical,
    faEllipsisVertical,
    faEmptySet as fasEmptySet,
    faEye,
    faEyeSlash,
    faFileChartColumn,
    faFileChartLine,
    faFileDownload,
    faGripDots,
    faGripDotsVertical,
    faHome,
    faImage,
    faImagePortrait,
    faMegaphone,
    faMoon,
    faPaperPlane,
    faPenField as fasPenField,
    faQuestion,
    faReceipt,
    faSearch,
    faSunBright,
    faStar as fasStar,
    faTags,
    faTimes as fasTimes,
    faTrashAlt as fasTrashAlt,
    faTrashCan,
    faTriangle,
    faTruck,
    faUser,
    faUserCircle,
    faUserEdit,
    faUsers
} from '@fortawesome/pro-solid-svg-icons'; // fas
import {
    faBoxArchive,
    faCircleInfo,
    faClone,
    faColumns,
    faEye as farEye,
    faFileUpload,
    faFilter,
    faLockAlt,
    faPenField as farPenField,
    faPenToSquare,
    faPlus,
    faStar as farStar,
    faTimes as farTimes,
    faTrashAlt as farTrashAlt,
    faUserSlash,
    faUsers as farUsers,
    faUsersSlash
} from '@fortawesome/pro-regular-svg-icons'; // far

// import { fab } from '@fortawesome/free-brands-svg-icons';

import ActivitiesTabs from './views/components/widgets/ActivitiesTabs.vue';
import DialogBox from './views/components/layout/DialogBox.vue';
import FusedInputs from './views/components/widgets/FusedInputs.vue';

// library.add(fab)
library.add(
    faArrowRightToArc,
    faArrowTurnDown,
    faArrowTurnUp,
    faArrowUp,
    faAsterisk,
    faBell,
    faBoxArchive,
    faBringForward,
    faBug,
    faBullhorn,
    faCabinetFiling,
    faCactus,
    faCalendarAlt,
    faCalendarDay,
    faCamera,
    faCaretDown,
    faCaretUp,
    faCheck,
    faCheckCircle,
    faChevronDoubleDown,
    faChevronDoubleLeft,
    faChevronDoubleRight,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faCircleDot,
    faCircleInfo,
    faClone,
    faCog,
    faColumns,
    faColumns,
    faEllipsisStrokeVertical,
    faEllipsisVertical,
    fasEmptySet,
    falEmptySet,
    faExclamationCircle,
    faExclamationTriangle,
    faEye,
    faEyeSlash,
    faFileChartColumn,
    faFileChartLine,
    faFileDownload,
    faFileUpload,
    faFilter,
    faGripDots,
    faGripDotsVertical,
    faHome,
    faImage,
    faImagePortrait,
    faInfoCircle,
    faLockAlt,
    faMegaphone,
    faMoon,
    faPaperPlane,
    faPenToSquare,
    faPlus,
    faQuestion,
    faReceipt,
    faSearch,
    faSunBright,
    faTags,
    faTrashCan,
    faTriangle,
    faTruck,
    faUser,
    faUserCircle,
    faUserEdit,
    faUserSlash,
    faUsers,
    faUsersSlash,
    fadCircle,
    fadPenField,
    falTimes,
    farEye,
    farPenField,
    farTimes,
    farTrashAlt,
    farUsers,
    fasCheck,
    fasPenField,
    fasStar,
    farStar,
    fasTimes,
    fasTrashAlt
);

(async () => {
    window.addEventListener('load', () => {
        setTimeout(() => store.commit('App/commitLoading', false), 500);
    });
    try {
        await store.dispatch('Config/retrieveConfig');
        if (store.getters['Auth/isLoggedIn']) {
            await store.dispatch('User/readUserPermissions');
        }
    } catch (error) {
        globalToast(i18n.global.t('messages.loadError'), 'error')
    }
    const app = createApp(App);
    app.config.globalProperties.$validateCapability = validateCapability;
    app
        .use(store)
        .use(router)
        .use(i18n)
        .directive('model', {

        })
        .component('font-awesome-icon', FontAwesomeIcon)
        .component('font-awesome-layers', FontAwesomeLayers)
        .component('font-awesome-layers-text', FontAwesomeLayersText)
        .component('activities-tabs', ActivitiesTabs)
        .component('dialog-box', DialogBox)
        .component('fused-inputs', FusedInputs)
        .mount('#app');
    import('./services/websocket_service');
})();

