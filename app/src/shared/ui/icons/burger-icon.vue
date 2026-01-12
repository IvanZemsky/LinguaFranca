<template>
  <div class="ui-burger-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.ui-burger-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ui-burger-icon > span {
  display: block;
  width: 20px;
  height: 2px;
  background-color: currentColor;
}
</style>
