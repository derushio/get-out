<template lang='pug'>
// ref: https://github.com/bootsoon/ng-circle-progress/blob/master/src/circle-progress.component.ts
.score-meter
    svg(xmlns='http://www.w3.org/2000/svg', v-if='svg', :viewbox='svg.viewBox', preserveaspectratio='xMidYMid meet', :height='svg.height', :width='svg.width', (click)='emitClickEvent($event)', :class='options.class')
    defs
        lineargradient(v-if='options.outerStrokeGradient', :id='svg.outerLinearGradient.id')
        stop(offset='5%', :stop-color='svg.outerLinearGradient.colorStop1', stop-opacity='1')
        stop(offset='95%', :stop-color='svg.outerLinearGradient.colorStop2', stop-opacity='1')
        radialgradient(v-if='options.backgroundGradient', :id='svg.radialGradient.id')
        stop(offset='5%', :stop-color='svg.radialGradient.colorStop1', stop-opacity='1')
        stop(offset='95%', :stop-color='svg.radialGradient.colorStop2', stop-opacity='1')
    ng-container(v-if='options.showBackground')
        circle(v-if='!options.backgroundGradient', :cx='svg.backgroundCircle.cx', :cy='svg.backgroundCircle.cy', :r='svg.backgroundCircle.r', :fill='svg.backgroundCircle.fill', [attr.fill-opacity]='svg.backgroundCircle.fillOpacity', :stroke='svg.backgroundCircle.stroke', :stroke-width='svg.backgroundCircle.strokeWidth')
        circle(v-if='options.backgroundGradient', :cx='svg.backgroundCircle.cx', :cy='svg.backgroundCircle.cy', :r='svg.backgroundCircle.r', attr.fill='url(#{{svg.radialGradient.id}})', [attr.fill-opacity]='svg.backgroundCircle.fillOpacity', :stroke='svg.backgroundCircle.stroke', :stroke-width='svg.backgroundCircle.strokeWidth')
    circle(v-if='options.showInnerStroke', :cx='svg.circle.cx', :cy='svg.circle.cy', :r='svg.circle.r', :fill='svg.circle.fill', :stroke='svg.circle.stroke', :stroke-width='svg.circle.strokeWidth')
    ng-container(v-if='+options.percent!==0 || options.showZeroOuterStroke')
        path(v-if='!options.outerStrokeGradient', :d='svg.path.d', :stroke='svg.path.stroke', :stroke-width='svg.path.strokeWidth', [attr.stroke-linecap]='svg.path.strokeLinecap', :fill='svg.path.fill')
        path(v-if='options.outerStrokeGradient', :d='svg.path.d', :stroke='svg.outerLinearGradient.id', :stroke-width='svg.path.strokeWidth', [attr.stroke-linecap]='svg.path.strokeLinecap', :fill='svg.path.fill')
    text(v-if='!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)', alignment-baseline='baseline', :x='svg.circle.cx', :y='svg.circle.cy', [attr.text-anchor]='svg.title.textAnchor')
        ng-container(v-if='options.showTitle')
        tspan(v-if='let tspan of svg.title.tspans', :x='svg.title.x', :y='svg.title.y', :dy='tspan.dy', :font-size='svg.title.fontSize', :font-weight='svg.title.fontWeight', :fill='svg.title.color') {{tspan.span}}
        tspan(v-if='options.showUnits', :font-size='svg.units.fontSize', :font-weight='svg.units.fontWeight', :fill='svg.units.color') {{svg.units.text}}
        ng-container(v-if='options.showSubtitle')
        tspan(v-if='let tspan of svg.subtitle.tspans', :x='svg.subtitle.x', :y='svg.subtitle.y', :dy='tspan.dy', :font-size='svg.subtitle.fontSize', :font-weight='svg.subtitle.fontWeight', :fill='svg.subtitle.color') {{tspan.span}}
    image(v-if='options.showImage', preserveaspectratio='none', :height='svg.image.height', :width='svg.image.width', [attr.xlink:href]='svg.image.src', :x='svg.image.x', :y='svg.image.y')
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ScoreMater extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.todays-score {}
</style>
