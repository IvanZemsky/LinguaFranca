export default defineEventHandler((event) => {
    const bookName = getRouterParam(event, "name")
    const lessonName = getRouterParam(event, "name")
    return "Lesson for book " + bookName + " - " + lessonName
})