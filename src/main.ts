import '@/plugins/registerServiceWorker';

import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import UserApi from './logics/api/UserApi';

Vue.config.productionTip = false;
new Vue({
    vuetify,
    router,
    store,
    render: (h: any) => h(App),
} as any).$mount('#app');

async function checkUser() {
    if ((await UserApi.getUser()) == null) {
        router.push({ name: 'Registration' });
    }
}
checkUser();
