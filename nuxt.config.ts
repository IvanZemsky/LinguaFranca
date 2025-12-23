// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],

  fonts: {
    families: [
      {
        name: "Inter",
        weights: ["400", "500", "600", "700"],
      },
      {
        name: "Philosopher",
        weights: ["400", "700"],
      },
    ],
  },
});