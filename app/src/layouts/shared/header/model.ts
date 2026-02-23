export type Link = {
  path: string
  text: string
}

export const lessonIds = ["latin"]

export type LinksType = {
  books: Link
  texts: Link
  cribs: Link
  useful: Link
}

export const HEADER_LINKS: LinksType = {
  books: {
    path: "/books",
    text: "Учебники",
  },
  texts: {
    path: "/texts",
    text: "Тексты",
  },
  cribs: {
    path: "/cribs",
    text: "Шпаргалки",
  },
  useful: {
    path: "/useful",
    text: "Полезные материалы",
  },
}
