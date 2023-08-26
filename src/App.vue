<template>
  <div class="bg-[#F0F3F7] min-h-screen">
    <Header />
    <Category />
  </div>
</template>

<script setup>
import Header from "../src/components/Header.vue";
import Category from "./components/Category.vue";
import Register from "./views/Register.vue";
</script>

<style lang="scss">
.container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
