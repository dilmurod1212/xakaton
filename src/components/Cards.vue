<template>
  <div class="container">
    <Title :text="title.text" :descr="title.descr" />
    <div class="cards grid grid-cols-4 gap-3 max-md:grid-cols-2">
      <Card v-for="el in 20" />
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import { reactive } from "vue";
import Card from "./Card.vue";
const title = reactive({
  text: "Объявления",
  descr: "Вы можете найти все категории, которые вам нужны от покупателя",
});
</script>

<style lang="scss" scoped></style>
