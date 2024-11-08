
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="footer-box">
    <router-link to="/about#about-box" class="nav-element"> About Us </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about" class="nav-element"> Whatsapp </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about#blogs-box" class="nav-element"> Blogs </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="/about#contact-box" class="nav-element"> Contacts </router-link>
    <span class="nav-element-dot">•</span>
    <router-link to="t&c" class="nav-element"> Terms & Condition </router-link>
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
  position: fixed;
  bottom: 0%;
  right: 1px;
  margin-bottom: 20px;
  z-index: 100;
  width: 100%;
  gap: 15px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .nav-element {
    font-size: 13px;
    color: #c8d1e6;
  }
  #footer-box {
    right: 1px;
  }
}
</style>