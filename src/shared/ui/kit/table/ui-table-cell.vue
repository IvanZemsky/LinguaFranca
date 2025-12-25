<script setup lang="ts">
import { useInject } from "../../../lib/vue"
import type { UiTableProvide } from "./ui-table.vue"

const { variant: tableVariant } = useInject<UiTableProvide>("ui-table")
</script>

<template>
  <td
    :class="[
      'flex items-center justify-center shrink bg-blue-50/40 border-blue-100 [&[scope=row]]:font-bold [&[scope=row]]:border-r',
      {
        '[&:not(:last-child)]:border-r': tableVariant === 'vertical',
      },
    ]"
  >
    <slot />
  </td>
</template>
