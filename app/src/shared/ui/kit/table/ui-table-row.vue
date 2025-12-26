<script setup lang="ts">
import { useInject } from "../../../lib/vue"
import type { UiTableProvide } from "./ui-table.vue"

const { variant: tableVariant } = useInject<UiTableProvide>("ui-table")

</script>

<template>
  <tr
    :class="[
      'flex shrink [&>td]:p-[12px] [&>td]:min-w-[76px]',
      {
        '[&:not(:last-child)]:border-b border-blue-100':
          tableVariant === 'horizontal' || tableVariant === 'intersecting',
      },
    ]"
  >
    <slot />
  </tr>
</template>
