export default defineEventHandler((event) => {
    const bookName = getRouterParam(event, "name")
    return "Book " + bookName
})