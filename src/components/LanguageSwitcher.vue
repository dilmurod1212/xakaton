<script setup>
import { ref } from "vue";
import { Select } from "flowbite-vue";

let selected = ref("ru");
const countries = [
  { value: "ru", name: "ru" },
  { value: "en", name: "en" },
];
</script>
<template>
  <div class="w-[70px]">
    <Select v-model="selected" :options="countries" />
  </div>
</template>
