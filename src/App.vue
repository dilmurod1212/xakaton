<template>
  <div class="bg-[#F0F3F7] min-h-screen font-inter">
    <Header />
    <SearchPanel />
    <Category />
    <Cards />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Category from "./components/Category.vue";
import Cards from "./components/Cards.vue";
import SearchPanel from "./components/SearchPanel.vue";
import Register from "./views/Register.vue";
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    max-width: 90%;
  }
}
</style>
