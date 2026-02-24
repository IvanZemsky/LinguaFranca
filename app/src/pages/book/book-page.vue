<script setup lang="ts">
import { useFetchBookById } from "~/src/entities/book"
import { useBookPageMeta } from "./model"
import { UiNuxtBtnLink, UiFetchingBlock } from "~/src/shared/ui"

const bookId = useRoute().params.book_id
const { data: book, error, pending } = useFetchBookById(bookId as string)

useBookPageMeta(book, pending, error)
</script>

<template>
  <div class="wrap">
    <UiFetchingBlock
      :is-pending="pending"
      :error="error"
      :is-not-found="error?.statusCode === 404"
      :data="book"
    >
      <template #pending>
        <p>Загрузка</p>
      </template>
      <template #not-found>
        <p>Книга не найдена</p>
      </template>
      <template #default-error><p>Ошибка</p></template>

      <template #content>
        <UiNuxtBtnLink
          v-if="!pending && book"
          :to="`/books/${book.id}/lessons`"
        >
          Список уроков
        </UiNuxtBtnLink>
      </template>
    </UiFetchingBlock>
  </div>
</template>

<style scoped>
.wrap {
  padding: 1rem;
}
</style>
