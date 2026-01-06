<script setup lang="ts">

import type { LessonContent } from "~/src/entities/lesson";
import { LESSON_CONTENT_TYPES } from "../../model/content"

type Props = {
  data: LessonContent
}

const { data } = defineProps<Props>()
</script>

<template>
  <component :is="LESSON_CONTENT_TYPES[data.type]" :data="data" />
</template>
