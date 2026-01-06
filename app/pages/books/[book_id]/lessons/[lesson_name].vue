<script setup lang="ts">
import { useFetchLessonByBookIdAndReadableId } from "~/src/entities/lesson"
import { LessonContentPart } from "~/src/features/lesson"
import { UiButton } from "~/src/shared/ui"
import { ArrowLeftIcon, ArrowRightIcon } from "~/src/shared/ui/icons"

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
      <div class="menu">
        <div class="menu-blocks">
          <div class="menu-block">
            <p class="menu-title">Навигация по уроку</p>
            <p class="manu-link menu-link--active">Введение</p>
            <p class="manu-link">Пункт 2</p>
          </div>

          <div class="menu-block">
            <p class="menu-title">Пункт 2</p>
            <p class="manu-link menu-link--active">Введение</p>
            <p class="manu-link">Пункт 2</p>
          </div>
        </div>
      </div>

      <div class="lesson-wrap">
        <div class="change-btn-wrap">
          <UiButton class="change-lesson-btn" size="lg" variant="ghost">
            <template #icon>
              <ArrowLeftIcon />
            </template>
          </UiButton>
        </div>

        <section class="lesson-content">
          <LessonContentPart
            v-for="part in lesson.content"
            :key="part.numberInLesson"
            :data="part"
          />
        </section>

        <div class="change-btn-wrap">
          <UiButton class="change-lesson-btn" size="lg" variant="ghost">
            <template #icon>
              <ArrowRightIcon />
            </template>
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  gap: 1.25rem;
  height: 100%;
}

.menu {
  width: 236px;
  padding: 2rem 1.125rem;
  background-color: var(--c-secondary-extra-light);
}

.menu-blocks {
  position: sticky;
  top: 2rem;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.menu-block {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.lesson-wrap {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1.25rem;
}

.lesson-content {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.change-btn-wrap {
  display: flex;
  align-items: center;
  max-height: calc(100vh - 70px);
  position: sticky;
  top: 0;
}
:deep(.ui-button.ghost).change-lesson-btn {
  color: var(--c-neutral);
}
</style>
