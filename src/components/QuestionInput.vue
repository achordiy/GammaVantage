<script setup>
import EnterBtn from '@/assets/icons/EnterBtn.svg'
</script>

<template>
  <div id="inp-box">
    <textarea
      v-autosize
      name="Text1"
      rows="3"
      cols="5"
      placeholder="Ask for precision..."
    ></textarea>
    <button><img :src="EnterBtn" alt="Enter" /></button>
  </div>
</template>

<style scoped>
#inp-box {
  border: #828a9c 1px solid;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 10px;
  background-color: #161c2e;
  margin: 0% auto;
  margin-top: 13vh;
  margin-bottom: 10vh;
}
textarea:focus {
  outline: none;
}

#inp-box textarea {
  height: 20px;
  min-height: 20px;
  resize: vertical;
  font-size: 15px;
  width: 90%;
  background: none;
  border: none;
  color: #d7c2be;
  padding: 5px 10px;
  font-family: 'Alef', sans-serif;
  font-weight: 400;
  font-style: normal;
}

#inp-box button {
  background: none;
  border: none;
  transition: all ease-in-out 400ms;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  height: 45px;
  width: 45px;
}
img {
  height: 45px;
  width: 45px;
}
#inp-box button:hover {
  background-color: #101524;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #inp-box {
    width: 85vw;
  }
}
</style>