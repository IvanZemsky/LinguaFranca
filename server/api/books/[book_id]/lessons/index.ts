import type { Section } from "~~/app/src/entities/lesson"
import { BASE_API_URL } from "~~/server/config"
import { getDataFileName, retrieveDataFromStorage } from "~~/server/utils/json"

export default defineEventHandler(async (event) => {
  const bookId = getRouterParam(event, "book_id")

  if (!bookId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Book name is required",
    })
  }

  try {
    const response = await fetch(
      getDataFileName(BASE_API_URL, "lessons", bookId, "list")
    )
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch lessons: ${response.statusText}`,
      })
    }

    const lessons = await response.json()
    return lessons
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
