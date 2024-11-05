<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />

  <div id="vl-marquee">
    <Vue3Marquee :clone="true" :duration="5">
      <span> Gamma Vantage •</span>
    </Vue3Marquee>
  </div>
  <div id="vr-marquee">
    <Vue3Marquee :clone="true" :duration="5">
      <span> Gamma Vantage • </span>
    </Vue3Marquee>
  </div>
  <RouterView />
</template>

<style scoped >
span {
  margin-right: 5px;
}
#vl-marquee {
  font-family: 'Advent Pro', sans-serif;
  position: fixed;
  transform: rotate(90deg);
  right: -99%;
  z-index: -1;
  color: #828a9c;
}
#vr-marquee {
  font-family: 'Advent Pro', sans-serif;
  position: fixed;
  transform: rotate(-90deg);
  z-index: -1;
  left: -99%;
  color: #828a9c;
}
</style>
