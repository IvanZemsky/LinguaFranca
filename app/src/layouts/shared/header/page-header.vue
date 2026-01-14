<script setup lang="ts">
import { NuxtLink } from "#components"
import ThemeBtn from "./theme-btn.vue"
import { useThemeStore } from "~/src/shared/model"
import { CrossIcon, BurgerIcon } from "~/src/shared/ui/icons"
import { UiButton } from "~/src/shared/ui"

const isHeaderMenuOpen = ref(false)

const themeStore = useThemeStore()
</script>

<template>
  <header class="header">
    <div class="content">
      <!-- prettier-ignore -->
      <NuxtLink class="logo" to="/">
        <span class="logo-letter">L</span>ingua<span class="logo-letter">F</span>ranca
      </NuxtLink>

      <div :class="['navigation-wrap', { open: isHeaderMenuOpen }]">
        <nav class="navigation">
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

        <UiButton
          @click="isHeaderMenuOpen = false"
          class="close-menu-btn"
          size="sm"
          variant="ghost"
        >
          <template #icon>
            <CrossIcon />
          </template>
        </UiButton>
        <ThemeBtn class="theme-btn" @click="themeStore.toggleTheme" />
      </div>

      <UiButton
        @click="isHeaderMenuOpen = true"
        class="toggle-header-menu-btn"
        size="sm"
        variant="ghost"
        color="secondary"
      >
        <template #icon>
          <BurgerIcon />
        </template>
      </UiButton>
    </div>
    <div class="bottom-border" />
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 800;
  background-color: var(--c-main-surface);
  transition: 0.4s background-color linear;
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
.navigation-wrap {
  display: contents;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-right: auto;
}

.toggle-header-menu-btn {
  display: none;
}

.close-menu-btn {
  display: none;
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
  :deep(.ui-button.sm).toggle-menu-btn {
    padding: 4px;
  }
}

@media screen and (max-width: 824px) {
  .content {
    justify-content: flex-start;
  }

  .navigation-wrap {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2.8rem 2rem 2rem;
    height: 100%;
    border-left: 3px solid #eee;
    background-color: var(--c-main-surface);
    transition: 0.15s ease-in-out transform;
    transform: translateX(100%);
    z-index: 920;

    &.open {
      transform: translateX(0);
    }
  }

  .links {
    flex-direction: column;
    align-items: stretch;
  }

  .close-menu-btn {
    display: inline-flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .theme-btn {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .toggle-header-menu-btn {
    display: inline-flex;
    margin-left: auto;
  }
}

@media screen and (max-width: 386px) {
  .content {
    gap: 1rem;
  }
}
</style>
