<script setup lang="ts">
import type { LessonListItem } from "~/src/entities/lesson"

type Props = {
  data: LessonListItem
}

const { data } = defineProps<Props>()
</script>

<template>
  <li class="item">
    <span class="item-text">{{ data.text }}</span>

    <template v-if="data.items?.length">
      <component
        :is="data.variant"
        v-if="data.variant !== 'li'"
        class="nested-list"
      >
        <LessonListItem
          v-for="(item, i) in data.items"
          :key="`${item.text}${i}`"
          :data="item"
        />
      </component>
    </template>
  </li>
</template>

<style scoped>
.item {
  padding: 10px;
}

.nested-list {
  margin-left: 20px;
  margin-top: 5px;
}
</style>
