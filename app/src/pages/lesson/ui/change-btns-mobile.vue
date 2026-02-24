<script setup lang="ts">
import type { Lesson } from "~/src/entities/lesson"
import { ArrowLeftIcon, ArrowRightIcon } from "~/src/shared/ui/icons"
import { UiNuxtBtnLink } from "~/src/shared/ui"

type Props = {
  lesson: Lesson
  bookId: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="change-btns-mobile">
    <UiNuxtBtnLink
      v-if="lesson.prevLessonReadableId"
      size="lg"
      :to="`/books/${bookId}/lessons/${lesson.prevLessonReadableId}`"
    >
      Предыдущий урок
      <template #icon>
        <ArrowLeftIcon />
      </template>
    </UiNuxtBtnLink>

    <UiNuxtBtnLink
      v-if="lesson.nextLessonReadableId"
      size="lg"
      :to="`/books/${bookId}/lessons/${lesson.nextLessonReadableId}`"
    >
      Следующий урок
      <template #icon>
        <ArrowRightIcon />
      </template>
    </UiNuxtBtnLink>
  </div>
</template>

<style scoped>
.change-btns-mobile {
  display: none;
}

@media screen and (max-width: 778px) {
  .content {
    flex-direction: column;
    padding-bottom: 1rem;
  }
  .change-btn-wrap {
    display: none;
  }
  .change-btns-mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
    padding: 1.25rem;

    &:deep(.ui-button):first-child {
      flex-direction: row-reverse;
    }
  }
}
</style>
