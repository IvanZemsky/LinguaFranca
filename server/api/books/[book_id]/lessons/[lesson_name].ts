import type { Lesson } from "~~/app/src/entities/lesson"
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
    const lesson = await retrieveDataFromStorage<Lesson>(
      getDataFileName("lessons", bookId, lessonName)
    )
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
