<script setup lang="ts">
import { NuxtLink } from "#components"
import { HEADER_LINKS } from "./model"
</script>

<template>
  <ul>
    <li v-for="link in HEADER_LINKS" :key="link.path">
      <NuxtLink class="link" :to="link.path">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
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
</style>
