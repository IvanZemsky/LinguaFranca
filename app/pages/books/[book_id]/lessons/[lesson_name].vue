<script setup lang="ts">
import { useFetchLessonByBookIdAndReadableId } from "~/src/entities/lesson"
import { LessonContentPart } from "~/src/features/lesson"

const route = useRoute()
const bookId = route.params.book_id as string
const lessonName = route.params.lesson_name as string

const {
  data: lesson,
  pending,
  error,
} = useFetchLessonByBookIdAndReadableId(bookId, lessonName)
</script>

<template>
  <div class="page">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <div class="content" v-if="!pending && lesson">
      <LessonContentPart
        v-for="part in lesson.content"
        :key="part.numberInLesson"
        :data="part"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 1.25rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
