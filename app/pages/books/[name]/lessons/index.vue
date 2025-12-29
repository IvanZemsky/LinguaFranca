<script setup lang="ts"></script>

<template>
  <section class="lessons">
    <h1 class="title">Английский язык</h1>

    <div class="lesson-sections">
      <div class="lesson-section">
        <h2 class="section-title">Раздел 1. Первый раздел</h2>
        <ul class="lessons-list">
          <li v-for="i in 8" :key="i" class="lesson-item">
            <NuxtLink :to="`/books/english/lessons/${i}`">1.{{ i }} Lorem ipsum dolor sit amet</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lessons {
  max-width: 790px;
  width: 100%;
  margin: 24px auto 0 auto;
  padding: 0 25px;
}
.title {
  margin-bottom: 1.75rem;
  font-weight: 700;
  font-size: 2rem;
}
.section-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.lesson-sections{
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.lessons-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem 1.25rem;
}

.lesson-item {
  transition: 0.15s color linear;

  &:hover {
    color: var(--c-primary);
    text-decoration: underline;
  }
}
</style>
