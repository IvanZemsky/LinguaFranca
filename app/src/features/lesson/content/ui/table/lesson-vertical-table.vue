<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { UiTable, UiTableCell, UiTableRow, UiTableHead } from "~/src/shared/ui"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
const { headers, rows, variant } = data
</script>

<template>
  <UiTable :variant="variant">
    <template #head>
      <UiTableHead v-if="headers.length">
        <UiTableCell v-for="header in headers" :key="header">
          {{ header }}
        </UiTableCell>
      </UiTableHead>
    </template>
    <UiTableRow v-for="(row, i) in rows" :key="i">
      <UiTableCell v-for="cell in row" :key="cell">{{ cell }}</UiTableCell>
    </UiTableRow>
  </UiTable>
</template>
