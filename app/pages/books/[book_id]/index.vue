<script setup lang="ts">
import { useFetchBookById } from "~/src/entities/book"
import type { LessonList as LessonListType } from "~/src/entities/lesson"
import { useBookPageMeta } from "~/src/pages/book"
import { UiNuxtBtnLink } from "~/src/shared/ui"
import { LessonList } from "~/src/features/lesson"

const bookId = useRoute().params.book_id
const { data: book, error, pending } = useFetchBookById(bookId as string)

useBookPageMeta(book, pending, error)

const mockLessonList: LessonListType = {
  id: "list-001",
  lessonId: "lesson-123",
  numberInLesson: "1",
  type: "list",
  variant: "ol",
  title: "Основные преимущества TypeScript",
  items: [
    {
      text: "Типы списков",
      variant: "ul", // <-- родительский элемент с дочерними
      items: [
        {
          text: "Упорядоченный список (ol)",
          variant: "li", // <-- нет свойства items, так как нет детей
        },
        {
          text: "Неупорядоченный список (ul)",
          variant: "li", // <-- нет свойства items, так как нет детей
        },
      ],
    },
    {
      text: "Преимущества статической типизации",
      variant: "ol", // <-- родительский элемент с дочерними
      items: [
        {
          text: "Выявление ошибок на этапе компиляции",
          variant: "li", // <-- нет свойства items
        },
        {
          text: "Улучшенная поддержка IDE",
          variant: "li", // <-- нет свойства items
        },
        {
          text: "Более понятная документация кода",
          variant: "li", // <-- нет свойства items
        },
      ],
    },
    {
      text: "Основные типы в TypeScript",
      variant: "ul", // <-- родительский элемент с дочерними
      items: [
        {
          text: "Примитивы",
          variant: "ul", // <-- вложенный родитель
          items: [
            {
              text: "string",
              variant: "li", // <-- нет свойства items
            },
            {
              text: "number",
              variant: "li", // <-- нет свойства items
            },
            {
              text: "boolean",
              variant: "li", // <-- нет свойства items
            },
          ],
        },
        {
          text: "Массивы",
          variant: "li", // <-- нет свойства items
        },
        {
          text: "Объекты",
          variant: "li", // <-- нет свойства items
        },
      ],
    },
  ],
}
</script>

<template>
  <div class="wrap">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <UiNuxtBtnLink v-if="!pending && book" :to="`/books/${book.id}/lessons`">
      Список уроков
    </UiNuxtBtnLink>

    <LessonList :data="mockLessonList" />
  </div>
</template>

<style scoped>
.wrap {
  padding: 1rem;
}
</style>
