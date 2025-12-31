import { type Book } from "../model"

const baseUrl = "/api/books"

export const bookService = {
  async fetchBooks() {
    return await $fetch<Book[]>(baseUrl)
  },
}
