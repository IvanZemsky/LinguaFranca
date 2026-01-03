import type { Component } from "vue"
import type { LessonContent, LessonTable as LessonTableType } from "~/src/entities/lesson"
import LessonHorizontalTable from "./ui/table/lesson-horizontal-table.vue"
import LessonIntersectingTable from "./ui/table/lesson-intersecting-table.vue"
import LessonVerticalTable from "./ui/table/lesson-vertical-table.vue"
import LessonParagraph from "./ui/content/lesson-paragraph.vue"
import LessonTable from "./ui/table/lesson-table.vue"
import LessonNote from "./ui/content/lesson-note.vue"
import LessonSubheading from "./ui/content/lesson-subheading.vue"
import LessonText from "./ui/text/lesson-text.vue"

export const LESSON_TABLE_TYPES: Record<LessonTableType["variant"], Component> = {
  horizontal: LessonHorizontalTable,
  intersecting: LessonIntersectingTable,
  vertical: LessonVerticalTable,
}

export const LESSON_CONTENT_TYPES: Record<LessonContent["type"], Component> = {
  paragraph: LessonParagraph,
  table: LessonTable,
  note: LessonNote,
  subheading: LessonSubheading,
  "language-text": LessonText,
}
