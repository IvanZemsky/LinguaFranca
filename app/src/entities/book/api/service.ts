import { type Book } from "../model"

const baseUrl = "/api/books"

export const bookService = {
  async fetchBooks() {
    return await $fetch<Book[]>(baseUrl)
  },

  async fetchBookByName(name: string) {
    return await $fetch<Book | undefined>(`${baseUrl}/${name}`)
  },
}
