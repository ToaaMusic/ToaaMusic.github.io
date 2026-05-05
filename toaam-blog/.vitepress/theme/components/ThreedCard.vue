<template>
  <div class="card-container">
    <div
      class="card-3d"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      :style="{ 
        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        background: `linear-gradient(${angle}deg, var(--infobox-background-initial), var(--infobox-background-final))`
      }"
    >
      <div 
        class="card-content"
        :style="{ '--dark-bar-angle': darkBarAngle + 'deg' }"
      >
        <!-- 装饰性光效 -->
        <div 
          class="glow-effect"
          :style="{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.3), transparent 70%)`
          }"
        ></div>
        
        <!-- 卡片图标 -->
        <div class="card-icon">
          <i class="iconfont icon-star"></i>
        </div>
        
        <!-- 卡片标题 -->
        <h2 class="card-title">{{ title }}</h2>
        
        <!-- 卡片描述 -->
        <p class="card-description">{{ description }}</p>
        
        <!-- 按钮 -->
        <button class="card-btn" @click="handleClick">
          {{ buttonText }}
          <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

interface Props {
  title?: string
  description?: string
  buttonText?: string
  sensitivity?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ToaaM',
  description: '',
  buttonText: '文章列表',
  sensitivity: 25,
})

const emit = defineEmits(['click'])

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)
const angle = ref(0)
const darkBarAngle = ref(135) // 暗条初始角度

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  
  requestAnimationFrame(() => {
    const rect = cardRef.value!.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const offsetX = e.clientX - centerX
    const offsetY = e.clientY - centerY
    
    rotateY.value = offsetX / props.sensitivity
    rotateX.value = -offsetY / props.sensitivity
    
    const maxRotate = 15
    rotateY.value = Math.min(maxRotate, Math.max(-maxRotate, rotateY.value))
    rotateX.value = Math.min(maxRotate, Math.max(-maxRotate, rotateX.value))
    
    // 计算鼠标角度（用于渐变背景）
    const relativeX = e.clientX - rect.left - rect.width / 2
    const relativeY = e.clientY - rect.top - rect.height / 2
    angle.value = getMouseAngle(relativeY, relativeX)
    
    // 让暗条角度跟随鼠标角度，偏移45度避免完全重叠，产生交错融合效果
    darkBarAngle.value = (angle.value + 45) % 360
    
    const percentX = ((e.clientX - rect.left) / rect.width) * 100
    const percentY = ((e.clientY - rect.top) / rect.height) * 100
    glowX.value = percentX
    glowY.value = percentY
  })
}

const getMouseAngle = (x: number, y: number) => {
  const radians = Math.atan2(y, x)
  let angle = radians * (180 / Math.PI)
  
  if (angle < 0) {
    angle += 360
  }
  
  return angle
}

const handleMouseLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
  angle.value = 0
  darkBarAngle.value = 135 // 恢复默认角度
  glowX.value = 50  // 恢复居中
  glowY.value = 50
}

const handleClick = () => {
  router.go('/posts')
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 1000px;
}

.card-3d {
  width: 350px;
  height: 450px;
  position: relative;
  transition: transform 0.2s ease-out, background 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  border-radius: 3vw;
  backdrop-filter: blur(10px) saturate(120%);
  box-shadow: var(--info-box-shadow, 0 8px 32px rgba(0, 0, 0, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 85vw;
    height: 60vh;
    min-height: 400px;
    border-radius: 4vh;
  }
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 3vw;
  overflow: hidden;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    border-radius: 4vh;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, background 0.1s ease;
  border-radius: inherit;
  z-index: 1;
}

.card-3d:hover .glow-effect {
  opacity: 0.6;
}

.card-icon {
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  margin: 50px auto 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  .iconfont {
    font-size: 40px;
    color: white;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    opacity: 0.3;
    z-index: -1;
  }
}

.card-title {
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.card-description {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 30px;
  margin: 15px 0;
  color: #666;
  line-height: 1.6;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 20px;
  }
}

.card-btn {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
  
  .btn-arrow {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    
    .btn-arrow {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateX(-50%) translateY(0);
  }
}

.card-3d:hover {
  .card-icon {
    transform: scale(1.05);
  }
}
</style>