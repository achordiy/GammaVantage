<script setup>
import SeactionHeading from '@/components/sections/SeactionHeading.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import VueMarkdown from 'vue-markdown-render'
import MarkdownItAnchor from 'markdown-it-anchor'
import '@/assets/markdown.css'
import BlogsListJson from '@/assets/data/Blogs.json'

function getFileById(id) {
  const article = BlogsListJson.find((article) => article.id === id)
  return article ? article.file : null
}

const route = useRoute()
const options = { html: true }
const src = ref('')
const plugins = [MarkdownItAnchor]
const articleId = ref(route.params.id)

const fileName = getFileById(articleId.value)

onMounted(async () => {
  try {
    const response = await fetch('/markdown/' + fileName)
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
  <SeactionHeading :head1="'Article Heading '" />
  <div class="markdown-content">
    <VueMarkdown :source="src" :options="options" :plugins="plugins" />
  </div>
</template>


<style >
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
