import { Book } from "~/src/entities/book"
import { BASE_API_URL } from "~~/server/config"
import { getDataFileName } from "~~/server/utils/json"

export default defineEventHandler(async () => {
  try {
    const response = await fetch(getDataFileName(BASE_API_URL, "books"))
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch books: ${response.statusText}`,
      })
    }

    const books: Book[] = await response.json()
    return books
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
