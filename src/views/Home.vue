<template lang='pug'>
v-layout#Home(fill-height column v-resize='redraw')
    .main-pane
        v-layout.full-height(column)
            v-flex.xs-10
                //- アバター ＋ レベル情報
                v-layout.full-height(column)
                    v-flex: score-meter(radius='90' percent='82')
                    v-btn(@click='generateAndViewTestData()') ランダムデータ生成
                    h2.text-center Lv.25

            .score
                v-tabs(v-model='tab' background-color='primary' dark grow centered show-arrows)
                    v-tabs-slider
                    v-tab スコア
                    v-tab クエスト履歴
                v-tabs-items(v-model='tab')
                    v-tab-item.full-height
                        score-history(ref='scoreHistory' :height='300 - 48' :scoreArray='scores')
                    v-tab-item.full-height
                        v-card(v-for='quest, i in history' :key='i')
                            v-card-text {{ quest.title }}

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ScoreHistory from '@/components/graph/ScoreHistory.vue';
import { aswait } from 'instant-vuetify-overlays/src/utils/AsyncTimeout';
import ScoreMeter from '@/components/graph/ScoreMeter.vue';
import HistoryApi from '@/logics/api/HistoryApi';
import Quest from '@/models/entities/Quest';

@Component({
    components: {
        ScoreHistory,
        ScoreMeter,
    },
})
export default class Home extends Vue {
    protected tab = 0;
    protected scores = [0, 0, 0, 0, 0, 0, 0];
    protected history = [] as Quest[];

    protected redraw() {
        const scoreHistory = this.$refs.scoreHistory as Vue | undefined;
        if (!scoreHistory) {
            return;
        }

        scoreHistory.$emit('renderChart');
    }

    protected async generateAndViewTestData() {
        HistoryApi.generateRandomData(100);
        this.scores = await HistoryApi.statisticsWeeklyScore();
        this.history = await HistoryApi.getHistory();
        this.redraw();
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    //static-view: true;

#Home
    .main-pane
        main-pane();

        .score
            height: 300px; min-height: 300px; max-height: 300px;
</style>
