// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ["/index.xml"],
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {name: "page", "mode": "out-in"},
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "/index.xml",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
