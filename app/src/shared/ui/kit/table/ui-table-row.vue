<script setup lang="ts">
import { useInject } from "../../../lib/vue"
import type { UiTableProvide } from "./ui-table.vue"

const { variant: tableVariant } = useInject<UiTableProvide>("ui-table")
</script>

<template>
  <tr
    :class="[
      'ui-table-row',
      {
        bordered:
          tableVariant === 'horizontal' ||
          tableVariant === 'intersecting' ||
          tableVariant === 'headerless',
      },
    ]"
  >
    <slot />
  </tr>
</template>
