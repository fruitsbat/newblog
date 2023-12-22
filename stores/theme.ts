import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    active: "",
  }),
  persist: true,
});
