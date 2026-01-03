import type { BookId } from "@/src/entities/book"
import type { Lesson, Section } from "../model/types"

export const lessonService = {
  async fetchSectionsByBookId(bookId: BookId) {
    return await $fetch<Section[]>(getUrl(bookId))
  },

  async fetchLessonByBookIdAndReadableId(bookId: BookId, readableId: string) {
    return await $fetch<Lesson | undefined>(getUrl(bookId, readableId))
  },
}

function getUrl(bookId: string, ...strings: string[]) {
  return ["/api/books", bookId, "lessons", ...strings].join("/")
}
