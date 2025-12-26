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
      <UiTableCell />
      <UiTableCell v-for="header in headers" :key="header">
        {{ header }}
      </UiTableCell>
    </UiTableHead>
    <UiTableRow v-for="(row, rowIndex) in rows" :key="rowIndex">
      <template v-for="(cell, cellIndex) in row" :key="cellIndex">
        <UiTableCell v-if="cellIndex === 0" scope="row">
          {{ cell }}
        </UiTableCell>
        <UiTableCell v-else-if="cellIndex !== 0">
          {{ cell }}
        </UiTableCell>
      </template>
    </UiTableRow>
  </UiTable>
</template>
