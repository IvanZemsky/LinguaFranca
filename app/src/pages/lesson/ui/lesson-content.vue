<script setup lang="ts">
import type { Lesson } from "~/src/entities/lesson"
import { LessonContentPart } from "~/src/features/lesson";

type Props = {
  lesson: Lesson
}

const { lesson } = defineProps<Props>()
</script>

<template>
  <h1 class="lesson-title">{{ lesson.number }}. {{ lesson.title }}</h1>
  <LessonContentPart
    v-for="part in lesson.content"
    :key="part.numberInLesson"
    :data="part"
  />
</template>

<style scoped>
.lesson-title {
  font-size: 1.65rem;
  font-weight: 700;
}
@media screen and (max-width: 632px) {
  .lesson-title {
    font-size: 1rem;
  }
}
</style>
