<template>
  <div class="container">

    <div
      class="flex max-md:gap-4 justify-between items-center w-4/6 max-md:w-full m-auto p-4 max-md:p-2 bg-gray-100 rounded-lg border border-gray-400 my-4"
    >
      <div class="flex items-center max-md:justify-center">
        <i class="fas fa-search"></i>
        <Input
          placeholder="search panel"
          type="text"
          class="outline-none active:outline-hidden max-md:text-xs"
        />
      </div>

      <Button
        class="text-white bg-black font-bold border hover:bg-transparent hover:text-black hover:border hover:border-black transition-all max-md:text-xs"
        >Поиск</Button
      >
    </div>
  </div>
</template>

<script setup>
import Button from "../UiComponents/Button.vue";
import Input from "../UiComponents/Input.vue";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>

<style lang="scss" scoped></style>
