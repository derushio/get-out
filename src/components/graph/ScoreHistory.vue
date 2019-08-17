<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs';

@Component({
    extends: Bar,
})
export default class ScoreHistory extends Vue {
    @Prop({ default: () => '直近7日間の獲得スコア' })
    public title?: string;

    @Prop({ default: () => ['日', '月', '火', '水', '木', '金', '土', '日'] })
    public label?: string[];

    @Prop({ default: () => [100, 90, 60, 70, 50, 30, 40] })
    public scoreArray?: number[];

    protected hisOption = {
        title: {
            display: true,
            text: this.title,
        },
        legend: {
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    protected mounted() {
        // ref: https://minmin-21.hatenablog.com/entry/2019/05/03/113903
        this.$on('renderChart', () => {
            const hisData = {
                labels: this.label,
                datasets: [{
                    label: 'score',
                    borderColor: '#0000ff',
                    data: this.scoreArray,
                    fill: false,
                }],
            };
            (this as any).renderChart(hisData, this.hisOption);
        });
        this.$emit('renderChart');
    }

}
</script>
