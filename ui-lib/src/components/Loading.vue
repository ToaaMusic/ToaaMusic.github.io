<template>
  <div class="load-wrapper">
    <svg class="container" 
      x="0px" 
      y="0px" 
      viewBox="0 0 37 37" 
      height="37" 
      width="37" 
      preserveAspectRatio="xMidYMid meet">
      <path class="track" 
        fill="none" 
        stroke-width="5" 
        pathLength="100" 
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"/>
      <path class="car" 
        fill="none" 
        stroke-width="5" 
        pathLength="100" 
        d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"/>
    </svg>
    <p class="loading-text">{{ quote }}</p>
  </div>
</template>

<style scoped>
.load-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 80px;
}

.loading-text {
  font-size: 14px;
  opacity: 0.7;
}

.container {
  --uib-size: 37px;
  --uib-color: black;
  --uib-speed: .9s;
  --uib-bg-opacity: .1;
  height: var(--uib-size);
  width: var(--uib-size);
  transform-origin: center;
  overflow: visible;
}
.car {
  stroke: var(--main);
  stroke-dasharray: 15, 85;
  stroke-linecap: round;
  animation: travel var(--uib-speed) linear infinite;
}
.track {
  stroke: var(--main);
  opacity: var(--uib-bg-opacity);
}
@keyframes travel {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -100; }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loadingQuotes = [
  '唉……加载是无法跳过的呢 (´-ω-`)',
  '谁叫这是必要的呢 ( ｰ̀εｰ́ )',
  '加载……又是加载……╮(╯_╰)╭',
  '没办法，加载是必要的 ( ･᷄ㅂ･᷅ )',
  '加载是宿命……接受它吧 ( •︠ˍ•︡ )',
  '别催了，加载在努力了 (´･_･`)',
  '不想等，但还是得等 (￣_￣|||)',
  '缓一缓，数据也得喘口气 ( ´_ゝ｀)',
  '我也很急，但加载不急不来 ( -᷄ω-᷅ )',
]

const quote = ref('')

onMounted(() => {
  const index = Math.floor(Math.random() * loadingQuotes.length)
  quote.value = loadingQuotes[index] || ''
})
</script>
