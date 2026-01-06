<script setup lang="ts">
import type { UiButtonProps } from "./ui-button.vue"
import { NuxtLink } from "#components"
import { useAttrs } from "vue"
import "./button.css"

withDefaults(defineProps<Omit<UiButtonProps, "as">>(), {
  variant: "filled",
  size: "md",
  color: "primary",
})

const attrs = useAttrs()

const slots = useSlots()

const onlyIcon = computed(() => {
  const defaultSlot = slots.default?.()
  if (!defaultSlot || defaultSlot.length === 0) return true
  return false
})
</script>

<template>
  <NuxtLink
    :class="`ui-button ${size} ${variant} ${color} ${
      onlyIcon ? 'only-icon' : ''
    }`"
    v-bind="attrs"
  >
    <slot />
    <slot name="icon" />
  </NuxtLink>
</template>
