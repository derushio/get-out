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

    protected Math = Math;
    protected procentage: number = 0;
    protected mounted() {
        const can = this.$refs.canvas as HTMLCanvasElement;
        const spanProcent = this.$refs.percent;
        const c = can.getContext('2d');
        const canvasX = can.width;
        const canvasY = can.height;
        const posX = canvasX / 2;
        const posY = canvasY / 2;
        const fps = 1000 / 200;
        const oneProcent = 360 / 100;
        const result = oneProcent * 64;
        let procent = 0;
        c!.lineCap = 'round';
        let deegres = 0;
        const acrInterval = setInterval(() => {
            deegres += 1;
            c!.clearRect( 0, 0, can.width, can.height );
            procent = deegres / oneProcent;

            c!.beginPath();
            c!.strokeStyle = '#FFCDD2';
            c!.arc( posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres) );
            c!.stroke();

            this.procentage = procent;

            c!.beginPath();
            c!.arc(posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360) );
            c!.strokeStyle = '#b1b1b1';
            c!.lineWidth = 10;
            c!.stroke();

            c!.beginPath();
            c!.strokeStyle = '#3949AB';
            c!.lineWidth = 10;
            c!.arc( posX, posY, this.radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres) );
            c!.stroke();
            if ( deegres >= result ) {
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

span#procent {
  display: block;
  position: relative;
  
  font-size: 3em;
  transform: translate(-50%, -50%);
  color: #3949AB;
}

span#procent::after {
  content: '%';
}

.canvas-wrap {
  display: block;
  position: relative;
}
</style>
