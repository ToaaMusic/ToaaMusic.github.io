// Avatar.vue
<template>
    <div class="profile" :class="{
      'large': size === 'la',
      'small': size === 'sm'
    }">
        <img class="avatar" :class="{
          'large': size === 'la',
          'small': size === 'sm'
        }" src="https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg" alt="avatar" />
        <h1 v-if="size === 'la'">ToaaM</h1>
        <div>
            <a class="svgbtn"
            href="https://github.com/ToaaMusic"
            target="_blank"
            rel="noopener noreferrer">
              <IconGithub />
            </a>
            <a class="svgbtn"
            href="https://space.bilibili.com/475928698?spm_id_from=333.1007.0.0"
            target="_blank"
            rel="noopener noreferrer">
              <IconBilibili />
            </a>
            <RouterLink class="svgbtn"
            title="友链相关"
            to="/friends"
            target="_blank"
            rel="noopener noreferrer">
              <FriendsIcon />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import IconBilibili from '@/components/icons/IconBilibili.vue'
import FriendsIcon from './icons/FriendsIcon.vue';

const props = defineProps({
  size: {
    type: String,
    default: 'la',
    validator: (val: string) => ['la', 'sm'].includes(val)
  }
})

</script>

<style scoped>
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

.profile.small{
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
}

.avatar.small:hover {
  transform: scale(1.05);
}
</style>