<script setup lang="ts">
import RedPackage from '@/untils/redPackage'
const redPage = new RedPackage({ domId: 'redPage' })
redPage.init()
</script>

<template>
  <div id="redPage"></div>
</template>

<style scoped>
#redPage {
  color: #888;
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
