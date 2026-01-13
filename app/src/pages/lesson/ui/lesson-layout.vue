<script setup lang="ts">
import { useLessonMenuStore } from "~/src/features/lesson"

const store = useLessonMenuStore()
</script>

<template>
  <div class="page">
    <slot name="no-content" />

    <div :class="['content', { open: store.isOpen }]">
      <slot name="menu" />

      <div class="lesson-wrap">
        <div class="change-btn-wrap">
          <slot name="prev-lesson-btn" />
        </div>

        <section class="lesson-content">
          <slot name="lesson-content" />
        </section>

        <div class="change-btn-wrap">
          <slot name="next-lesson-btn" />
        </div>
      </div>

      <slot name="change-btns-mobile" />
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
  .content.open {
    padding-left: 0;
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
}

@media screen and (max-width: 632px) {
  .lesson-content {
    gap: 1rem;
  }
}
</style>
