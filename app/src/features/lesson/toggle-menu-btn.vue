<script setup lang="ts">
import { UiButton } from "~/src/shared/ui"
</script>

<template>
  <UiButton class="toggle-menu-btn" size="sm" variant="ghost" color="secondary">
    <template #icon>
      <div class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </template>
  </UiButton>
</template>

<style scoped>
.toggle-menu-btn {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > .burger {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  & > .burger > span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--c-neutral);
  }
}
</style>
