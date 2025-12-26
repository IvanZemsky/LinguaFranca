<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { UiTable, UiTableCell, UiTableRow, UiTableHead } from "~/src/shared/ui"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
const { headers, rows, type } = data
</script>

<template>
  <UiTable :variant="type">
    <UiTableHead v-if="headers.length">
      <UiTableCell v-for="header in headers" :key="header">
        {{ header }}
      </UiTableCell>
    </UiTableHead>
    <UiTableRow v-for="row in rows" :key="row">
      <UiTableCell v-for="cell in row" :key="cell">{{ cell }}</UiTableCell>
    </UiTableRow>
  </UiTable>
</template>
