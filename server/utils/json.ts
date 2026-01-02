import { readFile } from "fs/promises"
import { resolve } from "path"

export async function readJsonFile<T>(relativePath: string): Promise<T> {
  const rootDir = process.cwd()
  const fullPath = resolve(rootDir, relativePath)
  return JSON.parse(await readFile(fullPath, "utf-8"))
}
