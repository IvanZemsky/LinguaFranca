<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col p-4 gap-3 border border-blue-300 rounded-[5px]">
        <div class="flex items-center gap-2 font-medium text-xl">
            <div
                class="flex items-center justify-center font-philosopher text-2xl w-9 h-9 bg-blue-300 text-white font-bold rounded-full">
                i
            </div>
            <slot name="header" />
        </div>
        <slot />
    </div>
</template>