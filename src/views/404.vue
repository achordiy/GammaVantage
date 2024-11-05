<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    404
    <br />
    Page Not Found
    <br />
    <router-link to="/" class="nav-element"> Back To Home </router-link>
  </div>
</template>

<style scoped >
div {
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #febaad;
  position: relative;
  top: 35vh;
  /* left: 50%; */
}

.nav-element {
  font-size: 30px;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>