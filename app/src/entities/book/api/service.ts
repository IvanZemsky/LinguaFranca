import { type Book } from "../model"

const baseUrl = "/api/books"

export const bookService = {
  async fetchBooks() {
    return await $fetch<Book[]>(baseUrl)
  },

  async fetchBookById(id: string) {
    return await $fetch<Book | undefined>(`${baseUrl}/${id}`)
  },
}
