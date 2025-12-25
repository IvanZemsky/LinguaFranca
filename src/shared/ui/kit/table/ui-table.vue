<script setup lang="ts">
export type UiTableProps = {
  variant?: "vertical" | "horizontal" | "intersecting"
}

export type UiTableProvide = {
  variant: UiTableProps["variant"]
}

const props = withDefaults(defineProps<UiTableProps>(), {
  variant: "vertical",
})

const { variant } = props

provide("ui-table", { variant })
</script>

<template>
  <div
    class="text-[14px] bg-blue-50/40 border border-blue-100 rounded-[12px] overflow-auto"
  >
    <table class="shrink w-full">
      <slot />
    </table>
  </div>
</template>
