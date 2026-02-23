<script setup lang="ts">
import { useFetchSectionsByBookId } from "~/src/entities/lesson"

const route = useRoute()
const bookId = route.params.book_id

const {
  data: sectionList,
  error,
  pending,
} = useFetchSectionsByBookId(bookId as string)

useHead({
  title: "Список уроков",
})
</script>

<template>
  <section class="lessons">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <h1 class="title" v-if="!pending && sectionList">
      {{ sectionList.bookTitle }}
    </h1>

    <div v-if="!pending && sectionList" class="lesson-sections">
      <div
        v-for="section in sectionList.sections"
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
  max-width: 900px;
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem 1.25rem;
}

.lesson-item {
  font-size: 0.875rem;
  transition: 0.15s color linear;

  & a:hover {
    color: var(--c-primary);
    text-decoration: underline;
  }
}
</style>
