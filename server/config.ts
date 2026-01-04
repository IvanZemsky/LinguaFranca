import { resolve } from "path"

const DATA_PATH = "server/data"

export function getDataFileName(...strings: string[]) {
  return [DATA_PATH, ...strings].join("/") + ".json"
}

export async function loadDataFile(...strings: string[]) {
  const fileName = strings.join("/")

  const module = await import(`~~/server/data/${fileName}.json`)
  console.log(module)
  return module.default || module
}
