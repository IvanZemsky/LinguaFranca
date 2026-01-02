export default defineEventHandler((event) => {
    const bookName = getRouterParam(event, "name")
    return "Lessons for book " + bookName
})