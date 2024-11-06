<script setup>
import { SampleQuestions } from '@/assets/testData'
const dummyQues = SampleQuestions()
</script>
<template>
  <div id="sample-que-box">
    <div class="question-marquee-box">
      <Vue3Marquee
        :clone="true"
        :duration="75"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[16, 21, 36]"
        gradient-length="15%"
      >
        <div class="question-marquee" v-for="ques in dummyQues" :key="ques.question">
          {{ ques.question }}
        </div>
      </Vue3Marquee>
    </div>
    <div class="question-marquee-box">
      <Vue3Marquee
        :clone="true"
        :duration="100"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[16, 21, 36]"
        gradient-length="15%"
      >
        <div class="question-marquee" v-for="ques in dummyQues" :key="ques.question">
          {{ ques.question }}
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<style  scoped>
#sample-que-box {
  width: 68vw;
  margin: 0% auto;
}
.question-marquee-box {
  margin: 5px;
}
.question-marquee {
  border: 1px solid #febaad;
  background-color: #161c2e;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 0px 7px;
  opacity: 60%;
  transition: 400ms all ease-in-out;

  font-family: 'Advent Pro', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}
.question-marquee:hover {
  opacity: 100%;
}
</style>