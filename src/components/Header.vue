<script setup>
import LogoIcon from '@/assets/icons/logo.svg'
</script>

<template>
  <div id="head-box">
    <router-link to="/" class="nav-element">
      <img :src="LogoIcon" alt="gamma vantage logo" />
    </router-link>

    <h1>GammaVantage</h1>
  </div>
</template>

<style  scoped>
#head-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  position: relative;
  top: 0%;
  width: 95vw;
}
h1 {
  font-family: 'Advent Pro', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  font-size: 25px;
  text-decoration: underline;
  color: #febaad;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #head-box {
    padding: 2px 15px;
    width: 90vw;
  }

  img {
    height: 50px;
  }
}
</style>