<template lang='pug'>
v-layout#Registration(fill-height column)
        .main-pane
                    v-card.mb-12(color='grey lighten-1', height='1000px', max-width="500px" class="mx-auto")
                        h2 あなたがなりたいのはどっちですか？
                        v-btn(color='dark' justify-center) かつての自分
                        v-btn(color='dark' justify-center) 新しい自分



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
