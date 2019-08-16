<template lang='pug'>
v-layout#Quests(fill-height column)
    .main-pane
        h2.mb-3 クエストリスト
        v-flex(xs12)
            v-card.elavation-20.mb-2.relative(v-for="quest in quests" raised)
                v-img(:src='quest.src' height='150px')
                    span(style="background-color:#FFCACA;") Level.{{quest.level}}
                    // TODO: レベルによって色変える
                    v-card-title.white--text(class="align-end fill-height")
                        .questTitle(v-for="char in 11" :key="char")
                            span {{quest.title[char-1]}}
                        .limit(v-if="quest.title.length>11")
                            span ...
                v-layout(justify-center)
                    v-btn(outlined large) Go
                    v-btn(text large) Skip
                    // TODO: ボタン実装

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Quests extends Vue {
    protected quests = [{title: 'サングラスでコンビニに行こう', level: 1, src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
    {title: '裸でコンビニに行こう', level: 2, src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'},
    {title: '水着でコンビニに行こう', level: 3, src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'}];
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
</style>
