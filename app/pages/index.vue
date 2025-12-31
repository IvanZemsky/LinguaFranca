<script setup lang="ts">
import { UiNuxtLink } from "~/src/shared/ui"
</script>

<template>
  <div class="page">
    <section class="intro">
      <div class="intro-content">
        <h1 class="intro-title appearing-1">LinguaFranca</h1>
        <div class="intro-desc appearing-2">
          Сборник бесплатных самоучителей
          <br />
          Полезные материалы, тексты, шпаргалки, ссылки
        </div>
        <UiNuxtLink class="intro-start-link appearing-3" to="/books">
          Начать
        </UiNuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro {
  position: relative;
  height: 100%;
  background: center / cover no-repeat
    url(../src/shared/assets/images/landing-hero.jpg);
  padding: 20px;
}
.intro::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 2;
  color: #fff;
  gap: 1.5rem;
  text-align: center;
}
.intro-title {
  font-size: 3rem;
  font-weight: 700;
  font-family: Lora;
}
.intro-desc {
  font-family: Lora;
  font-size: 1.5rem;
}
:deep(.ui-button.md.intro-start-link) {
  padding: 1.25rem 2rem;
  min-width: 184px;
}
.appearing-1 {
  opacity: 0;
  animation: appearing 0.8s ease-in-out 0.1s forwards;
}
.appearing-2 {
  opacity: 0;
  animation: appearing 0.8s ease-in-out 0.3s forwards;
}
.appearing-3 {
  opacity: 0;
  animation: appearing 0.8s ease-in-out 0.6s forwards;
}

@keyframes appearing {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
