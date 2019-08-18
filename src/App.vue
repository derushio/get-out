<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
        v-list-item
            v-list-item-content
                v-list-item-title.title GET OUT
        v-divider

        v-list(dense nav)
            v-list-item(:to='{ name: "Home" }' exact)
                v-list-item-content: v-list-item-title ホーム
            v-list-item(:to='{ name: "Costume" }' exact)
                v-list-item-content: v-list-item-title コスチューム
            v-list-item(:to='{ name: "Quests" }' exact)
                v-list-item-content: v-list-item-title クエストリスト
            v-list-item(:to='{ name: "Developer" }' exact)
                v-list-item-content: v-list-item-title 開発者ページ

    v-app-bar(app color='primary' dark height='54px')
        v-app-bar-nav-icon.nav-icon(@click.stop='drawer = !drawer')
        v-toolbar-title {{ appName }}
        v-spacer

        v-menu.hidden-xs-only
            //- メニュー

    v-content#content
        router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public appName = process.env.APP_NAME;
    protected drawer = false;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    background-color: transparent;

    .nav-icon:before
        opacity: 0;
</style>
