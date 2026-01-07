import type { NuxtError } from "#app"

type ResolveTitleOptions = {
  isSuccess: boolean
  isPending: boolean
  error: NuxtError<unknown> | undefined
  values: {
    success: string
    pending: string
    error: string
    notFoundError: string
  }
}

export function resolveTitle({
  isSuccess,
  isPending,
  error,
  values,
}: ResolveTitleOptions) {
  if (isPending) {
    return values.pending
  }
  if (error) {
    if (error?.statusCode === 404) {
      return values.notFoundError
    } else {
      return values.error
    }
  }
  if (isSuccess) {
    return values.success
  }
}
