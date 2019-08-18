<template lang='pug'>
v-layout#Developer(fill-height column)
    .main-pane
        v-flex.px-4
            v-layout.full-height(column)
                number-input-spinner(:min='0' :max='1000' :step='10' :integerOnly='true' v-model='dataNumber')
                v-btn(@click='generateTestData') {{ dataNumber }}個 ランダムのクエスト履歴生成
                v-btn(@click='deleteCompletedQuests' color='warn') クエスト履歴削除
                v-btn(@click='deleteUserInfo' color='error') ユーザー情報削除
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NumberInputSpinner from 'vue-number-input-spinner';
import HistoryApi from '@/logics/api/HistoryApi';
import UserApi from '@/logics/api/UserApi';

@Component({
    components: {
        NumberInputSpinner,
    },
})
export default class Developer extends Vue {
    protected dataNumber = 100;

    protected async generateTestData() {
        await HistoryApi.generateRandomData(this.dataNumber);
        await this.$vdialog.alert('データを生成しました');
        this.$router.push({ name: 'Home' });

    }
    protected async deleteUserInfo() {
        await UserApi.deleteUser();
        await this.$vdialog.alert('ユーザー情報削除しました！');
        this.$router.push({ name: 'Registration' });

    }
    protected async deleteCompletedQuests() {
        await HistoryApi.deleteHistories();
        await this.$vdialog.alert('クエスト履歴削除しました！');
        this.$router.push({ name: 'Home' });
    }

}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Developer
    .main-pane
        main-pane();
</style>
