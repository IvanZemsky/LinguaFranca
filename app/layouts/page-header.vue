<script setup lang="ts">
import { NuxtLink } from "#components"
import { MoonIcon } from "~/src/shared/ui/icons"
</script>

<template>
  <header class="header">
    <div class="content">
      <nav class="navigation">
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

      <button class="theme-btn">
        <MoonIcon />
      </button>
    </div>
    <div class="bottom-border" />
  </header>
</template>

<style scoped>
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

.bottom-border {
  height: 3px;
  background-color: #eee;
}
</style>
