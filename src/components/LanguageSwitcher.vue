<script setup>
import { ref } from "vue";
import { Select } from "flowbite-vue";

let selected = ref("us");
const countries = [
  { value: "us", name: "Русский" },
  { value: "ca", name: "english" },
];
</script>
<template>
  <div class="w-[120px]">
    <Select v-model="selected" :options="countries" />
  </div>
</template>
