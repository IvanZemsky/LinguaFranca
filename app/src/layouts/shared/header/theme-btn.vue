<script setup lang="ts">
import { useThemeStore } from "~/src/shared/model"
import { MoonIcon, SunIcon } from "~/src/shared/ui/icons"

const themeStore = useThemeStore()
</script>

<template>
  <button class="theme-btn">
    <MoonIcon v-if="themeStore.theme === 'light'" />
    <SunIcon v-if="themeStore.theme === 'dark'" />
  </button>
</template>

<style scoped>
.theme-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--c-main-text);

  & svg {
    flex-shrink: 0;
    width: 20px;
    stroke: var(--c-neutral);
    stroke-width: 1px;
    transition: stroke 150ms linear;
  }

  &:hover svg {
    stroke: var(--c-primary);
  }
}
</style>
