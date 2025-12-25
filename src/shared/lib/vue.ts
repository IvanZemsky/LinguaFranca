import { inject } from "vue"

export function useInject<T>(key: string) {
  const injectedData = inject<T>(key)

  if (!injectedData) {
    throw new Error(`${key} is not provided`)
  }

  return injectedData
}
