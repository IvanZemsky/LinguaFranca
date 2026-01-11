<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { UiTable, UiTableCell, UiTableRow } from "~/src/shared/ui"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
const { rows, variant } = data
</script>

<template>
  <UiTable :variant="variant">
    <UiTableRow v-for="(row, i) in rows" :key="i">
      <UiTableCell v-for="cell in row" :key="cell">{{ cell }}</UiTableCell>
    </UiTableRow>
  </UiTable>
</template>
