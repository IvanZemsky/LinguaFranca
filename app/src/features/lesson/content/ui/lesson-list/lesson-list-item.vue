<script setup lang="ts">
import type { LessonListItem } from "~/src/entities/lesson"

type Props = {
  data: LessonListItem
  parentListVariant: "ol" | "ul" | null
  number: number
}

const { data, parentListVariant } = defineProps<Props>()
</script>

<template>
  <li class="item">
    <span :class="`item-text ${parentListVariant}`">
      <template v-if="parentListVariant === 'ol'">{{ number }}.</template>
      {{ data.text }}
    </span>

    <template v-if="data.items?.length">
      <component :is="data.variant" class="nested">
        <LessonListItem
          v-for="(item, i) in data.items"
          :key="`${item.text}${i}`"
          :data="item"
          :number="i + 1"
          :parent-list-variant="data.variant === 'li' ? null : data.variant"
        />
      </component>
    </template>
  </li>
</template>

<style scoped>
.nested, .item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
}

.item{
  margin-left: 0.5rem;
}

.item-text, .item-text {
  position: relative;
  padding-left: 0.875rem;
}

.item-text.ul::before, .item-text.li::before {
  content: "";
  position: absolute;
  top: 7px;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: var(--c-secondary);
  border-radius: 50%;
}
</style>
