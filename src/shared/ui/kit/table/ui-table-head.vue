<template>
  <thead
    :class="[
      'flex shrink font-bold [&:not(:last-child)]:border-b border-blue-100 [&>td]:py-[6px] [&>td]:px-[12px] [&>td]:min-w-[76px] [&>td]:border-blue-100 [&>td:not(:last-child)]:border-r',
    ]"
  >
    <slot />
  </thead>
</template>
