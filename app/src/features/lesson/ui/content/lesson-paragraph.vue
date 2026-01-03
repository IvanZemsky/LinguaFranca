<script setup lang="ts">
type Props = {
    text: string
}

const {text} = defineProps<Props>()
</script>

<template>
    <p class="paragraph">{{ text }}</p>
</template>

<style scoped>
.paragraph{
    font-size: 4rem;
}
</style>
