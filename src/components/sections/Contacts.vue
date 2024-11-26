<script setup>
import SeactionHeading from './SeactionHeading.vue'
import WhatsApp from '@/assets/icons/whatsapp.svg'
import FaceBook from '@/assets/icons/facebook.svg'
import Insta from '@/assets/icons/insta.svg'
import linkedin from '@/assets/icons/linkedin.svg'
import Twitter from '@/assets/icons/twitter.svg'
</script>

<template>
  <div id="contact-box">
    <SeactionHeading head1="Contact Us" head2="Seamless Support with GammaVantage AI" />
    <div id="contact-text">
      Our team is here to assist you through every step of your trading journey. For quick,
      real-time responses, connect with our exclusive GammaVantage AI on WhatsApp, designed to
      answer your questions and provide insights instantly.
      <br />
      <h3>Use our AI via WhatsApp <img width="25px" :src="WhatsApp" alt="WhatsApp" /></h3>
      GammaVantage WhatsApp AI: Experience real-time support and insights with our dedicated
      WhatsApp bot. Send a message to +1 (800) 555-6789 to get started.
      <br />
      <h3>Additional Support Options</h3>
      Email: support@gammavantage.com
      <br />
      Social Media: Connect with us on
      <br />
      <div>
        <a href="http://" target="_blank" rel="noopener noreferrer"
          ><img :src="FaceBook" alt="Facebook"
        /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"
          ><img :src="Twitter" alt="Twitter"
        /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"
          ><img :src="WhatsApp" alt="WhatsApp"
        /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"
          ><img :src="linkedin" alt="LinkedIn"
        /></a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"
          ><img :src="Insta" alt="Instagram"
        /></a>
      </div>
      <h3>GST :- 36EMFPS6162G1ZP</h3>
    </div>
  </div>
</template>



<style scoped>
a {
  transition: all 400ms ease-in-out;
}
a:hover {
  filter: drop-shadow(5px 5px 10px #febaad);
}
#contact-text {
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
  #contact-text {
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