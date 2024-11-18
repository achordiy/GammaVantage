<script setup>
import { SampleQuestions } from '@/assets/testData'
import { useChatStore } from '@/stores/aichat'
import SampleQuestionsJson from '@/assets/data/SampleQuestionDB.json'
const dummyQues = SampleQuestions()

const ChatStore = useChatStore()

const SetFromSampleQues = (ques) => {
  ChatStore.useSampleQuestion = ques
  console.log(ques)
}
</script>
<template>
  <div v-if="!ChatStore.isChatOpened" id="sample-que-box">
    <div class="question-marquee-box">
      <Vue3Marquee
        :clone="true"
        :duration="55"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[16, 21, 36]"
        gradient-length="15%"
      >
        <div
          class="question-marquee"
          v-for="ques in SampleQuestionsJson"
          :key="ques.question"
          @click="
            () => {
              SetFromSampleQues(ques.question)
            }
          "
        >
          {{ ques.question }}
        </div>
      </Vue3Marquee>
    </div>
    <div class="question-marquee-box">
      <Vue3Marquee
        :clone="true"
        :duration="90"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[16, 21, 36]"
        gradient-length="15%"
      >
        <div
          class="question-marquee"
          v-for="ques in SampleQuestionsJson"
          :key="ques.question"
          @click="
            () => {
              SetFromSampleQues(ques.question)
            }
          "
        >
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
  margin-bottom: 10vh;
  margin-top: 31vh;
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
  font-size: 17px;
}
.question-marquee:hover {
  opacity: 100%;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #sample-que-box {
    width: 90vw;
    margin: 0% auto;
    margin-top: 31vh;
  }
}
</style>