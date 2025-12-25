<script setup lang="ts">
import { UiTable, UiTableCell, UiTableRow, UiTableHead } from "~~/src/shared/ui"

const data = {}
</script>

<template>
  <div class="p-4 flex gap-5 items-start">
    <UiTable>
      <UiTableHead>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableHead>
      <UiTableRow>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
      <UiTableRow>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
    </UiTable>

    <UiTable variant="horizontal">
      <UiTableRow>
        <UiTableCell scope="row">Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
      <UiTableRow>
        <UiTableCell scope="row">Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
      <UiTableRow>
        <UiTableCell scope="row">Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
    </UiTable>

    <UiTable variant="intersecting">
      <UiTableHead>
        <UiTableCell/>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableHead>
      <UiTableRow>
        <UiTableCell scope="row">Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
      <UiTableRow>
        <UiTableCell scope="row">Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
        <UiTableCell>Text</UiTableCell>
      </UiTableRow>
    </UiTable>
  </div>
</template>
