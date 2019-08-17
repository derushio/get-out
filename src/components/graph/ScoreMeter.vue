<template lang='pug'>
// ref: https://codepen.io/egorava/pen/wGmmJW
div
    canvas#canvas(:width='radius*2.2' :height='radius*2.2' ref='canvas')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { aswait } from 'instant-vuetify-overlays/src/utils/AsyncTimeout';

@Component
export default class ScoreMater extends Vue {
    @Prop({ default: () => 0 })
    public percent!: number;

    public radius = 0;
    protected size = { width: 0, height: 0 };
    protected Math = Math;
    protected percentage: number = 0;

    protected async mounted() {
        await aswait(100);
        this.size.width = this.$el.clientWidth;
        this.size.height = this.$el.clientHeight;

        this.draw();
    }

    protected draw() {
        const can = this.$refs.canvas as HTMLCanvasElement;
        const c = can.getContext('2d');
        const canvasX = can.width;
        const canvasY = can.height;
        const posX = canvasX / 2;
        const posY = canvasY / 2;
        const fps = 1000 / 200;
        const onepercentage = 360 / 100;
        const result = onepercentage * this.percent;
        let percentage = 0;
        c!.lineCap = 'round';
        let degrees = 0;
        const acrInterval = setInterval(() => {
            degrees += 1;
            c!.clearRect( 0, 0, can.width, can.height );
            percentage = degrees / onepercentage;

            c!.beginPath();
            c!.strokeStyle = '#FFCDD2';
            c!.arc( posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees) );
            c!.stroke();

            this.percentage = percentage;

            c!.beginPath();
            c!.arc(posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360) );
            c!.strokeStyle = '#b1b1b1';
            c!.lineWidth = 10;
            c!.stroke();

            c!.beginPath();
            c!.strokeStyle = '#3949AB';
            c!.lineWidth = 10;
            c!.arc( posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees) );
            c!.stroke();
            if ( degrees >= result ) {
                clearInterval(acrInterval);
            }
        }, fps);
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

:root {
    background: #fff;
}

canvas {
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
}

span#percenta {
    display: block;
    position: relative;

    font-size: 3em;
    transform: translate(-50%, -50%);
    color: #3949AB;
}

span#percenta::after {
    content: '%';
}

.canvas-wrap {
    display: block;
    position: relative;
}
</style>
