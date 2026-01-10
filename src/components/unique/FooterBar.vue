<template>
  <div class="footer-bar">
    <a class="icon-btn" href="/" aria-label="Home"><i class="i-carbon-home" /></a>
    <a class="icon-btn" href="/projects" aria-label="Projects"><i class="i-carbon-task" /></a>
    <a class="icon-btn" href="mailto:you@example.com" aria-label="Email"><i class="i-carbon-email" /></a>
  </div>
</template>

<style scoped>
.footer-bar {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  z-index: 999;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}
</style>
