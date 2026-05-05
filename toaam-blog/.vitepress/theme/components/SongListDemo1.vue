<template>
  <div class="osu-shell" tabindex="0" @wheel.prevent="onWheel" @keydown="onKeydown">
    <div class="bg" :style="bgStyle"></div>
    <div class="vignette"></div>
    <div class="glow"></div>

    <div class="layout">
      <aside class="meta-panel">
        <div class="game-title">SONG SELECT</div>
        <div class="now-playing">{{ activeSong.title }}</div>
        <div class="subline">{{ activeSong.artist }}</div>

        <div class="stats">
          <div class="stat">
            <span>AR</span>
            <b>{{ activeSong.ar }}</b>
          </div>
          <div class="stat">
            <span>OD</span>
            <b>{{ activeSong.od }}</b>
          </div>
          <div class="stat">
            <span>CS</span>
            <b>{{ activeSong.cs }}</b>
          </div>
          <div class="stat">
            <span>HP</span>
            <b>{{ activeSong.hp }}</b>
          </div>
        </div>

        <div class="difficulty">
          <div class="difficulty-label">DIFFICULTY</div>
          <div class="difficulty-value">{{ activeSong.difficulty }}</div>
        </div>

        <div class="hint">Mouse wheel / ↑ ↓ / Enter</div>
      </aside>

      <main class="list-wrap">
        <div class="list-rail"></div>
        <div class="song-list">
          <button
            v-for="(song, i) in songs"
            :key="song.id"
            class="song-item"
            :class="{ active: Math.round(currentIndex) === i }"
            :style="itemStyle(i)"
            @click="select(i)"
          >
            <div class="cover" :style="coverStyle(i)">
              <div class="cover-inner">{{ song.cover }}</div>
            </div>
            <div class="song-info">
              <div class="artist">{{ song.artist }}</div>
              <div class="title">{{ song.title }}</div>
              <div class="extra">{{ song.mapper }} · {{ song.bpm }} BPM · {{ song.length }}</div>
            </div>
            <div class="badge">{{ song.rank }}</div>
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

<style scoped>
:global(html, body, #app) {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #05070d;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

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

.meta-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  padding: 26px 18px;
  backdrop-filter: blur(12px);
}

.game-title {
  font-size: 14px;
  letter-spacing: 0.34em;
  color: rgba(255, 255, 255, 0.45);
}

.now-playing {
  font-size: 34px;
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.subline {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.72);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 12px 10px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
}

.stat span,
.difficulty-label,
.hint {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.55);
}

.stat b,
.difficulty-value {
  font-size: 24px;
  line-height: 1;
}

.difficulty {
  margin-top: 8px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.difficulty-value {
  margin-top: 6px;
  font-weight: 700;
}

.hint {
  margin-top: 8px;
}

.list-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
}

.list-rail {
  position: absolute;
  right: 58px;
  top: 50%;
  width: min(760px, 72vw);
  height: 440px;
  transform: translateY(-50%);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 60px rgba(0, 0, 0, 0.26);
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
  grid-template-columns: 72px minmax(0, 1fr) auto;
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
}

.song-item:hover {
  background: rgba(20, 27, 46, 0.78);
}

.song-item.active {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.34), inset 0 0 0 1px rgba(255,255,255,0.08);
}

.cover {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02)),
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), transparent 38%),
    linear-gradient(135deg, rgba(90, 120, 255, 0.9), rgba(255, 80, 170, 0.65));
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.22);
}

.cover-inner {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 28px;
  font-weight: 900;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);
}

.song-info {
  min-width: 0;
}

.artist {
  font-size: 12px;
  color: rgba(255,255,255,0.58);
  margin-bottom: 4px;
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

.extra {
  margin-top: 6px;
  font-size: 12px;
  color: rgba(255,255,255,0.48);
}

.badge {
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 18px;
    gap: 18px;
  }

  .meta-panel {
    justify-content: flex-start;
    padding: 10px;
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
