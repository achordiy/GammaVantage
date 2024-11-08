<script setup>
import SeactionHeading from './SeactionHeading.vue'
</script>


<template>
  <div id="about-box">
    <SeactionHeading head1="About Us" head2="GammaVantage: Redefining F&O Trading" />
    <div id="about-text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure reiciendis aliquam minima
      porro ea libero aperiam laborum illo, dignissimos necessitatibus quam! Blanditiis maxime
      ducimus delectus sequi quos eveniet harum.
      <br />
      <h3>mini headding</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum ab in sint natus
      molestiae eligendi magnam veritatis repellendus. Rerum saepe officiis quis ipsa labore
      corporis ipsum at corrupti pariatur.
      <br />
      <h3>mini headding 2</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum ab in sint natus
      molestiae eligendi magnam veritatis repellendus. Rerum saepe officiis quis ipsa labore
      corporis ipsum at corrupti pariatur.
    </div>
  </div>
</template>

<style scoped>
#about-text {
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
</style>