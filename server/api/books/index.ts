import { Book } from "~/src/entities/book"
import { retrieveDataFromStorage, getDataFileName } from "~~/server/utils/json"

export default defineEventHandler(async () => {
  try {
    const books = await retrieveDataFromStorage<Book[]>(
      getDataFileName("books")
    )
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
