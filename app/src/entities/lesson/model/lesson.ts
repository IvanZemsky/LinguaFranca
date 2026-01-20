import type { BookId } from "../../book"
import type { LessonContent } from "./content"

export type LessonNumber = number

export type SectionListWithBookMainData = {
  bookId: BookId
  bookTitle: string
  sections: Section[]
}

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
