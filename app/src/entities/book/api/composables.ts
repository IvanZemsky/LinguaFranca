import { bookService } from "./service"

export function useFetchBooks() {
    return useAsyncData("books", () => bookService.fetchBooks())
}

export function useFetchBookByName(name: string) {
    return useAsyncData(`book-${name}`, () => bookService.fetchBookByName(name))
}