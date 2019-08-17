<template lang='pug'>
v-layout#Quests(fill-height column)
    .main-pane
        h2.mb-3 クエストリスト
        v-flex(v-if='isCompleted')
            v-row(align='center' justify='center')
                v-img(src='https://4.bp.blogspot.com/-x566IiNCuRo/WFo_JyhLT1I/AAAAAAABAkE/qd8FsA2e2gIQYk8I2T1Uj-wyrT0xYlcJACLcB/s800/message_syuryou_omedetou.png'
                    aspect-ratio='1'
                    class='lighten-2'
                    max-width='500'
                    max-height='300')
        v-flex(xs12 v-else)
            transition-group(name ='activeTransition')
                v-card.elavation-20.mb-3.px-3.py-1(v-for='quest, i in quests' :key='i' raised)
                    v-card-title.white--text.relative.pa-0(class='align-end fill-height')
                        v-responsive(:aspect-ratio='4/2')
                            v-img.absolute.quest-img(:src='quest.src' :aspect-ratio='4/2' @click='openDetailDialog(i)')
                            .relative()
                                span(v-for='char in 11' :key='char') {{ quest.title[char-1] }}
                                span(v-if='quest.title.length>11') ...
                    v-card-text
                        v-btn(@click='openDetailDialog(i)') DETAIL
                        v-btn(@click='openClearDialog(i)') CLEAR
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Quest from '@/models/entities/Quest';
import QuestApi from '@/logics/api/QuestApi';
import UserApi from '@/logics/api/UserApi';
import User from '@/models/entities/User';
import { getLevelByExp } from '@/models/entities/User';

@Component
export default class Quests extends Vue {
    protected dialog: boolean = false;
    protected quests =  [] as Quest[];
    protected isCompleted = false;

    protected async updateQuest() {
        const user = await UserApi.getUser(0); // 0でいいのかな？
        if(!user) {
            throw new Error('No User Found');
        }
        const userExp = user.exp;
        this.quests = await QuestApi.getAvailableQuestsByLevel(getLevelByExp(userExp));
        if (this.quests.length === 0) {
            this.isCompleted = true;
        }
    }
    

    protected async mounted() {
        this.updateQuest();
    }

    protected async openClearDialog(i: number) {
        const quest = this.quests[i];
        await this.$vdialog.alert({ title: 'Result', message: `EXP GET!!<br />${quest.exp}` });
        await QuestApi.transferQuestsToHistory(quest.id);
        this.updateQuest();
    }
    protected async openDetailDialog(i: number) {
        const quest = this.quests[i];
        await this.$vdialog.alert({ title: `${quest.title}`, message: `所得できる経験値: ${quest.exp}`});
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Quests
    .main-pane
        main-pane();

        .quest-img
            width: 100%; height: 100%;
            top: 0; left: 0;
            border-radius 15px
        .elavation-20
            margin 0 3%
            border-radius 15px
        .relative
            font-weight bold
        .activeTransition-enter-active, .activeTransition-leave-active
            transition opacity .5s
        .activeTransition-enter, .activeTransition-leave-to
            opacity 0
</style>
