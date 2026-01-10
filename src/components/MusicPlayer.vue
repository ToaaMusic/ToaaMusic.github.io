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

<script setup>
import { ref } from 'vue'

// 你自己定义的歌曲列表，id是网易云音乐歌曲ID
const songs = ref([
  { id: 1859048183, name: '夏恋 feat Rhyzz&BeLL&Jas Mace(The 49ers)', artist: 'Otokaze' },
])

const currentIndex = ref(0)

// 拼装网易云单曲播放器链接，id替换成歌曲id
const buildSrc = (id) =>
  `https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`

const currentSrc = ref(buildSrc(songs.value[0].id))

function playSong(index) {
  currentIndex.value = index
  currentSrc.value = buildSrc(songs.value[index].id)
}
</script>

<style scoped>
.music-player {
  width: 320px;
}

.playlist {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  max-height: 120px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.playlist li {
  padding: 0.5rem;
  cursor: pointer;
}

.playlist li.active {
  background-color: #42b983;
  color: white;
}
</style>
