import { BookDescription, BookInfo, type Book } from "~/src/entities/book"
import { BASE_API_URL } from "~~/server/config"

export default defineEventHandler(async (event) => {
  const bookId = getRouterParam(event, "book_id")
  if (!bookId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Book id is required",
    })
  }

  try {
    const response = await fetch(
      getDataFileName(BASE_API_URL, "books", "list"),
    )
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch books: ${response.statusText}`,
      })
    }

    const books: Book[] = await response.json()

    const book = books.find((book) => book.id === bookId)
    if (!book) {
      throw createError({
        statusCode: 404,
        statusMessage: "Book not found",
      })
    }

    const bookInfo: BookInfo = { ...book, description: null }

    const bookDescResponse = await fetch(
      getDataFileName(BASE_API_URL, "books", bookId, "description"),
    )
    if (bookDescResponse.ok) {
      const bookDesc: BookDescription = await bookDescResponse.json()
      bookInfo.description = bookDesc.text
    }

    return bookInfo
    // need to add type
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
