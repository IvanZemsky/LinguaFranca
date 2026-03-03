<script setup lang="ts">
type Props = {
  variants?: "large" | "normal"
  as?: string
}

withDefaults(defineProps<Props>(), {
  variants: "normal",
  as: "div",
})
</script>

<template>
  <component :is="as" :class="`ui-wrapper ui-wrapper--${variants}`">
    <slot />
  </component>
</template>

<style>
.ui-wrapper {
  width: 100%;
  margin: 1.5rem auto 0 auto;
  padding: 0 25px;
}
.ui-wrapper--normal {
  max-width: 900px;
}

.ui-wrapper--large {
  max-width: 1360px;
}
</style>
