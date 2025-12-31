import { readJsonFile } from "~~/server/utils/json"

export default defineEventHandler(async () => {
    try {
       return await readJsonFile("server/data/books.json")
    } catch (error) {
        return "Error"
    }
})