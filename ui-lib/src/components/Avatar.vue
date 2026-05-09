<template>
  <div class="profile" :class="size">
    <img
      class="avatar"
      :class="size"
      :src="img"
      alt="avatar"
      @click="emit('click')"/>

    <h2 v-if="size !== 'small'">
      {{ name }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import defaultAvatar from '../assets/default-avatar.svg'

withDefaults(defineProps<{
  size?: 'large' | 'small'
  img?: string
  name?: string
}>(), {
  size: 'large',
  img: defaultAvatar,
  name: 'MyName',
})

const emit = defineEmits<{
  click: []
}>()
</script>

<style scoped lang="scss">
.avatar{
  cursor: pointer;
  border: 2px solid var(--main-border);
}

// large
.profile.large {
  padding: 1rem;
  background-color: var(--main-border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transition: width 0.4s ease, height 0.4s ease;
}

.avatar.large {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 1.5rem;
  max-width: 170px;
  border-radius: 10px;
  object-fit: cover;
}

// small
.profile.small {
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
}

.avatar.small {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>