<template lang='pug'>
// ref: https://codepen.io/egorava/pen/wGmmJW
.score-meter
    .canvas-wrap
        canvas#canvas(:width='width' :height='height' ref='canvas')
        span#procent {{Math.floor(procentage)}}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ScoreMater extends Vue {
    @Prop({ default: () => 80 })
    public radius!: number;

    protected Math = Math;
    protected procentage:number = 0;
    protected mounted() {
        const can = this.$refs.canvas as HTMLCanvasElement;
        const spanProcent = this.$refs.percent;
        const c = can.getContext('2d');
        let canvasX = this.radius*5,
            canvasY = this.radius*5,
            posX = canvasX / 2,
            posY = canvasY / 2,
            fps = 1000 / 200,
            procent = 0,
            oneProcent = 360 / 100,
            result = oneProcent * 64;
        
        c!.lineCap = 'round';
        let deegres = 0;
        const acrInterval = setInterval(() => {
            deegres += 1;
            c!.clearRect( 0, 0, can.width, can.height );
            procent = deegres / oneProcent;

            this.procentage = procent;

            c!.beginPath();
            c!.arc(posX, posY, this.radius, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
            c!.strokeStyle = '#b1b1b1';
            c!.lineWidth = 10;
            c!.stroke();

            c!.beginPath();
            c!.strokeStyle = '#3949AB';
            c!.lineWidth = 10;
            c!.arc( posX, posY, this.radius, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
            c!.stroke();
            if( deegres >= result ) clearInterval(acrInterval);
        }, fps);
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.todays-score {}

:root {
  background: #fff;
}

span#procent {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 3em;
  transform: translate(-50%, -50%);
  color: #3949AB;
}

span#procent::after {
  content: '%';
}

.canvas-wrap {
  position: relative;
}
</style>
