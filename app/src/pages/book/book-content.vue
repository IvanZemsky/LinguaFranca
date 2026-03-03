<script setup lang="ts">
import type { BookInfo } from "~/src/entities/book";
import { UiNuxtBtnLink } from "~/src/shared/ui"
type Props = {
  data: NonNullable<BookInfo>
}

const { data } = defineProps<Props>()
</script>

<template>
  <h1 class="title">{{ data.name }}</h1>
  <p class="desc">
    {{ data.description }}
  </p>
  <div class="links">
    <UiNuxtBtnLink :to="`/books/${data.id}/lessons`">
      Список уроков
    </UiNuxtBtnLink>
    <UiNuxtBtnLink variant="ghost" :to="`/books/${data.id}/cribs`">
      Шпаргалки
    </UiNuxtBtnLink>
    <UiNuxtBtnLink variant="ghost" :to="`/books/${data.id}/texts`">
      Тексты
    </UiNuxtBtnLink>
    <UiNuxtBtnLink variant="ghost" :to="`/books/${data.id}/useful`">
      Полезные материалы
    </UiNuxtBtnLink>
  </div>
</template>

<style scoped>
.title {
  margin: 0 0 20px 0;
  font-size: 32px;
  font-weight: bold;
}
.desc {
  margin: 0 0 20px 0;
  font-size: 1rem;
  white-space: pre-line;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media screen and (max-width: 500px) {
  .title {
    font-size: 1.5rem;
  }
  .desc {
    font-size: 0.875rem;
  }
}
</style>
