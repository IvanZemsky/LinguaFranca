import type { NuxtError } from "#app"
import type { BookInfo } from "~/src/entities/book"
import { resolveTitle } from "~/src/shared/lib"

export function useBookPageMeta(
  book: Ref<BookInfo | undefined>,
  pending: Ref<boolean>,
  error: Ref<NuxtError<unknown> | undefined>,
) {
  useHead({
    title: () =>
      resolveTitle({
        isPending: pending.value,
        isSuccess: !!book.value,
        error: error.value,
        values: {
          success: "Самоучитель языка - " + book.value?.name || "Ошибка",
          pending: "Загрузка",
          error: "Ошибка",
          notFoundError: "Ничего не найдено",
        },
      }),
    meta: [
      {
        property: "og:title",
        content: () => book.value?.name || "Ничего не найдено",
      },
      {
        property: "og:description",
        content: () =>
          "Самоучитель языка - " + book.value?.name || "Ничего не найдено",
      },
      {
        name: "description",
        content: () =>
          "Самоучитель языка - " + book.value?.name || "Ничего не найдено",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:locale",
        content: "ru_RU",
      },
      {
        property: "og:site_name",
        content: "Языковой курс Lingua Franca",
      },
    ],
  })
}
