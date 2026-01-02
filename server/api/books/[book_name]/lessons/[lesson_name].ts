export default defineEventHandler((event) => {
    const bookName = getRouterParam(event, "book_name")
    const lessonName = getRouterParam(event, "lesson_name")
    return "Lesson for book " + bookName + " - " + lessonName
})