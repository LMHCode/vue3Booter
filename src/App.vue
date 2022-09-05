<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
// type RouterItem = RouteRecordName | null | undefined | string | RegExp
const route = useRoute()
const includeList = ref<any>([])
watch(
  route,
  newVal => {
    console.log('newval+++++++++++++', newVal)
    if (newVal.meta.keepAlive && includeList.value.indexOf(newVal.name) === -1) {
      includeList.value.push(newVal.name)
      console.log(includeList.value)
    }
  },
  { deep: true }
)
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
