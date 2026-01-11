<script setup lang="ts">
import type { LessonSubheading } from "~/src/entities/lesson"
import { createAnchorId } from "../../shared/anchors"

type Props = {
  data: LessonSubheading
}

const { data } = defineProps<Props>()
const { level, text, numberInLesson } = data
</script>

<template>
  <h2
    :class="['subheading', `level-${level}`]"
    :id="createAnchorId(text, numberInLesson)"
  >
    {{ text }}
  </h2>
</template>

<style scoped>
.subheading {
  font-weight: 700;
}
.subheading.level-1 {
  font-size: 1.65rem;
}
.subheading.level-2 {
  font-size: 1.5rem;
}

.subheading.level-3 {
  font-size: 1.25rem;
}

@media screen and (max-width: 632px) {
  .subheading.level-1 {
    font-size: 1.25rem;
  }
  .subheading.level-2 {
    font-size: 1.15rem;
  }

  .subheading.level-3 {
    font-size: 1rem;
  }
}
</style>
