export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/styles/fonts.css", "./app/styles/reset.css", "./app/styles/theme.css"],
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@pinia/nuxt"],
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
})