<script setup lang="ts">
type Props = {
  variants?: "large" | "normal"
}

withDefaults(defineProps<Props>(), {
  variants: "normal",
})
</script>

<template>
  <div :class="`ui-wrapper ui-wrapper--${variants}`">
    <slot />
  </div>
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

.ui-wrapper--normal {
  max-width: 1360px;
}
</style>
