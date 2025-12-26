import type { Component } from "vue"
import type { LessonTable } from "~/src/entities/lesson"
import LessonHorizontalTable from "./ui/table/lesson-horizontal-table.vue"
import LessonIntersectingTable from "./ui/table/lesson-intersecting-table.vue"
import LessonVerticalTable from "./ui/table/lesson-vertical-table.vue"

export const LESSON_TABLE_TYPES: Record<LessonTable["type"], Component> = {
  horizontal: LessonHorizontalTable,
  intersecting: LessonIntersectingTable,
  vertical: LessonVerticalTable,
}
