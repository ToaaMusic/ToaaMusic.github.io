<template>
  <div class="osu-shell" tabindex="0" @wheel.prevent="onWheel" @keydown="onKeydown">
    <div class="bg" :style="bgStyle"></div>
    <div class="vignette"></div>
    <div class="glow"></div>

    <div class="layout">
      <aside class="meta-panel">
      </aside>

      <main class="list-wrap">
        <div class="list-rail"></div>
        <div class="song-list">
          <button v-for="(song, i) in songs" :key="song.id" class="song-item"
            :class="{ active: Math.round(currentIndex) === i }" :style="itemStyle(i)" @click="select(i)">
            <div class="title">{{ song.title }}</div>
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { data as songs } from './scripts/posts.data'

const currentIndex = ref(0)
const targetIndex = ref(0)
let raf = 0
let lastWheelTime = 0

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))
const lerp = (a, b, t) => a + (b - a) * t
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const activeSong = computed(() => songs[Math.round(currentIndex.value)] ?? songs[0])

const bgStyle = computed(() => {
  const i = Math.round(currentIndex.value)
  const song = songs[i] ?? songs[0]
  const hue = (i * 43) % 360
  return {
    transform: `scale(${1.08 + Math.sin(currentIndex.value * 0.35) * 0.02})`,
    background: `
      radial-gradient(circle at 20% 20%, hsla(${hue}, 90%, 65%, 0.32), transparent 35%),
      radial-gradient(circle at 80% 20%, hsla(${(hue + 55) % 360}, 85%, 60%, 0.22), transparent 28%),
      radial-gradient(circle at 50% 85%, hsla(${(hue + 120) % 360}, 80%, 55%, 0.18), transparent 35%),
      linear-gradient(135deg, #0b1020 0%, #10162a 45%, #080b14 100%)
    `,
  }
})

function itemStyle(i) {
  const offset = i - currentIndex.value
  const abs = Math.abs(offset)
  const visible = abs < 4.2
  const t = clamp(1 - abs / 4.2, 0, 1)
  const eased = easeOutCubic(t)
  const y = offset * 86
  const scale = lerp(0.74, 1.08, eased)
  const opacity = lerp(0.08, 1, eased)
  const blur = lerp(5.5, 0, eased)
  const x = lerp(86, 0, eased)
  const rot = lerp(12, 0, eased) * Math.sign(offset)
  return {
    display: visible ? 'grid' : 'none',
    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateZ(${rot}deg)`,
    opacity,
    filter: `blur(${blur}px)`,
    zIndex: Math.floor(100 - abs * 10),
  }
}

function coverStyle(i) {
  const offset = i - currentIndex.value
  const abs = Math.abs(offset)
  const t = clamp(1 - abs / 4.2, 0, 1)
  const eased = easeOutCubic(t)
  return {
    transform: `translate3d(${lerp(24, 0, eased)}px, 0, 0) scale(${lerp(0.84, 1, eased)})`,
    opacity: lerp(0.55, 1, eased),
  }
}

function tick() {
  currentIndex.value = lerp(currentIndex.value, targetIndex.value, 0.12)
  if (Math.abs(currentIndex.value - targetIndex.value) < 0.001) {
    currentIndex.value = targetIndex.value
    raf = 0
    return
  }
  raf = requestAnimationFrame(tick)
}

function commitTarget(next) {
  targetIndex.value = clamp(next, 0, songs.length - 1)
  if (!raf) raf = requestAnimationFrame(tick)
}

function select(i) {
  commitTarget(i)
}

function onWheel(e) {
  const now = performance.now()
  const delta = e.deltaY > 0 ? 1 : -1
  const fast = now - lastWheelTime < 120
  lastWheelTime = now
  commitTarget(targetIndex.value + delta * (fast ? 0.7 : 1))
}

function onKeydown(e) {
  if (e.key === 'ArrowDown') commitTarget(targetIndex.value + 1)
  if (e.key === 'ArrowUp') commitTarget(targetIndex.value - 1)
  if (e.key === 'Enter') {
    const song = songs[Math.round(currentIndex.value)]
    console.log('Selected:', song?.title)
  }
}

onMounted(() => {
  const focus = document.querySelector('.osu-shell')
  focus?.focus()
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped lang="scss">
.osu-shell {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  outline: none;
  color: rgba(255, 255, 255, 0.95);
}

.bg,
.vignette,
.glow {
  position: absolute;
  inset: 0;
}

.bg {
  transition: background 260ms ease, transform 500ms ease;
  filter: saturate(1.15) contrast(1.05);
}

.vignette {
  background: radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.56) 100%);
  pointer-events: none;
}

.glow {
  background:
    radial-gradient(circle at 68% 48%, rgba(120, 160, 255, 0.10), transparent 22%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04), transparent 40%);
  mix-blend-mode: screen;
  pointer-events: none;
}

.layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 36px;
  width: 100%;
  height: 100%;
  padding: 42px;
  box-sizing: border-box;
}

.list-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
}

.meta-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  padding: 26px 18px;
  backdrop-filter: blur(12px);
}

.list-rail {
  position: absolute;
  right: 58px;
  top: 50%;
  width: min(760px, 72vw);
  height: 440px;
  transform: translateY(-50%);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 60px rgba(0, 0, 0, 0.26);
}

.song-list {
  position: relative;
  width: min(760px, 72vw);
  height: 440px;
  margin-right: 58px;
}

.song-item {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 10px 14px 10px 10px;
  transform-origin: left center;
  border: 0;
  border-radius: 22px;
  color: inherit;
  background: rgba(12, 17, 31, 0.56);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-align: left;
  transition: background 180ms ease, box-shadow 180ms ease, filter 180ms ease;
  will-change: transform, opacity, filter;

  &:hover {
    background: rgba(20, 27, 46, 0.78);
  }

  &:active {
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 20px 44px rgba(0, 0, 0, 0.34), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
}

.title {
  font-size: 22px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 18px;
    gap: 18px;
  }

  .list-wrap {
    justify-content: center;
  }

  .song-list,
  .list-rail {
    width: min(100%, 92vw);
    margin-right: 0;
  }

  .list-rail {
    right: auto;
  }
}
</style>
