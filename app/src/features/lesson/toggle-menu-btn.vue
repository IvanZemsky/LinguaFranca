<script setup lang="ts">
import { UiButton } from "~/src/shared/ui"
import { BurgerIcon } from "~/src/shared/ui/icons"

type Props = {
  variant?: "ghost" | "filled"
  size?: "sm" | "md" | "lg"
}

withDefaults(defineProps<Props>(), {
  variant: "ghost",
  size: "md",
})
</script>

<template>
  <UiButton :size="size" :variant="variant" color="secondary">
    <template #icon>
      <BurgerIcon />
    </template>
  </UiButton>
</template>
