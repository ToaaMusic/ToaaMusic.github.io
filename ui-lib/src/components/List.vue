<!-- components/List.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import Loading from './Loading.vue';

const topItems = computed(() => props.items.filter(i => !!i.top))

const items = computed(() => props.items.filter(i => !i.top))

//加默认值防止为空
//const emit = defineEmits(['click-item'])
const emit = defineEmits<{
  (e: 'click-item', item: any): void
}>()

const props = withDefaults(defineProps<{
  items: any[]
  loading?: boolean
  itemKey?: (item: any) => string | number
}>(), {
  items: () => [],
  loading: false,
  itemKey: (item: any) => item.id ?? item.md_url ?? item.name ?? item.content ?? JSON.stringify(item)
})
</script>

<template>
  <div class="list">
    <slot name="loading" v-if="loading">
      <Loading/>
    </slot>
    <template v-else>
      <div v-if="items.length === 0">
        <slot name="empty">加载失败或者根本没有</slot>
      </div>
      <div v-if="topItems.length != 0" style="border-bottom: 2px solid #e8d5ff; margin-bottom: 1rem;">
        <Card
          v-for="item in topItems"
          :key="itemKey(item)"
          :data="item"
          @click="() => $emit('click-item', item)"
        />
      </div>
      <Card
        v-for="item in items"
        :key="itemKey(item)"
        :data="item"
        @click="() => $emit('click-item', item)"
      />
    </template>
  </div>
</template>
