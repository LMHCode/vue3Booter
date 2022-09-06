<script setup lang="ts">
// import { ref } from 'vue'

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  msg: String
})
// const count = ref('xx')
</script>

<template>
  <div>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
