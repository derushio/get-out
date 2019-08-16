<template lang='pug'>
v-layout#Registration(fill-height column)
    .main-pane
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Registration extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Registration
    .main-pane
        main-pane();
</style>
