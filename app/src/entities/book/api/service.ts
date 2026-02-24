import { type Book, type BookInfo } from "../model"

const baseUrl = "/api/books"

export const bookService = {
  async fetchBooks() {
    return await $fetch<Book[]>(baseUrl)
  },

  async fetchBookById(id: string) {
    return await $fetch<BookInfo | undefined>(`${baseUrl}/${id}`)
  },
}
