import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {title: 'ホーム'},
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/registration',
            name: 'Registration',
            meta: {title: '初期登録'},
            component: () => import('@/views/Registration.vue'),
        },
        {
            path: '/costume',
            name: 'Costume',
            meta: {title: 'コスチューム'},
            component: () => import('@/views/Costume.vue'),
        },
        {
            path: '/quests',
            name: 'Quests',
            meta: {title: 'クエスト'},
            component: () => import('@/views/Quests.vue'),
        },
        {
            path: '/scorehistory',
            name: 'ScoreHistory',
            meta: {title: 'テスト画面'},
            component: () => import('@/components/graph/ScoreHistory.vue'),
        },
    ],
});
