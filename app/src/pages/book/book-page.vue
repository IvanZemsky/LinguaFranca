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
      <template #default-error>
        <p>Ошибка</p>
      </template>

      <template #content="{ data }">
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
          <UiNuxtBtnLink variant="ghost" :to="`/books/${data.id}/textx`">
            Тексты
          </UiNuxtBtnLink>
          <UiNuxtBtnLink variant="ghost" :to="`/books/${data.id}/useful`">
            Полезные материалы
          </UiNuxtBtnLink>
        </div>
      </template>
    </UiFetchingBlock>
  </div>
</template>

<style scoped>
.wrap {
  max-width: 900px;
  width: 100%;
  margin: 24px auto 0 auto;
  padding: 0 25px 25px 25px;
}
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
  .wrap {
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
