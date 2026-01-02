import { type Book } from "~/src/entities/book"
import { getDataFileName } from "~~/server/config"

export default defineEventHandler(async (event) => {
  const bookName = getRouterParam(event, "book_name")

  if (!bookName) {
    throw createError({
      statusCode: 400,
      statusMessage: "Book name is required",
    })
  }

  try {
    const books = await readJsonFile<Book[]>(getDataFileName("books"))
    const book = books.find((book) => book.code === bookName)

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
