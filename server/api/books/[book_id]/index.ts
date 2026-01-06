import { type Book } from "~/src/entities/book"
import { retrieveDataFromStorage } from "~~/server/utils/json"

export default defineEventHandler(async (event) => {
  const bookId = getRouterParam(event, "book_id")

  if (!bookId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Book id is required",
    })
  }

  try {
    const books = await retrieveDataFromStorage<Book[]>(getDataFileName("books"))
    console.log(books)
    if (!books) {
      throw createError({
        statusCode: 404,
        statusMessage: "Books not found",
      })
    }

    const book = books.find((book) => book.id === bookId)

    if (!book) {
      throw createError({
        statusCode: 404,
        statusMessage: "Book not found",
      })
    }

    return book
  } catch (error: any) {
    if (error?.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    })
  }
})
