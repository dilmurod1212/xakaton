<template>
  <!-- modal -->

  <Modal size="md" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        <h1 class="text-2xl font-bold">Добро пожаловать!</h1>
      </div>
    </template>
    <template #body>
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Логин</label
          >
          <input
            type="text"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Введите логин"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Пароль</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Введите пароль"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-[#388FF3] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-0"
        >
          Войти
        </button>
        <div class="text-center wrapper">
          <a href="#" class="text-[#8E9297] m-0 my-btn"
            >Хотите стать продавцом?</a
          >
        </div>
        <button
          type="button"
          class="w-full text-[#388FF3] hover:text-white border border-[#388FF3] hover:bg-[#388FF3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Подать заявку
        </button>
      </form>
    </template>
  </Modal>
  <!-- modal end -->
  <div class="bg-white">
    <div
      class="flex justify-between items-center py-4 relative container max-md:container"
    >
      <div class="flex items-center gap-3">
        <LanguageSwitcher />
        <a href="tel:+998 88 500 50 00" class="max-md:hidden"
          ><i class="fas fa-phone"></i> +998 88 500 50 00</a
        >
      </div>
      <div class="logo w-40 absolute top-4 left-[50%] translate-x-[-50%]">
        <a href="#"
          ><img src="../assets/images/Frame427319431logoo.svg" alt="logo"
        /></a>
      </div>
      <div class="logOut">
        <a
          href="#"
          @click="showModal"
          class="px-4 py-2 flex gap-2 items-center bg-gray-300 font-bold rounded-md"
          ><span class="max-md:hidden">Войти</span
          ><i class="fa-solid fa-right-to-bracket"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script setup>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { Modal, Input } from "flowbite-vue";
import { ref } from "vue";

const isShowModal = ref(false);
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>
<style>
.container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
