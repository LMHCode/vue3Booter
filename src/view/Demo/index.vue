<script setup lang="ts">
import RedPackage from '@/untils/redPackage'
const redPage = new RedPackage({ domId: 'redPage' })
redPage.init()
const clear = () => {
  redPage.clear()
}
</script>

<template>
  <div id="redPage"></div>
  <button @click="clear">clear</button>
</template>

<style scoped>
#redPage {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
