import '@/plugins/registerServiceWorker';

import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import UserApi from './logics/api/UserApi';

Vue.config.productionTip = false;
const app = new Vue({
    vuetify,
    router,
    store,
    render: (h: any) => h(App),
} as any).$mount('#app');

router.beforeEach(async (to, from, next) => {
    if (to.name !== 'Registration') {
        // check user
        if ((await UserApi.getUser()) == null) {
            await app.$vdialog.alert('ユーザーがありません');
            next({ name: 'Registration' });
            return;
        }
    }

    next();
});
