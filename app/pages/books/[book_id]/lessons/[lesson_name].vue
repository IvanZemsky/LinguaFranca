<script setup lang="ts">
import { useFetchLessonByBookIdAndReadableId } from "~/src/entities/lesson"
import {
  createAnchorId,
  LessonContentPart,
  ToggleLessonMenuBtn,
  useLessonMenuStore,
} from "~/src/features/lesson"
import { useLessonPageMeta } from "~/src/pages/lesson"
import { UiNuxtBtnLink } from "~/src/shared/ui"
import { ArrowLeftIcon, ArrowRightIcon } from "~/src/shared/ui/icons"

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

const lessonMenuStore = useLessonMenuStore()
const { toggleMenu } = lessonMenuStore
const { isOpen: isMenuOpen } = storeToRefs(lessonMenuStore)

useLessonPageMeta(lesson, pending, error)
</script>

<template>
  <div class="page">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Урок не найден</p>
      <p v-else>Ошибка</p>
    </template>

    <div :class="['content', { open: isMenuOpen }]" v-if="!pending && lesson">
      <div :class="['menu-wrap', { open: isMenuOpen }]">
        <div class="menu">
          <div class="menu-blocks">
            <ToggleLessonMenuBtn @click="toggleMenu" class="toggle-menu-btn" />

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
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  padding-left: 0;
  height: 100%;
  transition: padding-left 0.3s ease-in-out;
  min-width: 0;

  &.open {
    padding-left: calc(236px + 1.25rem);
  }
}

.lesson-title {
  font-size: 1.65rem;
  font-weight: 700;
}

.menu-wrap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  z-index: 10;

  &.open {
    transform: translateX(0);
  }
}

.menu {
  position: sticky;
  top: 0;
  left: 0;
  width: 236px;
  height: 100%;
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
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1.25rem;
  gap: 1.25rem;
  min-width: 0;
}

.lesson-content {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  gap: 1.75rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-width: 0;
  flex: 1;
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

.change-btns-mobile {
  display: none;
}

@media screen and (max-width: 1000px) {
  .toggle-menu-btn {
    display: none;
  }
  .content.open {
    padding-left: 0;
  }
  .menu-wrap {
    transform: translateX(0);
    border-right: 3px solid #eee;

    &.open {
      transform: translateX(-100%);
    }
  }
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
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
  }
}
</style>
