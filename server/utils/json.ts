const DATA_PATH = "assets:server"

export async function retrieveDataFromStorage<T>(path: string) {
  return await useStorage(DATA_PATH).getItem<T>(path)
}

export function getDataFileName(...strings: string[]) {
  return [...strings].join("/") + ".json"
}
