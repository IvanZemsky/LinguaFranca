export type BookId = string

export type Book = {
  id: BookId
  name: string
  /**
   * Illustration
   */
  img: string
  shortDesc: string // maybe remove
  desc: string
  /**
   * Language-appropriate font for content such as lesson texts, quotes, catchphrases, etc.
   */
  specialFont: string
}
