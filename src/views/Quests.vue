<template lang='pug'>
v-layout#Quests(fill-height column)
    .main-pane
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Quests extends Vue {}
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
