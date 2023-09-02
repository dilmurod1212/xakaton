<template>
   <div class="title text-center my-4">
    <h2 class="text-3xl font-bold">{{ text }}</h2>
    <p class="text-gray-500">
      <p>{{ descr }}</p>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps( {
  descr: String,
  text:String,
})
</script>

<style lang="scss" scoped>

</style>