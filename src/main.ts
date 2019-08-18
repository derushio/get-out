import '@/plugins/registerServiceWorker';

import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import UserApi from './logics/api/UserApi';
import { RawLocation } from 'vue-router';

Vue.config.productionTip = false;
const app = new Vue({
    vuetify,
    router,
    store,
    render: (h: any) => h(App),
} as any).$mount('#app');

async function checkUser(r: any) {
    // check user
    if ((await UserApi.getUser()) == null) {
        await app.$vdialog.alert('ユーザーがありません');
        r.push({ name: 'Registration' });
        return;
    }
}

router.beforeEach(async (to, from, next) => {
    if (to.name !== 'Registration') {
        checkUser({ push: next });
    }

    next();
});

checkUser(router);
