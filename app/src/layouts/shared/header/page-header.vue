<script setup lang="ts">
import { NuxtLink } from "#components"
import { ToggleLessonMenuBtn, useLessonMenuStore } from "~/src/features/lesson"
import ThemeBtn from "./theme-btn.vue"
import { useThemeStore } from "~/src/shared/model"

const route = useRoute()

const isLessonPage = computed(() => {
  const path = route.path
  return /^\/books\/[^/]+\/lessons\/[^/]+$/.test(path)
})

const menuStore = useLessonMenuStore()
const themeStore = useThemeStore()
</script>

<template>
  <header class="header">
    <div class="content">
      <nav class="navigation">
        <ToggleLessonMenuBtn
          v-if="isLessonPage"
          @click="menuStore.toggleMenu"
          class="toggle-menu-btn"
        />
        <!-- prettier-ignore -->
        <NuxtLink class="logo" to="/">
          <span class="logo-letter">L</span>ingua<span class="logo-letter">F</span>ranca
        </NuxtLink>

        <ul class="links">
          <li>
            <NuxtLink class="link" to="/books">Учебники</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/books">Тексты</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/books">Шпаргалки</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/books">Полезные материалы</NuxtLink>
          </li>
        </ul>
      </nav>

      <ThemeBtn @click="themeStore.toggleTheme" />
    </div>
    <div class="bottom-border" />
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 800;
  background-color: var(--c-primary-contrast);
}
.toggle-menu-btn {
  display: none;
}
.logo {
  font-family: Lora;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-main-text);
  transition: opacity 150ms linear;

  &:hover {
    opacity: 0.65;
  }
}
.logo-letter {
  font-size: 24px;
  color: var(--c-primary);
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 20px 22px;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
}
.links {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}
.link {
  font-size: 16px;
  color: var(--c-neutral);
  transition: color 150ms linear;

  &:hover {
    color: var(--c-primary-light);
  }

  &.active {
    color: var(--c-primary);
  }
}

.bottom-border {
  height: 3px;
  background-color: #eee;
}

@media screen and (max-width: 1000px) {
  .toggle-menu-btn {
    display: flex;
  }

  :deep(.ui-button.sm).toggle-menu-btn {
    padding: 4px;
  }
}
</style>
