<template lang='pug'>
v-layout#Home(fill-height column v-resize='redraw')
    .main-pane
        v-layout.full-height(v-if='user' column)
            v-flex.xs-10
                //- アバター ＋ レベル情報
                v-layout.full-height(column)
                    h2.text-center {{ user.name }}
                    v-flex.relative
                        score-meter.full-height(:percent='getExpPercent(user.exp)')
                        v-img.absolute.avator(:src='avators[getLevelByExp(user.exp)]' contain)
                    h3.text-center Lv.{{getLevelByExp(user.exp)}} - 次のLvまで:{{getNextExp(user.exp)}}

            .score
                v-tabs(v-model='tab' @change='setTimeout(redraw, 100)' background-color='primary' dark grow centered show-arrows)
                    v-tabs-slider
                    v-tab スコア
                    v-tab クエスト履歴
                v-tabs-items(v-model='tab' @change='setTimeout(redraw, 100)')
                    v-tab-item.full-height
                        score-history(ref='scoreHistory' :height='300 - 48' :scoreArray='scores')
                    v-tab-item.full-height.quest-history
                        v-card.history-item.my-3(v-for='quest, i in history' :key='i')
                            v-card-text
                                v-row.px-4(justify='start' align='center')
                                    span.d-block.title.mr-4
                                        span {{ quest.exp }}
                                        span.exp exp
                                    v-divider.mr-4(vertical)
                                    .right
                                        span.d-block {{ quest.title }}
                                        span.d-block {{ moment(quest.clearTime).format('YYYY/MM/DD') }}

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ScoreHistory from '@/components/graph/ScoreHistory.vue';
import { aswait } from 'instant-vuetify-overlays/src/utils/AsyncTimeout';
import ScoreMeter from '@/components/graph/ScoreMeter.vue';
import HistoryApi from '@/logics/api/HistoryApi';
import Quest from '@/models/entities/Quest';
import moment from 'moment';
import User, { avators, getLevelByExp, getExpPercent, getNextExp } from '@/models/entities/User';
import UserApi from '@/logics/api/UserApi';

@Component({
    components: {
        ScoreHistory,
        ScoreMeter,
    },
    beforeRouteEnter: (to, from, next) => {
        next((vm) => {
            (vm as any).redraw();
        });
    },
})
export default class Home extends Vue {
    protected moment = moment;

    protected tab = 0;
    protected scores = [0, 0, 0, 0, 0, 0, 0];
    protected history = [] as Quest[];
    protected avators = avators;
    protected user = null as null | User;
    protected getLevelByExp = getLevelByExp;
    protected getNextExp = getNextExp;
    protected getExpPercent = getExpPercent;
    protected label = [] as string[];

    protected setTimeout = (a: () => any, b: number) => setTimeout(a, b);

    protected async mounted() {
        this.user = await UserApi.getUser();
        this.scores = await HistoryApi.statisticsWeeklyScore();
        this.label = await HistoryApi.statisticsWeeklyLavel();
        this.history = await HistoryApi.getHistory();
        this.redraw();
    }

    protected async redraw() {
        const scoreHistory = this.$refs.scoreHistory as Vue | undefined;
        if (!scoreHistory) {
            return;
        }
        this.scores = await HistoryApi.statisticsWeeklyScore();
        this.history = await HistoryApi.getHistory();
        scoreHistory.$emit('renderChart');
    }

    protected async generateAndViewTestData() {
        HistoryApi.generateRandomData(100);
        this.redraw();
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Home
    .main-pane
        main-pane(600px);

        .avator
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            height: 80%;

        .score
            height: 300px; min-height: 300px; max-height: 300px;

        .v-tabs-items
            overflow: auto;
            height: calc(300px - 48px);

            .history-item
                max-width: 400px;
                margin-left: auto; margin-right: auto;

                .exp
                    margin-left: 0.15em;
                    font-size: 0.3em;
</style>
