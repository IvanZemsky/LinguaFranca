export type { Book, BookId, BookDescription, BookInfo } from "./model"

export { bookService } from "./api/service"
export { useFetchBooks, useFetchBookById } from "./api/composables"
