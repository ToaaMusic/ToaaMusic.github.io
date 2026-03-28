<script setup lang="ts">
import { Avatar, KvCard } from 'ebrain-ui';
</script>

<template>
  <div class="home-view">
    <Avatar :name="'ToaaM'"
      :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
      :size="'la'" />
    <KvCard>
      <template #key>
        用户名
      </template>
      <template #value>
        <Avatar :name="'ToaaM'"
          :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
          :size="'la'" />
      </template>
    </KvCard>
  </div>

</template>

<style lang="css">
.home-view {
  padding: 20px;
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 1000px;
}
</style>