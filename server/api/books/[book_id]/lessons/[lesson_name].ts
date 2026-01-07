import type { Lesson } from "~~/app/src/entities/lesson"
import { BASE_API_URL } from "~~/server/config"
import { getDataFileName, retrieveDataFromStorage } from "~~/server/utils/json"

export default defineEventHandler(async (event) => {
  const bookId = getRouterParam(event, "book_id")
  const lessonName = getRouterParam(event, "lesson_name")

  if (!bookId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Book name is required",
    })
  }

  if (!lessonName) {
    throw createError({
      statusCode: 400,
      statusMessage: "Lesson name is required",
    })
  }

  try {
    const response = await fetch(
      getDataFileName(BASE_API_URL, "lessons", bookId, lessonName)
    )
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch lesson: ${response.statusText}`,
      })
    }

    const lesson = await response.json()
    return lesson
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
