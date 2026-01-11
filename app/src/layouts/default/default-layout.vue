<script setup lang="ts">
import { useThemeStore } from "~/src/shared/model"
import PageHeader from "../shared/header/page-header.vue"

const themeStore = useThemeStore()
</script>

<template>
  <div :class="['layout', `theme-${themeStore.theme}`]">
    <PageHeader />
    <slot />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
