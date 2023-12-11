export const useMusicStore = defineStore("music", {
  state: () => ({
    src: [] as Array<String>,
    volume: 0.2,
  }),
});
