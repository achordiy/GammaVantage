<script setup>
import { computed, ref } from 'vue'
import SeactionHeading from './SeactionHeading.vue'
import { SampleBlogs } from '@/assets/testData'
import { RouterLink } from 'vue-router'
const BlogsListData = SampleBlogs()

const isBlogFull = ref(false)
// const fewElements = BlogsListData.slice(0, 5)

const Articles = computed(() => {
  return isBlogFull.value ? BlogsListData : BlogsListData.slice(0, 5)
})

const SwitchBlogFull = () => {
  isBlogFull.value = !isBlogFull.value
}
</script>

<template>
  <section id="blogs-box">
    <SeactionHeading head1="Blogs & Articles" head2="Insights & Updates" />
    <div id="blogs-text">
      Welcome to the GammaVantage blog, your destination for the latest in market trends, trading
      strategies, and expert insights. Our team of analysts and developers shares valuable content
      tailored to empower F&O traders.
      <h3>Featured Articles</h3>

      <ul id="blogs-list">
        <li class="blog-item" v-for="article in Articles" :key="article.id">
          <router-link :to="'/article/' + article.id" class="nav-element">
            <h3>"{{ article.title }}"</h3>
            <p>{{ article.description }}</p>
          </router-link>
        </li>
        <li @click="SwitchBlogFull" class="blog-less-full">
          {{ isBlogFull ? 'Read Less' : 'Read More' }}
        </li>
      </ul>
    </div>
  </section>
</template>



<style scoped>
.blog-less-full {
  font-size: 20px;
  text-align: left;
  list-style-type: none;
  text-decoration: underline;
  text-decoration-color: #828a9c;
  transition: all ease-in-out 400ms;
}
.blog-less-full:hover {
  text-decoration-color: whitesmoke;
}
.blog-item {
  transition: all ease-in-out 400ms;
  animation: slideInFromLeft 550ms forwards;
  margin-bottom: 20px;
}
.blog-item:hover {
  margin-left: 15px;
}
.blog-item h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: none;
}

.blog-item p {
  margin-top: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#blogs-text {
  margin: 5px 60px;
  font-family: 'Alef', sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 70%;
  margin-top: 25px;
  animation: slideInFromLeft 1s forwards;
  margin-bottom: 33vh;
}
h3 {
  margin: 5px 0px;
  margin-top: 25px;
  font-family: 'Alef', sans-serif;
  font-weight: 700;
  font-style: normal;
  animation: slideInFromLeft 850ms forwards;
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
  /* For mobile phones: */
  .blog-item h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    white-space: normal;
    overflow: auto;
    text-overflow: ellipsis;
  }

  .blog-item p {
    margin-top: 10px;
    margin-bottom: 10px;
    white-space: normal;
    overflow: auto;
    text-overflow: ellipsis;
  }

  #blogs-text {
    margin: 5px 40px;
    font-family: 'Alef', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 84%;
    margin-top: 25px;
    animation: slideInFromLeft 1s forwards;
    margin-bottom: 33vh;
  }

  #blogs-list {
    margin-left: -10px;
  }
}
</style>
