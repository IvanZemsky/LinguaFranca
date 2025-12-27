<script setup lang="ts">
import type { LessonTable } from "@/src/entities/lesson"
import { UiTable, UiTableCell, UiTableRow } from "~/src/shared/ui"

type Props = {
  data: LessonTable
}

const { data } = defineProps<Props>()
const { headers, rows, type } = data
</script>

<template>
  <UiTable :variant="type">
    <UiTableRow v-for="(row, i) in rows" :key="i">
      <UiTableCell scope="row">{{ headers[i] }}</UiTableCell>
      <UiTableCell v-for="cell in row" :key="cell">
        {{ cell }}
      </UiTableCell>
    </UiTableRow>
  </UiTable>
</template>
