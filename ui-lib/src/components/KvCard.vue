<template>
  <div class="kv-card" :class="`kv-card--${props.direction}`">
    <div class="kv-card__key">
      <slot name="key" />
    </div>
    <div class="kv-card__value">
      <slot name="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** 排布方向：horizontal = 左右，vertical = 上下 */
    direction?: 'horizontal' | 'vertical'
  }>(),
  {
    direction: 'horizontal'
  }
)
</script>

<style scoped>
.kv-card {
  display: flex;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  gap: 0.5rem;
  font-size: 0.9rem;
}

/* 左右排布（默认） */
.kv-card--horizontal {
  flex-direction: row;
  align-items: center;
}

/* 上下排布 */
.kv-card--vertical {
  flex-direction: column;
  align-items: flex-start;
}

.kv-card__key {
  /* 左右排布时 key 固定在左边窄一点 */
  min-width: 5rem;
}

.kv-card--vertical .kv-card__key {
  min-width: auto;
}

.kv-card__value {
  flex: 1;
  word-break: break-word;
}
</style>
