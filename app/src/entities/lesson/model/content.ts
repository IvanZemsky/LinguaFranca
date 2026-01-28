export type LessonContent =
  | LessonSubheading
  | LessonParagraph
  | LessonNote
  | LessonLanguageText
  | LessonTable
  | LessonList

export type LessonParagraph = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "paragraph"
  text: string
}

export type LessonSubheading = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "subheading"
  text: string
  level: 1 | 2 | 3
}

export type LessonNote = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "note"
  title: string
  text: string
}

export type LessonLanguageText = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "language-text"
  title: string
  titleTranslation: string
  textTranslation: string
  text: string
  vocabulary: Word[]
}

export type LessonList = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "list"
  title: string
  variant: "ol" | "ul"
  items: LessonListItem[]
}

export type LessonListItem = {
  text: string
  variant: "ol" | "ul" | "li"
  items?: LessonListItem[]
}

export type Word = {
  word: string
  /**
   * There may be more then one, separated by commas
   */
  translation: string
}

export type LessonTable = {
  id: string
  lessonId: string
  numberInLesson: string
  type: "table"
  variant: "vertical" | "horizontal" | "intersecting" | "headerless"
  title: string
  headers: string[]
  rows: string[][]
}
