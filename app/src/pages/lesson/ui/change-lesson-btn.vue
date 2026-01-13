<script setup lang="ts">
import type { Lesson } from "~/src/entities/lesson"
import { UiNuxtBtnLink } from "~/src/shared/ui"
import { ArrowLeftIcon, ArrowRightIcon } from "~/src/shared/ui/icons"

type Props = {
  lesson: Lesson
  bookId: string
  variant: "prev" | "next"
}
const props = defineProps<Props>()

const lessonToChangeFor =
  props.variant === "prev" ? "nextLessonReadableId" : "prevLessonReadableId"
</script>

<template>
  <UiNuxtBtnLink
    v-show="lesson[lessonToChangeFor]"
    size="lg"
    variant="ghost"
    :to="`/books/${bookId}/lessons/${lesson[lessonToChangeFor]}`"
  >
    <template #icon>
      <ArrowLeftIcon v-if="variant === 'prev'" />
      <ArrowRightIcon v-else />
    </template>
  </UiNuxtBtnLink>
</template>
