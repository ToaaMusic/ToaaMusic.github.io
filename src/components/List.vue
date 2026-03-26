<!-- components/List.vue -->
<template>
  <div class="list">
    <slot name="loading" v-if="loading">
      <Loading />
    </slot>
    <template v-else>
      <div v-if="items.length === 0">
        <slot name="empty">加载失败</slot>
      </div>
      <div v-if="topItems.length != 0" style="border-bottom: 2px solid #e8d5ff; margin-bottom: 1rem;">
        <Card v-for="item in topItems" :key="itemKey(item)" :data="item" @click="() => $emit('click-item', item)" />
      </div>
      <Card v-for="item in items" :key="itemKey(item)" :data="item" @click="() => $emit('click-item', item)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import Loading from './Loading.vue';

const topItems = computed(() => props.items.filter(i => !!i.top))

const items = computed(() => props.items.filter(i => !i.top))

const emit = defineEmits(['click-item'])

const props = withDefaults(defineProps<{
  items: any[]
  loading?: boolean
  itemKey?: (item: any) => string | number
}>(), {
  items: () => [],
  loading: false,
  itemKey: (item: any) => item.md_url ?? item.id ?? item.name ?? item.content ?? JSON.stringify(item)
})
</script>