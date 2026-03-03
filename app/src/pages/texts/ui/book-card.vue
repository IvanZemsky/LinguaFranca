<script setup lang="ts">
import { NuxtLink } from "#components"
import type { Book } from "~/src/entities/book"

type Props = {
  data: Book
  link: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="link" class="book-card">
    <p class="book-card-name">{{ data.name }}</p>
    <p class="book-card-text-number">{{ data.details.texts }}</p>
  </NuxtLink>
</template>

<style scoped>
.book-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f0f0f0;
  border: 2px solid #cfcfcf;
  transition: background-color 0.15s ease-in-out;
}

.book-card:hover {
  background-color: #e0e0e0;
}

.book-card-name {
  font-size: 1.25rem;
  font-weight: bold;
}

.book-card-text-number {
  padding: 0.3rem 0.7rem;
  color: var(--c-primary-contrast);
  background-color: var(--c-primary);
  border-radius: 0.5rem;
}
</style>
