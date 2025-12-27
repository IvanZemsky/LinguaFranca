<script setup lang="ts">
type Props = {
  title: string
  text: string
}
const { title, text } = defineProps<Props>()
</script>

<template>
  <div class="wrap">
    <header class="header">
      <div class="icon">i</div>

      <p>
        {{ title }}
      </p>
    </header>

    <p class="text">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;
  border: 1px solid var(--c-secondary);
  border-radius: 6px;
}
.header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.25rem;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 2.25rem;
  height: 2.25rem;
  font-family: Lora;
  background-color: var(--c-secondary);
  color: var(--c-secondary-contrast);
  font-weight: bold;
  border-radius: 50%;
}
.text {
  font-size: 0.875rem;
}
</style>
