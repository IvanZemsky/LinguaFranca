<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { LESSON_TABLE_TYPES } from "../../model/tables"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
</script>

<template>
  <div class="wrap">
    <component :is="LESSON_TABLE_TYPES[data.variant]" :data="data" />
  </div>
</template>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin: 0 auto;
}

:deep(table) {
  max-width: 798px;
}
</style>
