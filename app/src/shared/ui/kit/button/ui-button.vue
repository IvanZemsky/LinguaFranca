<script setup lang="ts">
import "./button.css"

export type UiButtonProps = {
  as?: string
  variant?: "filled" | "ghost"
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary"
}

withDefaults(defineProps<UiButtonProps>(), {
  as: "button",
  variant: "filled",
  size: "md",
  color: "primary",
})

const slots = useSlots()

const onlyIcon = computed(() => {
  const defaultSlot = slots.default?.()
  if (!defaultSlot || defaultSlot.length === 0) return true
  return false
})
</script>

<template>
  <component
    :is="as"
    :class="`ui-button ${size} ${variant} ${color} ${
      onlyIcon ? 'only-icon' : ''
    }`"
  >
    <slot />
    <slot name="icon" />
  </component>
</template>
