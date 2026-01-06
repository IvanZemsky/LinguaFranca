import type { Component } from "vue"
import type { LessonContent } from "~/src/entities/lesson"
import LessonParagraph from "../ui/content/lesson-paragraph.vue"
import LessonTable from "../ui/content/table/lesson-table.vue"
import LessonNote from "../ui/content/lesson-note.vue"
import LessonSubheading from "../ui/content/lesson-subheading.vue"
import LessonText from "../ui/content/text/lesson-text.vue"

export const LESSON_CONTENT_TYPES: Record<LessonContent["type"], Component> = {
  paragraph: LessonParagraph,
  table: LessonTable,
  note: LessonNote,
  subheading: LessonSubheading,
  "language-text": LessonText,
}
