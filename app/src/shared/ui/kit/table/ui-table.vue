<script setup lang="ts">
import "./table.css"
export type UiTableProps = {
  variant?: "vertical" | "horizontal" | "intersecting" | "headerless"
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
  <div class="ui-table-container">
    <table class="ui-table">
      <slot name="head" />
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
