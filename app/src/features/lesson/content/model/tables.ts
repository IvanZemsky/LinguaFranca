import LessonHorizontalTable from "../ui/table/lesson-horizontal-table.vue"
import LessonIntersectingTable from "../ui/table/lesson-intersecting-table.vue"
import LessonVerticalTable from "../ui/table/lesson-vertical-table.vue"
import LessonHeaderlessTable from "../ui/table/lesson-headerless-table.vue"
import type { LessonTable as LessonTableType } from "~/src/entities/lesson"

export const LESSON_TABLE_TYPES: Record<LessonTableType["variant"], Component> = {
  horizontal: LessonHorizontalTable,
  intersecting: LessonIntersectingTable,
  vertical: LessonVerticalTable,
  headerless: LessonHeaderlessTable
}