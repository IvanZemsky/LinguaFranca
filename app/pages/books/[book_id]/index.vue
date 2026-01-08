<script setup lang="ts">
import { useFetchBookById } from "~/src/entities/book"
import { useBookPageMeta } from "~/src/pages/book"
import { UiNuxtBtnLink } from "~/src/shared/ui"

const bookId = useRoute().params.book_id
const { data: book, error, pending } = useFetchBookById(bookId as string)

useBookPageMeta(book, pending, error)
</script>

<template>
  <div class="wrap">
    <p v-if="pending">Загрузка</p>

    <template v-else-if="error">
      <p v-if="error.statusCode === 404">Книга не найдена</p>
      <p v-else>Ошибка</p>
    </template>

    <UiNuxtBtnLink v-if="!pending && book" :to="`/books/${book.id}/lessons`">
      Список уроков
    </UiNuxtBtnLink>
  </div>
</template>

<style scoped>
.wrap {
  padding: 1rem;
}
</style>
