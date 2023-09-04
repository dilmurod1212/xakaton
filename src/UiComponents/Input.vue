<template>
  <input
    :type="text"
    :placeholder="placeholder"
    class="px-4 py-2 bg-transparent border-none"
  />
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: String,
  placeholder:String
})
</script>

<style lang="scss" scoped></style>
