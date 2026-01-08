import type { NuxtError } from "#app"
import type { Lesson } from "~/src/entities/lesson"
import { resolveTitle } from "~/src/shared/lib"

export function useLessonPageMeta(
  lesson: Ref<Lesson | undefined>,
  pending: Ref<boolean>,
  error: Ref<NuxtError<unknown> | undefined>
) {
  useHead({
    title: () =>
      resolveTitle({
        isPending: pending.value,
        isSuccess: !!lesson.value,
        error: error.value,
        values: {
          success: lesson.value?.title || "Ошибка",
          pending: "Загрузка",
          error: "Ошибка",
          notFoundError: "Ничего не найдено",
        },
      }),
    meta: [
      {
        property: "og:title",
        content: () => lesson.value?.title || "Урок языкового курса",
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
