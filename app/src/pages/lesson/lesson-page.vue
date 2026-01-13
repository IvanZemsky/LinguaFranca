<script setup lang="ts">
import { useFetchLessonByBookIdAndReadableId } from "~/src/entities/lesson"
import LessonPageLayout from "./ui/lesson-layout.vue"
import LessonMenu from "./ui/lesson-menu.vue"
import LessonContent from "./ui/lesson-content.vue"
import ChangeBtnsMobile from "./ui/change-btns-mobile.vue"
import ChangeLessonBtn from "./ui/change-lesson-btn.vue"
import { useLessonPageMeta } from "./model"

const route = useRoute()
const bookId = route.params.book_id as string
const lessonName = route.params.lesson_name as string

const {
  data: lesson,
  pending,
  error,
} = useFetchLessonByBookIdAndReadableId(bookId, lessonName)

useLessonPageMeta(lesson, pending, error)
</script>

<template>
  <LessonPageLayout>
    <template #no-content>
      <p v-if="pending">Загрузка</p>

      <template v-else-if="error">
        <p v-if="error.statusCode === 404">Урок не найден</p>
        <p v-else>Ошибка</p>
      </template>
    </template>

    <template #prev-lesson-btn v-if="!pending && lesson">
      <ChangeLessonBtn variant="prev" :lesson="lesson" :book-id="bookId" />
    </template>

    <template #next-lesson-btn v-if="!pending && lesson">
      <ChangeLessonBtn variant="next" :lesson="lesson" :book-id="bookId" />
    </template>

    <template #menu v-if="!pending && lesson">
      <LessonMenu :lesson="lesson" />
    </template>

    <template #lesson-content>
      <LessonContent :lesson="lesson" v-if="lesson" />
    </template>

    <template #change-btns-mobile>
      <ChangeBtnsMobile :lesson="lesson" :book-id="bookId" v-if="lesson" />
    </template>
  </LessonPageLayout>
</template>
