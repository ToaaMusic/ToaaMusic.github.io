<template>
  <div class="icon-card">
    <div class="icon" v-if="props.icon">
      <component :is="props.icon" />
    </div>
    <div class="icon" v-else>
      <slot name="icon" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
const props = defineProps<{
  icon?: Component
}>()
</script>

<style scoped>
.icon-card {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.icon {
  width: 1.2em;
  height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .icon {
    display: none;
  }
}
</style>
