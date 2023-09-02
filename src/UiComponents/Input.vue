<template>
  <input
    :type="text"
    :placeholder="placeholder"
    class="px-4 py-2 bg-transparent border-none active:outline-none! focus:outline-none! focus:border-none active:border-none"
  />
</template>

<script setup>
import { defineProps } from "vue";
</script>

<style lang="scss" scoped></style>
