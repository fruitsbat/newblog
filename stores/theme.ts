import { defineStore } from "pinia";

export enum Theme {
  None = "",
  Sleepy = "sleepy",
  PostIt = "post-it",
  Magic = "magic",
  Minty = "minty",
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    active: Theme.None,
  }),
  persist: true,
});
