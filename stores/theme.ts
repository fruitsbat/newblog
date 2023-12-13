import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    active: "" as String,
  }),
  persist: true,
});
