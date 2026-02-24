<script setup lang="ts" generic="T">
import type { NuxtError } from "#app"

type Props = {
  isPending: boolean
  error: NuxtError<unknown> | undefined
  isNotFound: boolean
  data: T | undefined
}

defineProps<Props>()
</script>

<template>
  <slot v-if="isPending" name="pending" />

  <template v-else-if="error">
    <slot v-if="isNotFound" name="not-found" />
    <slot v-else name="default-error" />
  </template>

  <slot v-if="!isPending && data" name="content" :data="data" />
</template>
