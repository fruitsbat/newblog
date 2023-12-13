// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
      expires: new Date(new Date().getFullYear() + 2, 1, 1),
    },
    storage: "cookies",
  },
  nitro: {
    prerender: {
      routes: ["/index.xml"],
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
