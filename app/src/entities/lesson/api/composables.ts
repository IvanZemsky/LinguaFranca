import type { BookId } from "../../book"
import { lessonService } from "./service"

export function useFetchSectionsByBookId(bookId: BookId) {
  return useAsyncData(`sections-${bookId}`, () =>
    lessonService.fetchSectionsByBookId(bookId)
  )
}

export function useFetchLessonByBookIdAndReadableId(
  bookId: BookId,
  readableId: string
) {
  return useAsyncData(`lesson-${bookId}-${readableId}`, () =>
    lessonService.fetchLessonByBookIdAndReadableId(bookId, readableId)
  )
}
