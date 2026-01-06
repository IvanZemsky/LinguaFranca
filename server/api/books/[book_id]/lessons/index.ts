import type { Section } from "~~/app/src/entities/lesson"
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
    const lessons = await retrieveDataFromStorage<Section[]>(
      getDataFileName("lessons", bookId, "list")
    )
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
