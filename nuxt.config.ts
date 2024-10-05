// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/content",
  ],

  content: {},

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
      routes: ["/index.xml", "/index.json", "/atom.xml"],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
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
          rel: "alternate",
          type: "application/atom+xml",
          href: "/atom.xml",
        },
        {
          rel: "alternate",
          type: "application/feed+json",
          href: "/index.json",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },

  compatibilityDate: "2024-09-14",
});
