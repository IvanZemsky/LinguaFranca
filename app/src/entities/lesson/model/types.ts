export type LessonNumber = number

export type Section = {
  number: number
  title: string
  lessons: LessonInfo[]
  bookId: string
}

export type LessonInfo = {
  id: string
  number: LessonNumber
  title: string
  readableId: string
  prevLessonReadableId: string | null
  nextLessonReadableId: string | null
}

export type Lesson = LessonInfo & {
  content: LessonContent[]
}

export type LessonContent =
  | LessonSubheading
  | LessonParagraph
  | LessonNote
  | LessonLanguageText
  | LessonTable

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
