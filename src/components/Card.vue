<script setup>
import { Badge } from "flowbite-vue";
import { defineProps, onMounted } from "vue";

const props = defineProps({
  card: Object,
});

</script>
<template>
  <div class="card bg-white rounded-lg shadow overflow-hidden">
    <img src="https://picsum.photos/200 " alt="" class="w-full object-cover" />
    <div class="content p-4">
      <span class="py-1 px-2 bg-gray-200 rounded-lg text-xs my-4">{{
        card?.address
      }}</span>
      <h5
        class="my-2 text-xl font-bold tracking-tight text-[#388FF3] max-md:text-base"
      >
        {{ card?.title }}
      </h5>
      <p class="my-2 opacity-50 text-sm">Вчера, 19:20</p>
      <a
        href="tel:+998 71 200 70 07"
        class="text-lg font-bold opacity-60 max-md:text-sm"
        >+998 71 200 70 07</a
      >
      <p class="text-black font-bold text-2xl max-md:text-xl">
        {{ card?.price }} <span class="text-[#388FF3] text-xs">UZS</span>
      </p>
    </div>
  </div>
</template>
