<script setup>
import SeactionHeading from '@/components/sections/SeactionHeading.vue'
import { onMounted, ref } from 'vue'
import VueMarkdown from 'vue-markdown-render'
// import TestMd from '@/assets/test.md'
const options = { html: true }
import MarkdownItAnchor from 'markdown-it-anchor'
const src = ref('')
const plugins = [MarkdownItAnchor]
import '@/assets/markdown.css'
onMounted(async () => {
  try {
    const response = await fetch('/test.md')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    src.value = await response.text()
  } catch (error) {
    console.error('Error fetching markdown file:', error)
  }
})
</script>

<template>
  <SeactionHeading />
  <div class="markdown-content">
    <VueMarkdown :source="src" :options="options" :plugins="plugins" />
  </div>
</template>


<style >
/* Markdown Content Styles */
/* .markdown-content code {
  font-family: Consolas, Monaco, 'Courier New', monospace;
  background: #eee;
  padding: 0.2em 0.4em;
  border-radius: 3px;
} */

.markdown-content img {
  width: 50vw;
}

.markdown-content {
  font-family: Arial, sans-serif;
  color: whitesmoke;
  line-height: 1.6;
  width: 90vw;
  margin: 0% auto !important;
  background: none !important;
  margin-bottom: 10vh !important;
  animation: slideInFromLeft 1s forwards;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
