<script setup lang="ts">
import { useFetchLessonByBookIdAndReadableId } from "~/src/entities/lesson"
import { createAnchorId, LessonContentPart } from "~/src/features/lesson"
import { useLessonPageMeta } from "~/src/pages/lesson"
import { resolveTitle } from "~/src/shared/lib"
import { UiNuxtBtnLink } from "~/src/shared/ui"
import { ArrowLeftIcon, ArrowRightIcon } from "~/src/shared/ui/icons"
import UiButton from "~/src/shared/ui/kit/button/ui-button.vue"

const route = useRoute()
const bookId = route.params.book_id as string
const lessonName = route.params.lesson_name as string

const {
  data: lesson,
  pending,
  error,
} = useFetchLessonByBookIdAndReadableId(bookId, lessonName)

const subheadings = computed(() =>
  lesson.value?.content.filter((item) => item.type === "subheading")
)

useLessonPageMeta(lesson, pending, error)
</script>

<template>
  <div class="page">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Урок не найден</p>
      <p v-else>Ошибка</p>
    </template>

    <div class="content" v-if="!pending && lesson">
      <div class="menu">
        <div class="menu-blocks">
          <UiButton
            class="toggle-menu-btn"
            size="sm"
            variant="ghost"
            color="secondary"
          >
            <template #icon>
              <div class="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </template>
          </UiButton>

          <div v-if="subheadings?.length" class="menu-block">
            <p class="menu-title">Навигация по уроку</p>
            <a
              v-for="subheading in subheadings"
              :href="`#${createAnchorId(
                subheading.text,
                subheading.numberInLesson
              )}`"
              :key="subheading.numberInLesson"
              class="menu-link"
            >
              {{ subheading.text }}
            </a>
          </div>
        </div>
      </div>

      <div class="lesson-wrap">
        <div class="change-btn-wrap">
          <UiNuxtBtnLink
            v-show="lesson.prevLessonReadableId"
            class="change-lesson-btn"
            size="lg"
            variant="ghost"
            :to="`/books/${bookId}/lessons/${lesson.prevLessonReadableId}`"
          >
            <template #icon>
              <ArrowLeftIcon />
            </template>
          </UiNuxtBtnLink>
        </div>

        <section class="lesson-content">
          <h1 class="lesson-title">{{ lesson.title }}</h1>
          <LessonContentPart
            v-for="part in lesson.content"
            :key="part.numberInLesson"
            :data="part"
          />
        </section>

        <div class="change-btn-wrap">
          <UiNuxtBtnLink
            v-show="lesson.nextLessonReadableId"
            class="change-lesson-btn"
            size="lg"
            variant="ghost"
            :to="`/books/${bookId}/lessons/${lesson.nextLessonReadableId}`"
          >
            <template #icon>
              <ArrowRightIcon />
            </template>
          </UiNuxtBtnLink>
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

.lesson-title {
  font-size: 1.65rem;
  font-weight: 700;
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
  z-index: 10;
}

.toggle-menu-btn {
  position: absolute;
  top: -10px;
  right: -80px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > .burger {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  & > .burger > span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--c-neutral);
  }
}

.menu-block {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: 0.875rem;
}

.menu-title {
  color: var(--c-neutral);
}

.menu-link {
  transition: 0.15s all linear;
}
.menu-link:hover {
  color: var(--c-primary-dark);
}

.menu-link--active {
  color: var(--c-primary-dark);
}

.lesson-wrap {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1.25rem;
  gap: 1.25rem;
}

.lesson-content {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1.75rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.change-btn-wrap {
  display: flex;
  align-items: center;
  max-height: calc(100vh - 70px);
  min-width: 52px;
  position: sticky;
  top: 0;
}
:deep(.ui-button.ghost).change-lesson-btn {
  color: var(--c-neutral);
}
</style>
