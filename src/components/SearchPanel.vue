<template>
  <div class="container">
    <div
      class="flex justify-between items-center w-4/6 max-md:w-full m-auto p-4 bg-gray-100 rounded-lg border border-gray-400 my-4"
    >
      <div class="flex items-center">
        <i class="fas fa-search"></i>
        <Input
          placeholder="search panel"
          type="text"
          class="outline-none active::outline-none"
        />
      </div>

      <Button class="text-white bg-black font-bold">Поиск</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../UiComponents/Button.vue";
import Input from "../UiComponents/Input.vue";
</script>

<style lang="scss" scoped>
input,
input:hover,
input:active,
input:focus {
  border: none !important;
  outline: none !important;
}
</style>
