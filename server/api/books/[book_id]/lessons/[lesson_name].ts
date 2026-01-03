import { getDataFileName } from "~~/server/config"
import { readJsonFile } from "~~/server/utils/json"
import type { Lesson } from "~~/app/src/entities/lesson"

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
    const lesson = await readJsonFile<Lesson>(getDataFileName("lessons", bookId, lessonName))
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