<script setup>
import SeactionHeading from './SeactionHeading.vue'
import { RouterLink } from 'vue-router'
</script>


<template>
  <div id="privacy-box">
    <SeactionHeading head1="Privacy Policy " head2="Your Trust, Our Commitment" />
    <div id="privacy-text">
      <h3>Terms of Service</h3>
      At GammaVantage, we value transparency and strive to build trust through clear and fair
      policies. By using our platform, you agree to our terms of service, designed to protect your
      rights and privacy.

      <h3>Privacy Policy</h3>
      Your data is yours. GammaVantage is committed to safeguarding your personal information, using
      it solely to enhance your experience on our platform. We never share or sell your data to
      third parties without your consent. For more detailed information, please refer to our full
      <span><router-link to="t&c"> Terms & Condition </router-link></span> and Privacy Policy
      documents.
    </div>
  </div>
</template>

<style scoped>
span a {
  color: whitesmoke;
  text-decoration-color: #828a9c;
  transition: all ease-in-out 400ms;
}
span a:hover {
  color: whitesmoke;
  text-decoration-color: whitesmoke;
}
#privacy-text {
  margin: 5px 60px;
  font-family: 'Alef', sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 70%;
  margin-top: 25px;
  animation: slideInFromLeft 1s forwards;
  margin-bottom: 40vh;
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
  #privacy-text {
    margin: 5px 40px;
    font-family: 'Alef', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 84%;
    margin-top: 25px;
    animation: slideInFromLeft 1s forwards;
    margin-bottom: 33vh;
  }
}
</style>