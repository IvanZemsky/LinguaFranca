import { readFile } from "fs/promises"
import { resolve } from "path"

export async function readJsonFile<T>(relativePath: string): Promise<T> {
  try {
    if (process.env.NODE_ENV !== "production") {
      const rootDir = process.cwd()
      const fullPath = resolve(rootDir, relativePath)
      return JSON.parse(await readFile(fullPath, "utf-8"))
    }

    const fullPath = resolve(
      process.cwd(),
      ".vercel/output/functions",
      relativePath
    )

    try {
      return JSON.parse(await readFile(fullPath, "utf-8"))
    } catch {
      const module = await import(relativePath)
      return module.default || module
    }
  } catch (error) {
    console.error("Error reading JSON file:", error)
    throw error
  }
}
