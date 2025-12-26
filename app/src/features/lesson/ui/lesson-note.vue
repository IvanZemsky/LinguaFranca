<script setup lang="ts"></script>

<template>
  <div class="flex flex-col p-4 gap-3 border border-blue-300 rounded-[6px]">
    <div class="flex items-center gap-2 font-medium text-xl">
      <div
        class="flex items-center justify-center font-playfair text-2xl w-7 h-7 bg-blue-300 text-white font-bold rounded-full"
      >
        i
      </div>

      <p>
        <slot name="header" />
      </p>
    </div>

    <p class="font-playfair text-[14px]">
      <slot />
    </p>
  </div>
</template>
