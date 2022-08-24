<script setup lang="ts">
import { storeToRefs } from 'pinia'
import storeUser from '@/pinia/user'

const userStore = storeUser()
let { username, age } = storeToRefs(userStore)
console.log(username.value, age.value)
</script>

<template>
  <p class="read-the-docs">Homecc</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  font-size: 16px;
}
</style>
