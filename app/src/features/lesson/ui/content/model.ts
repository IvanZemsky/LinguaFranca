import type { Component } from "vue"
import type { LessonContent } from "~/src/entities/lesson"
import LessonParagraph from "./lesson-paragraph.vue"
import LessonTable from "./table/lesson-table.vue"
import LessonNote from "./lesson-note.vue"
import LessonSubheading from "./lesson-subheading.vue"
import LessonText from "./text/lesson-text.vue"


export const LESSON_CONTENT_TYPES: Record<LessonContent["type"], Component> = {
  paragraph: LessonParagraph,
  table: LessonTable,
  note: LessonNote,
  subheading: LessonSubheading,
  "language-text": LessonText,
}
