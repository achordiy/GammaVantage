
<script setup>
import { ref } from 'vue'
import { watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const ForHome = ref(true)

watch(
  () => route.name,
  () => {
    if (route.name == 'home') {
      ForHome.value = true
    } else {
      ForHome.value = false
    }
  }
)
</script>

<template>
  <div id="footer-box">
    <router-link v-if="ForHome" to="/about#about-box" class="nav-element"> About Us </router-link>
    <router-link v-if="!ForHome" to="/" class="nav-element"> AI Chat </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about#contact-box" class="nav-element"> Whatsapp </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about#blogs-box" class="nav-element"> Blogs </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about#contact-box" class="nav-element"> Contacts </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/t&c" class="nav-element"> Terms & Condition </router-link>
  </div>
</template>

<style>
.nav-element-dot {
  font-family: 'Advent Pro', sans-serif;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;

  color: #828a9c;
}
.nav-element {
  font-family: 'Advent Pro', sans-serif;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;

  color: #828a9c;

  transition: all 400ms ease-in-out;
}
.nav-element:hover {
  color: whitesmoke;
}
#footer-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% auto;
  position: fixed;
  bottom: 0%;

  margin-bottom: 20px;
  z-index: 100;
  width: 90%;
  gap: 15px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #10152490;
  border-radius: 5px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .nav-element {
    font-size: 13px;
    color: #c8d1e6;
  }
  #footer-box {
    gap: 5px;
  }
}
</style>