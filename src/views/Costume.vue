<template lang='pug'>
v-layout#Costume(fill-height column)
    .main-pane.mt-3.px-3
        .costume(v-if='user')
            h2.mb-3 コスチューム
            h3.mb-3 Lv.{{ getLevelByExp(user.exp) }}
            v-img.mb-3(:aspect-ratio='1/1' :src='avators[getLevelByExp(user.exp)]' contain)

            h3.mb-3 装着
            v-simple-table.costume-items
                tbody
                    tr
                        td サングラス
                        td: v-icon {{ costume.sunglasses? 'mdi-circle-outline': 'mdi-close' }}
                    tr
                        td マスク
                        td: v-icon {{ costume.mask? 'mdi-circle-outline': 'mdi-close' }}
                    tr
                        td イヤホン
                        td: v-icon {{ costume.earphone? 'mdi-circle-outline': 'mdi-close' }}
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import User, { avators, getLevelByExp, getExpPercent, getCostumeByExp } from '@/models/entities/User';
import UserApi from '@/logics/api/UserApi';
import Costume from '@/models/entities/Costume';

@Component
export default class CostumeVue extends Vue {
    protected avators = avators;
    protected user = null as User | null;
    protected costume = null as Costume | null;

    protected getLevelByExp = getLevelByExp;
    protected getExpPercent = getExpPercent;

    protected async mounted() {
        this.user = await UserApi.getUser();
        if (!this.user) {
            return;
        }

        this.costume = getCostumeByExp(this.user.exp);
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Costume
    .main-pane
        main-pane(600px);
</style>
