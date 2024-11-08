<template>
  <div :id="ChatStore.isChatOpened ? 'text-banner-box-small' : 'text-banner-box'">
    Trade <span>Smarter</span> with data driven <br />
    insights at Your <span> Fingertips</span>.
  </div>
</template>

<script setup>
import { useChatStore } from '@/stores/aichat'

const ChatStore = useChatStore()
</script>

<style scoped>
#text-banner-box {
  transition: all 1s ease-in-out;
  text-align: center;
  font-size: 60px;
  color: #febaad;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
}

#text-banner-box-small {
  transition: all 1s ease-in-out;
  text-align: center;
  font-size: 30px;
  color: #febaad;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-top: -9vh;
}
span {
  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #text-banner-box {
    font-size: 24px;
    margin-top: 10vh;
  }

  #text-banner-box-small {
    font-size: 20px;
    margin-top: 1vh;
  }
}
</style>