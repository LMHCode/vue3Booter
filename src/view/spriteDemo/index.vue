<script setup lang="ts">
import * as spritejs from 'spritejs'
import { onMounted, ref } from 'vue'

const { Scene, Sprite } = spritejs

const contanierRef = ref()
const compressDuration = ref(0) // 毫秒
const timer = ref()

onMounted(() => {
  const container = contanierRef.value
  const scene = new Scene({ container, width: 360, height: 800, mode: 'stickyTop' })
  const layer = scene.layer()
  const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png')

  robot.attr({
    anchor: [0, 0], // 锚点，你可以理解为css3中的transform-origin
    pos: [0, 0], // 位置，最大为 750 * 1008 也就是场景的大小
    size: [36, 50], // 大小，默认为图片的宽高
    scale: [0.9, 0.9] // 缩放，默认 1 1
  })

  robot.animate([{ pos: [0, 900] }, { pos: [0, 300] }, { pos: [2700, 300] }, { pos: [2700, 0] }], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate'
  })

  layer.append(robot)
  robot.addEventListener('touchstart', evt => {
    compressDuration.value = 0
    console.log('xxxxx---start', evt)
    timer.value = setInterval(() => {
      compressDuration.value += 100
    }, 100)
  })
  robot.addEventListener('touchend', evt => {
    console.log('xxxxxx---end', evt)
    clearInterval(timer.value)
    timer.value = null
  })
})
</script>

<template>
  <div>{{ compressDuration }}</div>
  <div id="stage" ref="contanierRef"></div>
</template>

<style scoped>
#stage {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
