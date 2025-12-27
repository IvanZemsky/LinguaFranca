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

</script>

<template>
  <component
    :is="as"
    :class="`ui-button ${size} ${variant} ${color}`"
  >
    <slot />
    <slot name="end-icon" />
  </component>
</template>
