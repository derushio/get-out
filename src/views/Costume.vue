<template lang='pug'>
v-layout#Costume(fill-height column)
    .main-pane.mt-3.px-3
        h2.mb-3 コスチューム
        v-img.mb-3.red(:aspect-ratio='1/1')

        h3.mb-3 装着
        v-simple-table.costume-items
            tbody
                tr
                    td サングラス
                    td: v-icon mdi-circle-outline
                tr
                    td マスク
                    td: v-icon mdi-close
                tr
                    td イヤホン
                    td: v-icon mdi-circle-outline
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Costume extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Costume
    .main-pane
        main-pane();
</style>
