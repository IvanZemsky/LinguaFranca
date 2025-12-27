<script setup lang="ts">
import LessonVocabulary from "./lesson-vocabulary.vue"
import type { LessonLanguageText } from "~/src/entities/lesson"

type Props = {
  data: LessonLanguageText
}

const props = defineProps<Props>()
const { title, translation, text, vocabulary } = props.data
</script>

<template>
  <div class="container">
    <header class="header">
      <h3>{{ title }}</h3>
      <p class="translation">({{ translation }})</p>
    </header>

    <p class="text">
      {{ text }}
    </p>

    <LessonVocabulary :data="vocabulary" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid rgb(219, 234, 254);
  border-radius: 6px;
  padding: 1rem;
  background-color: rgba(239, 246, 255, 0.4);
}

.header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header h3 {
  font-family: "Lora";
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.translation {
  font-size: 0.75rem;
  color: rgb(156, 163, 175);
  margin: 0;
}

.text {
  font-family: "Lora";
  font-size: 1rem;
  margin-top: -0.375rem;
  margin-bottom: 0;
  line-height: 1.5;
}
</style>
