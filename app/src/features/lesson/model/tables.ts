import LessonHorizontalTable from "../ui/content/table/lesson-horizontal-table.vue"
import LessonIntersectingTable from "../ui/content/table/lesson-intersecting-table.vue"
import LessonVerticalTable from "../ui/content/table/lesson-vertical-table.vue"
import type { LessonTable as LessonTableType } from "~/src/entities/lesson"

export const LESSON_TABLE_TYPES: Record<LessonTableType["variant"], Component> = {
  horizontal: LessonHorizontalTable,
  intersecting: LessonIntersectingTable,
  vertical: LessonVerticalTable,
}