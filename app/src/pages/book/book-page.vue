<script setup lang="ts">
import { useFetchBookById } from "~/src/entities/book"
import { useBookPageMeta } from "./model"
import { UiFetchingBlock, UiWrapper } from "~/src/shared/ui"
import BookContent from "./book-content.vue"

const bookId = useRoute().params.book_id
const { data: book, error, pending } = useFetchBookById(bookId as string)

useBookPageMeta(book, pending, error)
</script>

<template>
  <UiWrapper class="wrap">
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
      <template #default-error>
        <p>Ошибка</p>
      </template>

      <template #content="{ data }">
        <BookContent :data="data" />
      </template>
    </UiFetchingBlock>
  </UiWrapper>
</template>

<style scoped>
.wrap {
  max-width: 900px;
  width: 100%;
  margin: 24px auto 0 auto;
  padding: 0 25px 25px 25px;
}

@media screen and (max-width: 500px) {
  .wrap {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
