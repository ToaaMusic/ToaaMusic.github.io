<script setup lang="ts">
import { Card3D, Avatar } from 'ui'
import { useRouter } from "vitepress";
const router = useRouter()
</script>

<template>
  <div class="profile-card">
    <Card3D>
      <Avatar class="profile"
        :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
        :name="'ToaaM'" @click="() => { router.go('/projects/') }" />
    </Card3D>
  </div>
</template>

<style scoped lang="scss">
</style>