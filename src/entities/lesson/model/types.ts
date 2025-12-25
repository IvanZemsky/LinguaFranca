export type LessonNumber = string

export type Lesson = {
  number: LessonNumber
  title: string
  content: LessonContent[]
}

export type LessonContent =
  | LessonSubheading
  | LessonParagraph
  | LessonNote
  | LessonLanguageText

export type LessonParagraph = {
  id: string
  type: "paragraph"
  text: string
}

export type LessonSubheading = {
  id: string
  type: "subheading"
  text: string
  level: 1 | 2 | 3
}

export type LessonNote = {
  id: string
  type: "note"
  title: string
  text: string
}

export type LessonLanguageText = {
  id: string
  type: "language-text"
  title: string
  translation: string
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
