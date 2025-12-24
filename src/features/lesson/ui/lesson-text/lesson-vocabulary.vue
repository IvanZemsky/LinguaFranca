<script setup lang="ts">
import { UiButton } from "@@/src/shared/ui"
import { ArrowBottomIcon } from "@@/src/shared/ui/icons"
import { ref, type CSSProperties } from 'vue'

type Props = {
    data: {
        word: string
        translation: string
    }[]
}

const { data } = defineProps<Props>()

const isOpen = ref(false)
const initialStyle = computed<CSSProperties>(() => {
    if (isOpen.value) return { maxHeight: `${vocabularyListRef.value?.scrollHeight}px` }
    return { maxHeight: '0' }
})
const vocabularyListRef = useTemplateRef<HTMLUListElement>("vocabulary-list")

const diskStyle = "before:content-[''] before:absolute before:top-[9px] before:left-0 before:w-[6px] before:h-[6px] before:bg-blue-300 before:rounded-full"

watchEffect(() => {
    if (!vocabularyListRef.value) return
    if (isOpen.value) {
        vocabularyListRef.value.style.maxHeight = getMaxHeight()
    } else {
        vocabularyListRef.value.style.maxHeight = '0'
    }
})

function toggle() {
    isOpen.value = !isOpen.value
}

function getMaxHeight() {
    if (!vocabularyListRef.value) return ""
    return `${vocabularyListRef.value.scrollHeight}px`
}
</script>

<template>
    <div>
        <UiButton size="sm" @click="toggle">
            Словарь
            <ArrowBottomIcon />
        </UiButton>

        <div ref="vocabulary-list" class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="initialStyle">
            <ul class="columns-2 gap-6 text-[16px] pt-3">
                <li v-for="translation in data" :key="translation.word"
                    :class="['relative pl-[14px] mb-2', diskStyle]">
                    <span class="font-semibold">
                        {{ translation.word }}
                    </span>
                    —
                    <span>{{ translation.translation }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>