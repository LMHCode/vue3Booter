<script setup lang="ts">
import * as spritejs from 'spritejs'
import { onMounted, ref } from 'vue'

const { Scene, Sprite } = spritejs

const contanierRef = ref()

interface Ani {
  x: number
  y: number
  rotate: number
  [keyName: string]: any
}

interface TransitionConfig {
  duration: number
  fill: string
  easing?: string
  [keyName: string]: any
}

interface AnimateBehaviorItem {
  ani: Ani
  transitionConfig: TransitionConfig
  [keyName: string]: any
}

const animateBehavior: AnimateBehaviorItem[] = [
  {
    ani: { x: 162, y: 400, scale: [1, 1], rotate: 360 * 5 },
    transitionConfig: {
      duration: 1000,
      fill: 'both',
      easing: 'ease-out'
    }
  },
  {
    ani: { x: 18, y: 50, scale: [0.7, 0.7], rotate: 360 * 3 },
    transitionConfig: {
      duration: 1000,
      fill: 'both'
    }
  },
  {
    ani: { x: 50, y: 25, scale: [0.7, 0.7], rotate: 360 * 2 },
    transitionConfig: {
      duration: 1000,
      fill: 'both'
    }
  },
  {
    ani: { x: 60, y: 45, scale: [0.7, 0.7], rotate: 360 * 1 },
    transitionConfig: {
      duration: 1000,
      fill: 'both'
    }
  }
]

let robot // 足球实例
let inFootballPrograss = ref(false)

onMounted(async () => {
  const container = contanierRef.value
  const scene = new Scene({ container, width: 360, height: 800, mode: 'stickyTop' })
  /**
   * 图片预加载
   */
  await scene.preload({ id: 'football', src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png' })
  const layer = scene.layer()
  robot = new Sprite('football')
  resetPos()
  layer.append(robot)
  robot.addEventListener('click', () => {
    console.log('xxxxx---start')
    if (inFootballPrograss.value) {
      return
    }
    inFootballPrograss.value = true
    shoot()
  })
})

/**
 * 重置球初始位置
 */
const resetPos = () => {
  robot.attr({
    anchor: [0.5, 0.5], // 锚点，你可以理解为css3中的transform-origin
    pos: [180, 500], // 位置，最大为 360 * 800 也就是场景的大小
    size: [36, 50], // 大小，默认为图片的宽高
    scale: [1, 1] // 缩放，默认 1 1
    // opacity: 0
  })
}

/**
 * 踢球
 */
const shoot = async () => {
  for (let index = 0; index < animateBehavior.length; index++) {
    if (index === 0) {
      robot.animate([animateBehavior[index].ani], animateBehavior[index].transitionConfig).finished
    } else {
      await robot.animate([animateBehavior[index].ani], animateBehavior[index].transitionConfig)
        .finished
    }
  }
  console.log('animation end')
  inFootballPrograss.value = false
  resetPos()
}

/**
 * 中止动画
 */
const stopAnimation = () => {
  robot.deactivateAnimations()
  inFootballPrograss.value = false
}

/**
 * 激活动画 只能激活最近的一次动画
 */
// const continueAnimation = () => {
//   robot.activateAnimations()
// }

const stop = () => {
  stopAnimation()
}
</script>

<template>
  <!-- <button @click="continueAnimation">continue</button> -->
  <button @click="stop">stop</button>
  <div id="stage" ref="contanierRef"></div>
</template>

<style scoped>
#stage {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
