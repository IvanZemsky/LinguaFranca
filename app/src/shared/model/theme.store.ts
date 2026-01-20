// stores/theme.ts
type Theme = "light" | "dark"

export const useThemeStore = defineStore("theme", () => {
  const themeCookie = useCookie<Theme>("theme", {
    default: () => "light",
    watch: true,
  })

  const theme = useState<Theme>("theme-state", () => themeCookie.value)

  function getDeviceTheme(): Theme {
    if (import.meta.client) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    return "light"
  }

  function initTheme() {
    if (import.meta.client) {
      if (!themeCookie.value) {
        const deviceTheme = getDeviceTheme()
        themeCookie.value = deviceTheme
        theme.value = deviceTheme
      } else {
        theme.value = themeCookie.value
      }
    }
  }

  onMounted(() => {
    initTheme()
  })

  if (import.meta.client && !themeCookie.value) {
    initTheme()
  }

  function toggleTheme() {
    const newTheme = theme.value === "light" ? "dark" : "light"
    theme.value = newTheme
    themeCookie.value = newTheme

    if (import.meta.client) {
      localStorage.setItem("theme", newTheme)
    }
  }

  return { theme, toggleTheme }
})
