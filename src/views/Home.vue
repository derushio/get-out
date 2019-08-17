<template lang='pug'>
v-layout#Home(fill-height column v-resize='resized')
    .main-pane
        v-layout.full-height(column)
            v-flex(xs6)
                //- アバター ＋ レベル情報
                score-meter(radius='180' percent='82')
            v-flex.fruid(xs1)
                h1.text-center Lv.25
            v-responsive(:height='300')
                v-tabs(v-model='tab' background-color='primary' dark grow centered show-arrows)
                    v-tabs-slider
                    v-tab スコア
                    v-tab クエスト履歴
                v-tabs-items(v-model='tab')
                    v-tab-item.full-height
                        score-history(ref='scoreHistory' :height='300 - 48')
                    v-tab-item.full-height

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ScoreHistory from '@/components/graph/ScoreHistory.vue';
import { aswait } from 'instant-vuetify-overlays/src/utils/AsyncTimeout';
import ScoreMeter from '@/components/graph/ScoreMeter.vue';

@Component({
    components: {
        ScoreHistory,
        ScoreMeter,
    },
})
export default class Home extends Vue {
    protected tab = 0;

    protected resized() {
        const scoreHistory = this.$refs.scoreHistory as Vue | undefined;
        if (!scoreHistory) {
            return;
        }

        scoreHistory.$emit('renderChart');
    }
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
