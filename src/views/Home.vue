<template lang='pug'>
v-layout#Home(fill-height column)
    .main-pane
        v-layout.full-height(column)
            v-flex.red(xs7)
                //- アバター ＋ レベル情報
            v-flex(xs5)
                v-tabs(v-model='tab' background-color='primary' dark grow centered)
                    v-tabs-slider
                    v-tab スコア
                    v-tab クエスト履歴

                v-tabs-items.full-height(v-model='tab' fluid)
                    v-tab-item.full-height
                        p hoge
                    v-tab-item.full-height
                        p fuga

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Home extends Vue {
    protected tab = 0;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    // scroll-view: true;
    static-view: true;

#Home
    .main-pane
        main-pane();
</style>
