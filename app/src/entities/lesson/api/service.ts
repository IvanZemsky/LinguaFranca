import type { BookId } from "@/src/entities/book"
import type { Lesson, SectionListWithBookMainData } from "../model/lesson"

export const lessonService = {
  async fetchSectionsByBookId(bookId: BookId) {
    return await $fetch<SectionListWithBookMainData>(getUrl(bookId))
  },

  async fetchLessonByBookIdAndReadableId(bookId: BookId, readableId: string) {
    return await $fetch<Lesson | undefined>(getUrl(bookId, readableId))
  },
}

function getUrl(bookId: string, ...strings: string[]) {
  return ["/api/books", bookId, "lessons", ...strings].join("/")
}
