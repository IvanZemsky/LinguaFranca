import LessonHorizontalTable from "./lesson-horizontal-table.vue"
import LessonIntersectingTable from "./lesson-intersecting-table.vue"
import LessonVerticalTable from "./lesson-vertical-table.vue"
import type { LessonTable as LessonTableType } from "~/src/entities/lesson"

export const LESSON_TABLE_TYPES: Record<LessonTableType["variant"], Component> = {
  horizontal: LessonHorizontalTable,
  intersecting: LessonIntersectingTable,
  vertical: LessonVerticalTable,
}