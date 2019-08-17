<template lang='pug'>
v-layout#Quests(fill-height column)
    .main-pane
        h2.mb-3 クエストリスト
        v-flex(xs12)
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

@Component
export default class Quests extends Vue {
    protected dialog: boolean = false;
    protected quests = [
        // tslint:disable-next-line max-line-length
        {title: 'コンビニに行こう', level: 1, src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', exp: 100},
        // tslint:disable-next-line max-line-length
        {title: 'イヤホンを外してコンビニに行こう', level: 2, src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', exp: 1000},
        // tslint:disable-next-line max-line-length
        {title: 'マスクを外してコンビニに行こう', level: 3, src: 'https://images.unsplash.com/photo-1564933031273-7ed87369d6f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', exp: 2000},
        // tslint:disable-next-line max-line-length
        {title: 'サングラスを外してコンビニに行こう', level: 3, src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', exp: 4000},
    ];

    protected async openClearDialog(i: number) {
        const quest = this.quests[i];
        await this.$vdialog.alert({ title: 'Result', message: `EXP GET!!<br />${quest.exp}` });
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
</style>
