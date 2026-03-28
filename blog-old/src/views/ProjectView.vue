<template>
  <div class="projects">
    <List class="project-list" :items="projects" :loading="loading" @click-item="goToProject"
      :itemKey="item => item.md_url" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '@/assets/lib/supabase';
import { Card, List, Loading } from 'ebrain-ui'
import router from '@/router';

const projects = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error && data) {
    projects.value = data
  }
  loading.value = false
})

const goToProject = (id: string) => {
  router.push(`/project/${id}`)
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

</script>

<style scoped>
.projects {
  padding-top: 75px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-list {
  width: 100%;
}
</style>