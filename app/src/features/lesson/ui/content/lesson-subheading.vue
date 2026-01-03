<script setup lang="ts">
import type { LessonSubheading } from "~/src/entities/lesson"

type Props = {
  level: LessonSubheading["level"]
}

defineProps<Props>()
</script>

<template>
  <h2 :class="['subheading', `level-${level}`]">Heading</h2>
</template>

<style scoped>
.subheading.level-1 {
  font-size: 1.75rem;
}
.subheading.level-2 {
  font-size: 1.5rem;
}

.subheading.level-3 {
  font-size: 1.25rem;
}
</style>
