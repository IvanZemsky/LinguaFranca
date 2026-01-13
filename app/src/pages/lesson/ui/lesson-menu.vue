<script setup lang="ts">
import type { Lesson } from "~/src/entities/lesson"
import {
  createAnchorId,
  ToggleLessonMenuBtn,
  useLessonMenuStore,
} from "~/src/features/lesson"

type Props = {
  lesson: Lesson
}

const { lesson } = defineProps<Props>()

const subheadings = computed(() =>
  lesson.content.filter((item) => item.type === "subheading")
)

const lessonMenuStore = useLessonMenuStore()
const { toggleMenu } = lessonMenuStore
const { isOpen: isMenuOpen } = storeToRefs(lessonMenuStore)
</script>

<template>
  <ToggleLessonMenuBtn
    variant="filled"
    @click="toggleMenu"
    class="toggle-menu-btn-mobile"
  />

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
</template>

<style scoped>
.toggle-menu-btn-mobile {
  display: none;
}
.menu-wrap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  z-index: 30;

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

@media screen and (max-width: 1000px) {
  .toggle-menu-btn {
    display: none;
  }
  .toggle-menu-btn-mobile {
    position: fixed;
    top: 100vh;
    transform: translateY(calc(-100% - 20px));
    left: 24px;
    display: flex;
    width: fit-content;
    height: fit-content;
    z-index: 20;
  }
  .menu-wrap {
    transform: translateX(0);
    border-right: 3px solid #eee;

    &.open {
      transform: translateX(-100%);
    }
  }
}
</style>
