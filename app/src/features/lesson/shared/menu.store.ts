export const useLessonMenuStore = defineStore("lesson-menu", () => {
    const isOpen = ref(true)

    function toggleMenu() {
        isOpen.value = !isOpen.value
    }

    watch(isOpen, () => {
        console.log(isOpen.value)
    })

    return { isOpen, toggleMenu }
})