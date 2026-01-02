const DATA_PATH = "server/data"

export function getDataFileName(...strings: string[]) {
    return [DATA_PATH, ...strings].join('/') + ".json"
}