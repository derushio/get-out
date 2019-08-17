<template lang='pug'>
v-layout#Registration(fill-height column)
    .main-pane
        v-stepper.full-height(v-model='step')
            v-stepper-header
                v-stepper-step(:step='1')
                v-divider
                v-stepper-step(:step='2')
                v-divider
                v-stepper-step(:step='3')
                v-divider
                v-stepper-step(:step='4')
                v-divider
                v-stepper-step(:step='5')
                v-divider
                v-stepper-step(:step='6')

            v-stepper-items.full-height
                v-stepper-content.full-height(:step='1')
                    p こんにちわ、新しい自分を見つけるお手伝いをさせていただきます
                    p まずは...
                    h3.mb-3 あなたについて教えてください
                    v-form
                        v-row
                            v-col(cols='12' md='4')
                                v-text-field(v-model='name' label='氏名' required='')
                            v-col(cols='12' md='4')
                                v-text-field(v-model='gender' label='性別' required='')
                            v-col(cols='12' md='4')
                                v-text-field(v-model='age' label='年齢' required='')
                    v-row(justify='end')
                        v-btn(color='primary' @click='step++') 進む

                v-stepper-content.full-height(:step='2')
                    h3.mb-3 あなたは他の人に目を合わせるのが苦手ですか？
                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='step++') いいえ
                        v-btn(color='primary' @click='initialLevel = 1; step=5') はい

                v-stepper-content.full-height(:step='3')
                    h3.mb-3 あなたは他の人に顔を見せるのが苦手ですか？
                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='step++') いいえ
                        v-btn(color='primary' @click='initialLevel = 2; step = 5') はい
                v-stepper-content.full-height(:step='4')
                    h3.mb-3 あなたは他人に話しかけられるのが苦手ですか？
                    v-row
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-btn(color='warning' @click='initialLevel = 4; step++') いいえ
                        v-btn(color='primary' @click='initialLevel = 3; step = 5') はい

                v-stepper-content.full-height(:step='5')
                    h3.mb-3 目標期間をお選びください
                    v-row(align="center")
                        v-btn(color='error' @click='step--') 戻る
                        v-spacer
                        v-select(:items='items' v-model='time_range')
                        v-spacer
                        v-btn(color='primary' @click='step++') 進む


                v-stepper-content.full-height(:step='6')
                    h3.mb-3 お疲れ様です！
                    p 新しいあなたに変身して外を出歩いて見ましょう！
                    v-row
                        v-btn(text large color='light' @click='step=1') やり直す！
                        v-spacer
                        v-btn(text large color='warning' @click='createUser') 変身！

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import getCostumeByExp, { getLevelByExp } from '@/models/entities/User';
import User from '@/models/entities/User';
import UserApi from '../logics/api/UserApi copy';

@Component
export default class Registration extends Vue {
    protected step = 1;
    protected items = [
            '一週間',
            '一ヶ月',
            '三ヶ月',
            '半年',
            '一年',
    ];

    protected initialLevel = 1;
    protected name = '';
    protected gender = '';
    protected age = '';
    protected time_range = '';

    protected async createUser() {
        await this.$vprogress.circularLoading(async () => {
            const user = {
                name: this.name,
                gender: this.gender,
                age: this.age,
                time_range: this.time_range,
                exp: (this.initialLevel-1) * 1000,
            } as User;

            console.log(getLevelByExp(user.exp));

            await UserApi.putUser(user);

            this.$router.push({ name: 'Home' });
        });
    }
}

</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Registration
    .main-pane
        main-pane(600px);
    .v-stepper__wrapper
        height: 100%;
</style>
