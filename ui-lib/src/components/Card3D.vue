<template>
  <div class="card-container">
    <div
      class="card-3d"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      :style="{
        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        background: `linear-gradient(${angle}deg, var(--card-bg-start), var(--card-bg-end))`
      }"
    >
      <div class="card-content" :style="{ '--dark-bar-angle': darkBarAngle + 'deg' }">
        <!-- 鼠标光晕 -->
        <div
          class="glow-effect"
          :style="{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.3), transparent 70%)`
          }"
        ></div>
        <!-- 插槽内容 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  sensitivity?: number
  borderRadius?: string
  boxShadow?: string
  bgStart?: string
  bgEnd?: string
}

const props = withDefaults(defineProps<Props>(), {
  sensitivity: 25,
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  bgStart: '#ffffff',
  bgEnd: '#f0f0f0',
})

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)
const angle = ref(0)
const darkBarAngle = ref(135)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  requestAnimationFrame(() => {
    const rect = cardRef.value!.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = e.clientX - centerX
    const offsetY = e.clientY - centerY

    rotateY.value = Math.min(15, Math.max(-15, offsetX / props.sensitivity))
    rotateX.value = Math.min(15, Math.max(-15, -offsetY / props.sensitivity))

    const relativeX = e.clientX - rect.left - rect.width / 2
    const relativeY = e.clientY - rect.top - rect.height / 2
    angle.value = getMouseAngle(relativeY, relativeX)

    darkBarAngle.value = (angle.value + 45) % 360

    glowX.value = ((e.clientX - rect.left) / rect.width) * 100
    glowY.value = ((e.clientY - rect.top) / rect.height) * 100
  })
}

const handleMouseLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
  angle.value = 0
  darkBarAngle.value = 135
  glowX.value = 50
  glowY.value = 50
}

const getMouseAngle = (x: number, y: number) => {
  let angle = Math.atan2(y, x) * (180 / Math.PI)
  return angle < 0 ? angle + 360 : angle
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  width: 100%;
}

.card-3d {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out, background 0.3s ease;
  cursor: pointer;
  border-radius: var(--card-border-radius, 16px);
  box-shadow: var(--card-box-shadow, 0 8px 32px rgba(0, 0, 0, 0.1));
  backdrop-filter: blur(10px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* 宽高自适应 */
  display: inline-block;
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--dark-bar-angle, 135deg),
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0) 55%,
      rgba(255, 255, 255, 0.1) 100%
    );
    pointer-events: none;
    transition: background 0.1s ease;
  }
}

.glow-effect {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, background 0.1s ease;
  border-radius: inherit;
  z-index: 1;
}

.card-3d:hover .glow-effect {
  opacity: 0.6;
}
</style>