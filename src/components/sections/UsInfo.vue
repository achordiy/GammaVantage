<script setup>
import SeactionHeading from './SeactionHeading.vue'
</script>


<template>
  <div id="about-box">
    <SeactionHeading head1="About Us" head2="GammaVantage: Redefining F&O Trading" />
    <div id="about-text">
      GammaVantage is more than a platform; it's a gateway to refined, data-driven trading insights
      for the modern Futures and Options (F&O) trader. Founded with a vision to empower traders at
      all levels, GammaVantage merges advanced AI technology with real-time data, creating an
      unparalleled trading experience.
      <br />
      <h3>Our Mission</h3>
      To transform the world of F&O trading by providing precision insights, empowering traders to
      make confident, informed decisions in the fast-moving financial market.
      <br />
      <h3>Our Journey</h3>
      GammaVantage was born out of a passion for innovation and a commitment to excellence. We saw
      an opportunity to bridge the gap between complex market data and accessible, actionable
      insights. Today, we serve a growing community of traders who rely on us for data accuracy,
      seamless design, and cutting-edge tools.
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