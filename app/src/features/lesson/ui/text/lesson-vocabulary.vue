<script setup lang="ts">
import { UiButton } from "~/src/shared/ui"
import { ArrowBottomIcon } from "~/src/shared/ui/icons"
import {
  computed,
  ref,
  useTemplateRef,
  watchEffect,
  type CSSProperties,
} from "vue"

type Props = {
  data: {
    word: string
    translation: string
  }[]
}

const { data } = defineProps<Props>()

const isOpen = ref(false)

const initialStyle = computed<CSSProperties>(() => {
  if (isOpen.value) {
    return { maxHeight: `${vocabularyListRef.value?.scrollHeight}px` }
  }
  return { maxHeight: "0" }
})

const vocabularyListRef = useTemplateRef<HTMLUListElement>("vocabulary-list")

watchEffect(() => {
  if (!vocabularyListRef.value) return
  if (isOpen.value) {
    vocabularyListRef.value.style.maxHeight = getMaxHeight()
  } else {
    vocabularyListRef.value.style.maxHeight = "0"
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
      <ArrowBottomIcon
        :class="['arrow-icon', { 'arrow-icon--open': isOpen }]"
      />
    </UiButton>

    <div ref="vocabulary-list" class="wrap" :style="initialStyle">
      <ul class="list">
        <li
          v-for="translation in data"
          :key="translation.word"
          class="list-item"
        >
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

<style scoped>
.arrow-icon {
  transition: transform 300ms ease-in-out;
}
.arrow-icon--open {
  transform: rotate(180deg);
}
.wrap {
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
}

.list {
  columns: 2;
  gap: 1.5rem;
  padding-top: 0.75rem;
}

.list-item {
  position: relative;
  padding-left: 0.875rem;
  margin-bottom: 0.5rem;
}

.list-item::before {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: var(--c-secondary);
  border-radius: 50%;
}
</style>
