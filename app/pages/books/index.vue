<script setup lang="ts">
import { NuxtLink } from "#components"
import PlaceholderImage from "~/src/shared/assets/images/landing-hero.jpg"

const books: {
  id: string
  name: string
  img: string
  details: {
    lessons: number
    words: number
    texts: number
    levels: [string, string]
  }
}[] = [
  {
    id: "1",
    name: "Английский",
    img: PlaceholderImage,
    details: {
      lessons: 120,
      words: 3500,
      texts: 50,
      levels: ["A1", "A2"],
    },
  },
  {
    id: "2",
    name: "Испанский",
    img: PlaceholderImage,
    details: {
      lessons: 120,
      words: 3500,
      texts: 50,
      levels: ["A1", "A2"],
    },
  },
  {
    id: "3",
    name: "Латынь",
    img: PlaceholderImage,
    details: {
      lessons: 120,
      words: 3500,
      texts: 50,
      levels: ["A1", "A2"],
    },
  },
  {
    id: "4",
    name: "Скоро...",
    img: PlaceholderImage,
    details: {
      lessons: 0,
      words: 0,
      texts: 0,
      levels: ["", ""],
    },
  },
]
</script>

<template>
  <section class="books">
    <div class="content wrapper">
      <h1 class="title">Самоучители</h1>
      <div class="cards">
        <NuxtLink
          :to="`/books/${book.id}/lessons`"
          class="card"
          v-for="book in books"
          :key="book.id"
        >
          <img class="card-img" :src="book.img" alt="" />
          <h2 class="card-title">
            {{ book.name }}
          </h2>
          <div class="card-desc">
            <div class="card-desc-item">{{ book.details.lessons }} уроков</div>
            <div class="card-desc-item">{{ book.details.words }} слов</div>
            <div class="card-desc-item">{{ book.details.texts }} текстов</div>
            <div class="card-desc-item">
              {{ book.details.levels.join(" — ") }} уровни
            </div>
          </div>
        </NuxtLink>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}
.title {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.card {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  color: #fff;
  transition: box-shadow 0.15s ease-in-out;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0 -120px 90px 0px rgba(0, 0, 0, 0) inset;
  }

  &:hover::after {
    box-shadow: 0 -120px 90px 0px rgba(0, 0, 0, 0.35) inset;
  }

  &:hover {
    .card-title {
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
    }
    .card-desc {
      opacity: 1;
    }
  }
}

.card-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 36px;
  text-align: center;
  transition: text-shadow 0.3s ease-in-out;
}

.card-desc {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  width: 100%;
  padding: 20px;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card-desc-item {
  &:nth-child(1),
  &:nth-child(3) {
    text-align: right;
  }
}
</style>
