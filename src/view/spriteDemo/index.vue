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
      fill: 'both'
    }
  },
  {
    ani: { x: 18, y: 50, scale: [0.9, 0.9], rotate: 360 * 3 },
    transitionConfig: {
      duration: 1000,
      fill: 'both'
    }
  },
  {
    ani: { x: 50, y: 25, scale: [0.8, 0.8], rotate: 360 * 2 },
    transitionConfig: {
      duration: 1000,
      fill: 'both'
    }
  },
  {
    ani: { x: 60, y: 45, scale: [0.7, 0.7], rotate: 360 * 1 },
    transitionConfig: {
      duration: 1000,
      fill: 'both',
      easing: 'ease-out'
    }
  }
]

onMounted(() => {
  const container = contanierRef.value
  const scene = new Scene({ container, width: 360, height: 800, mode: 'stickyTop' })
  const layer = scene.layer()
  const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png')
  const resetPos = () => {
    robot.attr({
      anchor: [0.5, 0.5], // 锚点，你可以理解为css3中的transform-origin
      pos: [180, 400], // 位置，最大为 360 * 800 也就是场景的大小
      size: [36, 50], // 大小，默认为图片的宽高
      scale: [1, 1] // 缩放，默认 1 1
    })
  }
  resetPos()
  const shoot = async () => {
    robot.animate([animateBehavior[0].ani], animateBehavior[0].transitionConfig).finished
    await robot.animate([animateBehavior[1].ani], animateBehavior[1].transitionConfig).finished
    await robot.animate([animateBehavior[2].ani], animateBehavior[2].transitionConfig).finished
    await robot.animate([animateBehavior[3].ani], animateBehavior[3].transitionConfig).finished
    console.log('animation end')
    resetPos()
  }

  layer.append(robot)
  robot.addEventListener('click', evt => {
    console.log('xxxxx---start', evt)
    shoot()
  })
  // robot.addEventListener('touchend', evt => {
  //   console.log('xxxxxx---end', evt)
  // })
})
</script>

<template>
  <div id="stage" ref="contanierRef"></div>
</template>

<style scoped>
#stage {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
