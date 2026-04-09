<template>
  <Link class="svgbtn" :href="props.href" type="external" target="_blank">
    <component :is="props.icon" />
  </Link>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: any
  href?: string
}>()
</script>