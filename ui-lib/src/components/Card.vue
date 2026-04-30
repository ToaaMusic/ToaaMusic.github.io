<template>
  <div class="card" :class="{ hasImage: data.image_url }" ref="cardRef" :view-transition-name="`post-${data.md_url}`" v-fade="{ offset: '20px', duration: 500 }">
    <PinIcon class="pin" v-if="data.top"/>
    <div
      class="card-image"
      :style="{
        backgroundImage: `url('${data.image_url}')`,
        backgroundPosition: bgPos,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }"
      v-if="data.image_url"
    ></div>

    <div class="card-content">
      <h3 class="card-title">{{ data.title }}</h3> <!-- _before-line -->
      <p class="card-summary">{{ data.summary }}</p>
      <div class="card-footer">
        <div class="meta-info">
          <IconCard :icon="CategoryIcon">
            <span>{{ data.class }}</span>
          </IconCard>

          <IconCard v-if="data.tags && data.tags.length">
            <button
              style="margin-left: 0.5rem;"
              v-for="tag in data.tags"
              :key="tag"
              class="tag-btn"
            >
              {{ '#' + tag }}
            </button>

          </IconCard>
        </div>

        <IconCard class="date" :icon="DateIcon">
          <span>{{ formatDate(data.created_at || '') }}</span>
        </IconCard>
      </div>

    </div>
    <div v-show="data.class"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconCard from './IconCard.vue';
import CategoryIcon from '../icons/CategoryIcon.vue';
import DateIcon from '../icons/DateIcon.vue';
import PinIcon from '../icons/PinIcon.vue';

export interface CardData {
  id: string | number
  md_url: string
  title: string
  summary?: string
  image_url?: string
  class?: string
  tags?: string[]
  created_at?: string
  top?: boolean
}

const props = defineProps<{ data: CardData }>()
const formatDate = (iso?: string) => {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const cardRef = ref<HTMLElement | null>(null)
const bgPos = ref('center')

const updateBackground = (e: MouseEvent) => {
  const card = cardRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const offsetX = ((x / rect.width - 0.5) * 20).toFixed(2)
  const offsetY = ((y / rect.height - 0.5) * 20).toFixed(2)

  bgPos.value = `${50 + Number(offsetX)}% ${50 + Number(offsetY)}%`
}

const resetBackground = () => {
  bgPos.value = 'center'
}

onMounted(() => {
  const el = cardRef.value
  if (!el) return
  el.addEventListener('mousemove', updateBackground)
  el.addEventListener('mouseleave', resetBackground)
})

onBeforeUnmount(() => {
  const el = cardRef.value
  if (!el) return
  el.removeEventListener('mousemove', updateBackground)
  el.removeEventListener('mouseleave', resetBackground)
})

</script>

<style scoped>
.card{
  display: block;
  background-color: var(--main-border);
  border-radius: 10px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
}

.card-image,
.card-content {
  position: absolute;
  top: 0;
  bottom: 0;
  transition: width 0.5s ease, height 0.5s ease;
}

.card-image {
  transition: background-position 0.3s ease, width 0.5s ease;

  left: 0;
  width: 25%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  border-radius: 12px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  width: 75%;
  padding: 1rem;
  z-index: 2;
}

.card:hover .card-content,
.card:hover .card-image {
  width: 100%;
}

.card-title {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.card-summary {
  font-size: 0.9rem;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: auto;
  padding-right: 1rem;
  font-size: 0.75rem;
}

.meta-info {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 0.5rem;
  min-width: 0;
  flex: 1;
}

.meta-info > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.date {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.pin{
  z-index: 10;
  margin: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
}

.tag-btn {
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

@media (max-width: 768px) {
  .card {
    height: 250px;
  }

  .card-image,
  .card-content {
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    transition: height 0.6s ease;
  }

  .card-image {
    top: 0;
  }

  .card-content {
    top: auto;
    bottom: 0;
    padding: 1rem;
  }

  .card:hover .card-image,
  .card:hover .card-content {
    height: 100%;
  }

}

@container (max-width: 898px) {
  .card {
    height: 250px;
  }

  .card-image,
  .card-content {
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    transition: height 0.6s ease;
  }

  .card-image {
    top: 0;
  }

  .card-content {
    top: auto;
    bottom: 0;
    padding: 1rem;
  }

  .card:hover .card-image,
  .card:hover .card-content {
    height: 100%;
  }
}
</style>
