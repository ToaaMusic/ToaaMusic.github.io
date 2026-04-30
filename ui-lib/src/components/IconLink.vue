<template>
  <Link class="svgbtn" :href="props.href" type="external" target="_blank">
    <component :is="props.icon" />
  </Link>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
const props = defineProps<{
  icon?: Component
  href?: string
}>()
</script>