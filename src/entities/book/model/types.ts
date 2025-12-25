export type BookID = string

export type Book = {
    id: BookID
    name: string
    description: string
    /**
     * Language-appropriate font for content such as lesson texts, quotes, catchphrases, etc.
     */
    specialFont: string
}