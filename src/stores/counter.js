import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const data = reactive([]);
  const doubleCount = computed(() => count.value * 2);
  async function getData() {
    const response = await axios.get("../../db.json/Cards");
    data.value = response.data
    console.log(data);
  }
  getData()
  return { count, doubleCount,  };
});
