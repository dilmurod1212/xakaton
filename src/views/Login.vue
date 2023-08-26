<script setup>
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
<template>
  <button
    @click="showModal"
    type="button"
    class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Show modal
  </button>
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
</template>
<style></style>
