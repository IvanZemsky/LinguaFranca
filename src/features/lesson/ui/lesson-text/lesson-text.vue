<script setup lang="ts">
import LessonVocabulary from "./lesson-vocabulary.vue"
import type { Book } from "@@/src/entities/book"

type Props = {
    data: Book
}

const props = defineProps<Props>()
const { title, translation, text, vocabulary } = props.data
</script>

<template>
    <div class="flex flex-col items-start gap-3 border border-blue-100 rounded-[6px] p-4 bg-blue-50/40">
        <header class="flex items-center gap-2">
            <h3 class="font-lora text-2xl font-bold">{{ title }}</h3>
            <p class="text-xs text-gray-400">({{ translation }})</p>
        </header>

        <p class="font-lora text-[16px] mt-[-6px]">
            {{ text }}
        </p>

        <LessonVocabulary :data="vocabulary" />
    </div>
</template>