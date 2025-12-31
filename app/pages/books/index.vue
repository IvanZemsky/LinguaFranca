<script setup lang="ts">
import { useFetchBooks } from "~/src/entities/book"
import { BookCard } from "~/src/features/book"

const { data: books } = useFetchBooks()
</script>

<template>
  <section class="books">
    <div class="content wrapper">
      <h1 class="title">Самоучители</h1>
      <div class="cards">
        <BookCard
          v-for="book in books"
          :key="book.id"
          :data="book"
          :link="`/books/${book.code}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.books {
  margin-top: 24px;
  padding-bottom: 24px;
}
.wrapper {
  padding: 0 1.5rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}
.title {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
