export type BookId = string

export type Book = {
  id: BookId
  name: string
  /**
   * Illustration
   */
  img: string
  desc: string
  /**
   * Language-appropriate font for content such as lesson texts, quotes, catchphrases, etc.
   */
  specialFont: string
  details: {
    lessons: number
    words: number
    texts: number
    levels: [string, string]
  }
}

export type BookInfo = Book & {
  description: string | null
}

export type BookDescription = {
  id: string
  bookId: BookId
  text: string
}
