<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import BannerMarquee from '@/components/BannerMarquee.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <NavBar />
  <BannerMarquee />
  <RouterView />
</template>

<style scoped >
</style>
