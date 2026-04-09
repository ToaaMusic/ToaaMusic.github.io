<template>
  <div ref="cloudRef" class="word-cloud-container"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import WordCloud from "wordcloud";

interface Tag {
  text: string;
  weight: number;
  color?: string;
}

const props = defineProps<{
  tags: Tag[];
}>();

const cloudRef = ref<HTMLDivElement | null>(null);

function renderWordCloud() {
  if (!cloudRef.value) return;

  const list = props.tags.map(tag => [
    tag.text,
    tag.weight,
  ] as [string, number]);

  WordCloud(cloudRef.value, {
    list: list as any,
    weightFactor: (size) => size * 5, // weight → font-size 的映射，你也可以自己改
    rotateRatio: 0.3,             // 30% 竖排（类似 python prefer_horizontal）
    rotationSteps: 2,             // 0° / 90°
    // color: (word, weight, fontSize, distance, theta) => {
    //   const item = props.tags.find(t => t.text === word);
    //   return item?.color ?? "#333";
    // },
    backgroundColor: "transparent",
    gridSize: 7,                  // 调整密度，越小越慢但更紧凑
  });
}

onMounted(() => {
  renderWordCloud();
});

watch(
  () => props.tags,
  () => renderWordCloud(),
  { deep: true }
);
</script>

<style scoped>
.word-cloud-container {
  width: 100%;
  height: 400px;
  position: relative;
}
</style>
