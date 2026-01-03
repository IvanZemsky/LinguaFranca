import { bookService } from "./service"

export function useFetchBooks() {
    return useAsyncData("books", () => bookService.fetchBooks())
}

export function useFetchBookById(id: string) {
    return useAsyncData(`book-${id}`, () => bookService.fetchBookById(id))
}