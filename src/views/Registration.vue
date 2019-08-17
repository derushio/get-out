<template lang='pug'>
v-layout#Registration(fill-height column)
    .main-pane
        v-stepper.full-height(v-model='step')
            v-stepper-header
                v-stepper-step(:step='1' complete)
                v-divider
                v-stepper-step(:step='2' complete)
                v-divider
                v-stepper-step(:step='3' complete)
                v-divider
                v-stepper-step(:step='4' complete)
                v-divider
                v-stepper-step(:step='5' complete)

            v-stepper-items.full-height
                v-stepper-content.full-height(:step='1')
                    h3.mb-3 あなたの情報を教えてください
                    v-layout.full-height(column)
                        v-form
                            v-row
                                v-col(cols='12' md='4')
                                    v-text-field(label='氏名' required='')
                                v-col(cols='12' md='4')
                                    v-text-field(label='性別' required='')
                                v-col(cols='12' md='4')
                                    v-text-field(label='年齢' required='')
                        v-spacer

                        v-row(justify='end')
                            v-btn(color='primary' @click='step++') 進む
                    
                v-stepper-content.full-height(:step='2')
                    h3.mb-3 あなたは他の人に目を合わせるのが苦手ですか？
                    v-spacer

                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='step++') いいえ
                        v-btn(color='primary' @click='step++') はい

                v-stepper-content.full-height(:step='3')
                    h3.mb-3 あなたは他の人に顔を見せるのが苦手ですか？
                    v-spacer

                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='step++') いいえ
                        v-btn(color='primary' @click='step++') はい
                    
                v-stepper-content.full-height(:step='4')
                    h3.mb-3 あなたは他人に話しかけられるのが苦手ですか？
                    v-spacer

                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='step++') いいえ     
                        v-btn(color='primary' @click='step++') はい   
                
                v-stepper-content.full-height(:step='5')
                    h3.mb-3 お疲れ様です！
                    v-spacer

                    v-row
                        v-spacer
                        v-btn(text large color='primary' @click='') クエストに進む
                        v-btn(text large color='warning' @click='') メニューに戻る
                    
                          
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Registration extends Vue {
    protected step = 1;
}

</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Registration
    .main-pane
        main-pane();

    .v-stepper__wrapper
        height: 100%;
</style>
