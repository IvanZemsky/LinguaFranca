<script setup lang="ts">
import type { LessonParagraph } from "~/src/entities/lesson"

type Props = {
  data: LessonParagraph
}

const { data } = defineProps<Props>()
const { text } = data
</script>

<template>
  <p class="paragraph">{{ text }}</p>
</template>

<style scoped>
.paragraph {
  white-space: pre-line;
  font-size: 1rem;
}
</style>
