<script setup lang="ts">
import type { LessonList } from "~/src/entities/lesson"
import LessonListItem from "./lesson-list-item.vue"

type Props = {
  data: LessonList
}

const { data } = defineProps<Props>()
</script>

<template>
  <div class="wrap">
    <p class="list-title">
      {{ data.title }}
    </p>

    <component :is="data.variant" class="list">
      <LessonListItem
        v-for="(item, i) in data.items"
        :key="`${item.text}${i}`"
        :data="item"
        :number="i + 1"
        :parent-list-variant="data.variant"
      />
    </component>
  </div>
</template>

<style scoped>
.wrap {
  margin-bottom: 20px;
}

.list-title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
