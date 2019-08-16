<template lang='pug'>
v-layout#Home(fill-height column)
    .main-pane
        v-layout.full-height(column)
            v-flex.red(xs7)
                //- アバター ＋ レベル情報
            v-flex.blue(xs5)
                //- 情報グラフ
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Home extends Vue {}
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
