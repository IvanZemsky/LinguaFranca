import type { Component } from "vue"
import type { LessonContent } from "~/src/entities/lesson"
import LessonParagraph from "../ui/lesson-paragraph.vue"
import LessonNote from "../ui/lesson-note.vue"
import LessonSubheading from "../ui/lesson-subheading.vue"
import LessonText from "../ui/text/lesson-text.vue"
import LessonTable from "../ui/table/lesson-table.vue"
import LessonList from "../ui/lesson-list/lesson-list.vue"

export const LESSON_CONTENT_TYPES: Record<LessonContent["type"], Component> = {
  paragraph: LessonParagraph,
  table: LessonTable,
  note: LessonNote,
  subheading: LessonSubheading,
  "language-text": LessonText,
  list: LessonList,
}
