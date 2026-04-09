<template>
  <div class="music-player">
    <ul class="playlist">
      <li
        v-for="(song, index) in songs"
        :key="song.id"
        :class="{ active: index === currentIndex }"
        @click="playSong(index)"
      >
        {{ song.name }} - {{ song.artist }}
      </li>
    </ul>
    <iframe
      :src="currentSrc"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="300"
      height="86"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 1. 定义歌曲的接口类型
interface Song {
  id: number;
  name: string;
  artist: string;
}

// 2. 为 songs 加上 Song[] 类型限制
const songs = ref<Song[]>([
  { id: 1859048183, name: '夏恋 feat Rhyzz&BeLL&Jas Mace(The 49ers)', artist: 'Otokaze' },
  // 你可以继续添加更多歌曲...
])

const currentIndex = ref<number>(0)

// 3. 为函数参数添加类型
const buildSrc = (id: number): string =>
  `https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`

// 4. 使用 computed (计算属性) 会比手动维护 currentSrc 更优雅、更不容易出 Bug
const currentSrc = computed(() => {
  const song = songs.value[currentIndex.value]
  return song ? buildSrc(song.id) : ''
})

// 5. 点击切换索引即可，currentSrc 会通过 computed 自动更新
function playSong(index: number): void {
  currentIndex.value = index
}
</script>

<style scoped>
.music-player {
  width: 320px;
  font-family: sans-serif;
}

.playlist {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  max-height: 120px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 8px;
}

.playlist li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 14px;
}

.playlist li:hover {
  background-color: #f5f5f5;
}

.playlist li.active {
  background-color: #42b983;
  color: white;
}
</style>