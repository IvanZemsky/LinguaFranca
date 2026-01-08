<script setup lang="ts">
import { useFetchSectionsByBookId } from "~/src/entities/lesson"

const route = useRoute()
const bookId = route.params.book_id

const {
  data: sections,
  error,
  pending,
} = useFetchSectionsByBookId(bookId as string)

useHead({
  title: "Список уроков",
})
</script>

<template>
  <section class="lessons">
    <h1 class="title">Английский язык</h1>

    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <div v-if="!pending && sections" class="lesson-sections">
      <div
        v-for="section in sections"
        :key="section.number"
        class="lesson-section"
      >
        <h2 class="section-title">{{ section.title }}</h2>
        <ul class="lessons-list">
          <li
            v-for="lesson in section.lessons"
            :key="lesson.id"
            class="lesson-item"
          >
            <NuxtLink :to="`/books/${bookId}/lessons/${lesson.readableId}`">
              {{ lesson.number }}. {{ lesson.title }}
            </NuxtLink>
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
.lesson-sections {
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
