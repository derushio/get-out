import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/registration',
            name: 'Registration',
            component: () => import('@/views/Registration.vue'),
        },
        {
            path: '/costume',
            name: 'Costume',
            component: () => import('@/views/Costume.vue'),
        },
        {
            path: '/quests',
            name: 'Quests',
            component: () => import('@/views/Quests.vue'),
        },
    ],
});
