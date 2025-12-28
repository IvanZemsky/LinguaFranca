<script setup lang="ts">
import PageHeader from "./page-header.vue"
</script>

<template>
  <div class="layout">
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
