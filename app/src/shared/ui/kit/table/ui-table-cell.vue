<script setup lang="ts">
import { useInject } from "../../../lib/vue"
import type { UiTableProvide } from "./ui-table.vue"

const { variant: tableVariant } = useInject<UiTableProvide>("ui-table")
</script>

<template>
  <td
    :class="[
      'ui-table-cell',
      {
        'ui-table-cell-vertical':
          tableVariant === 'vertical' || tableVariant === 'headerless',
      },
    ]"
  >
    <slot />
  </td>
</template>
