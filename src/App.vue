<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import BannerMarquee from '@/components/BannerMarquee.vue'
</script>

<template>
  <NavBar />
  <BannerMarquee />
  <RouterView />
</template>

<style scoped >
</style>
