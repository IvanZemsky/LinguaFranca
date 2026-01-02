<script setup lang="ts">
import { useFetchBookByName } from "~/src/entities/book"
import { UiNuxtBtnLink } from "~/src/shared/ui"

const bookName = useRoute().params.book_name
const { data: book, error, pending } = useFetchBookByName(bookName as string)
</script>

<template>
  <div class="wrap">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <UiNuxtBtnLink v-if="!pending && book" :to="`/books/${book.code}/lessons`">
      Список уроков
    </UiNuxtBtnLink>
  </div>
</template>

<style scoped>
.wrap {
  padding: 1rem;
}
</style>
