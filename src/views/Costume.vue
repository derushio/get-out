<template lang='pug'>
v-layout#Costume(fill-height column)
    .main-pane
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
