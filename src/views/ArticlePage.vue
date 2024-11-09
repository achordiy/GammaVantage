<script setup>
import SeactionHeading from '@/components/sections/SeactionHeading.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import VueMarkdown from 'vue-markdown-render'
import MarkdownItAnchor from 'markdown-it-anchor'

import '@/assets/markdown.css'

const options = { html: true }
const src = ref('')
const plugins = [MarkdownItAnchor]

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

const route = useRoute()
const articleId = ref(route.params.id)
</script>

<template>
  <SeactionHeading :head1="'Article Heading ' + articleId" />
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
.markdown-content p {
  width: 70%;
}
.markdown-content img {
  width: 50vw;
  margin: 0% auto !important;
}

.markdown-content h3 {
  animation: slideInFromLeft 850ms forwards;
}

.markdown-content {
  font-family: 'Alef', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: rgb(228, 216, 216);
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

@media only screen and (max-width: 768px) {
  .markdown-content p {
    width: 100%;
  }
  /* For mobile phones: */
  p:has(img) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .markdown-content img {
    width: 80vw;
    margin: 0% auto !important;
  }
}
</style>
