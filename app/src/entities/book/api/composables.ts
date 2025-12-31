import { bookService } from "./service"

export function useFetchBooks() {
    return useAsyncData("books", () => bookService.fetchBooks())
}