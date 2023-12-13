import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    active: "" as String,
  }),
  getters: {
    active: (state) => state.active,
  },
  persist: true,
});
