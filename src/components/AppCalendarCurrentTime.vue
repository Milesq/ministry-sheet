<template>
  <div class="current-time">
    <div class="circle"></div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/app-calendar.scss';

.current-time {
  grid-column: 4;
  grid-row: 4;
  border-top: 2px solid $current-time-color;
  position: relative;
  top: calc(50% - 1px);
}

.circle {
  width: 12px;
  height: 12px;
  border: 1px solid $current-time-color;
  border-radius: 50%;
  background: $current-time-color;
  position: relative;
  top: -6px;
  left: -6px;
}
</style>
