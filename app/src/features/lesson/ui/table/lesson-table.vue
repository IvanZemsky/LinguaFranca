<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { LESSON_TABLE_TYPES } from "../../model"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
</script>

<template>
  <component :is="LESSON_TABLE_TYPES[data.type]" :data="data" />
</template>
