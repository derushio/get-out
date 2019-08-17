<template lang='pug'>
// ref: https://codepen.io/egorava/pen/wGmmJW
canvas#canvas(:width='radius*2.2' :height='radius*2.2' ref='canvas')
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ScoreMater extends Vue {
    @Prop({ default: () => 200 })
    public radius!: number;

    @Prop({ default: () => 72 })
    public percent!: number;

    protected Math = Math;
    protected percentage: number = 0;
    protected mounted() {
        const can = this.$refs.canvas as HTMLCanvasElement;
        const spanpercentage = this.$refs.percent;
        const c = can.getContext('2d');
        const canvasX = can.width;
        const canvasY = can.height;
        const posX = canvasX / 2;
        const posY = canvasY / 2;
        const fps = 1000 / 200;
        const onepercentage = 360 / 100;
        const result = onepercentage * this.percent;
        console.log(this.percent);
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
