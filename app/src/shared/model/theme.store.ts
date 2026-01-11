export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark">("light")

  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light"
  }

  return { theme, toggleTheme }
})
