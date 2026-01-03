import { getDataFileName } from "~~/server/config"
import { readJsonFile } from "~~/server/utils/json"

export default defineEventHandler(async () => {
  try {
    return await readJsonFile(getDataFileName("books"))
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
