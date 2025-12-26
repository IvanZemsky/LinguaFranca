<script setup lang="ts">
import { getButtonClassNames } from "../styles/button"

export type UiButtonProps = {
  as?: string
  variant?: "filled" | "ghost"
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary"
  weight?: string
}

const props = withDefaults(defineProps<UiButtonProps>(), {
  as: "button",
  variant: "filled",
  size: "md",
  color: "primary",
  weight: "400",
  rounded: false,
})

const className = getButtonClassNames(props)
</script>

<template>
  <component :is="as" :class="className">
    <slot />
    <slot name="end-icon" />
  </component>
</template>
