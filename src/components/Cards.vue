<template>
  <div class="container py-4">
    <Title :text="title.text" :descr="title.descr" />
    <div class="cards grid grid-cols-4 gap-3 max-md:grid-cols-2">
      <Card v-for="el in cards" :card="el" :key="el.id" />
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import { reactive, onMounted } from "vue";
import Card from "./Card.vue";
import { Cards } from "../../db.json";

onMounted(() => {
  console.log("logger");
});
const cards = reactive([...Cards]);
const title = reactive({
  text: "Объявления",
  descr: "Вы можете найти все категории, которые вам нужны от покупателя",
});
</script>

<style lang="scss" scoped></style>
