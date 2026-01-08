export function useBooksPageMeta() {
  useHead({
    title: "Самоучители",
    meta: [
      {
        property: "og:title",
        content: "Самоучители",
      },
      {
        property: "og:description",
        content:
          "Самоучители языка - Сборник бесплатных уроков, текстов, шпаргалок и других материалов для изучения языков",
      },
      {
        name: "description",
        content:
          "Самоучители языка - Сборник бесплатных уроков, текстов, шпаргалок и других материалов для изучения языков",
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
