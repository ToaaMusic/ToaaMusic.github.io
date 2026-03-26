<template>
  <div class="icon-card">
    <div class="icon" v-if="icon">
      <component :is="icon" />
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

const props = defineProps<{
  icon?: any
}>()
</script>

<style scoped>
.icon-card {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

/* 图标样式，按需调大小 */
.icon {
  width: 1.2em;
  height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式隐藏图标 */
@media (max-width: 600px) {
  .icon {
    display: none;
  }
}
</style>
