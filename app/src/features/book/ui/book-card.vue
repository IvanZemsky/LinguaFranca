<script setup lang="ts">
import { NuxtLink } from "#components"
import type { Book } from "~/src/entities/book"

type Props = {
  data: Book
  link: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="link" class="card">
    <img class="card-img" :src="data.img" alt="" />
    <h2 class="card-title">
      {{ data.name }}
    </h2>
    <!-- <div class="card-desc">
      <div class="card-desc-item">{{ data.details.lessons }} уроков</div>
      <div class="card-desc-item">{{ data.details.words }} слов</div>
      <div class="card-desc-item">{{ data.details.texts }} текстов</div>
      <div class="card-desc-item">
        {{ data.details.levels.join(" — ") }} уровни
      </div>
    </div> -->
  </NuxtLink>
</template>

<style scoped>
.card {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 1rem;
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
    /* .card-desc {
      opacity: 1;
    } */
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

/* .card-desc {
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
} */
</style>
