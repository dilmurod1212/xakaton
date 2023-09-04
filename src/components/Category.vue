<template>
  <Title text="Категории" :descr="descr" />
  <div
    class="categorys container grid grid-cols-3 max-md:grid-cols-1 justify-between gap-10"
  >
    <div
      v-for="el in category"
      class="category relative p-4 border border-gray-400 rounded-lg"
    >
      <div class="">
        <img
          src="@/assets/images/category-icons/Component1(20).svg"
          alt="male-icon"
          class="icon absolute rounded-lg flex items-center justify-center p-2 border border-gray-400 bg-white left-0 translate-x-[-50%] top-[50%] translate-y-[-50%]"
        />
      </div>
      <div class="flex justify-between items-center">
        <div class="category__info pl-8">
          <h3 class="font-bold text-xl">{{ el.title }}</h3>
          <p>{{ el.ad }} объявлений</p>
        </div>
        <button><i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import { ref, reactive } from "vue";
import { category } from "../constants/category";
const descr = ref(
  "Вы можете найти все категории, которые вам нужны от покупателя"
);
const categoryList = reactive([...category]);
</script>

<style lang="scss" scoped>
// .categorys {
//   display: grid;
//   grid-template-columns: repeat(3, 30%);
//   justify-content: space-between;
//   margin-top: 50px;
// }
// .category {
//   padding: 20px;
//   border: 1px solid gray;
//   border-radius: 12px;
//   position: relative;
//   .icon {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 70px;
//     height: 70px;

//     background-color: red;
//     border: 1px solid #5c5757;
//     border-radius: 12px;
//     position: absolute;
//   }
// }
.container {
  max-width: 90%;
}
</style>
