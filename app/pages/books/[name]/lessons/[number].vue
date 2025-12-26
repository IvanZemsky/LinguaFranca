<script setup lang="ts">
import type { LessonTable as LessonTableType } from "~/src/entities/lesson"
import { LessonTable } from "~/src/features/lesson"

const data: LessonTableType[] = [
  {
    id: "1",
    type: "vertical",
    title: "Text",
    headers: ["Text 1", "Text 2", "Tex 3", "Text 4"],
    rows: [
      ["Text", "Text", "Text", "Text"],
      ["Text", "Text", "Text", "Text"],
    ],
  },
  {
    id: "2",
    type: "horizontal",
    title: "Text",
    headers: ["Text 1", "Text 2", "Tex 3", "Text 4"],
    rows: [
      ["Text", "Text", "Text", "Text"],
      ["Text", "Text", "Text", "Text"],
    ],
  },
  {
    id: "3",
    type: "intersecting",
    title: "Text",
    headers: ["Text 1", "Text 2", "Tex 3", "Text 4"],
    rows: [
      ["Text", "Text", "Text", "Text", "Text"],
      ["Text", "Text", "Text", "Text", "Text"],
    ],
  },
]
</script>

<template>
  <div class="p-4 flex gap-5 items-start">
    <LessonTable
      v-for="tableData in data"
      :key="tableData.id"
      :data="tableData"
    />
  </div>
</template>
