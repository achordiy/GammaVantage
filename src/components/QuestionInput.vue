<script setup>
import EnterBtn from '@/assets/icons/EnterBtn.svg'
import { watch, ref } from 'vue'
import { SampleAnswers } from '@/assets/testData'

import { useChatStore } from '@/stores/aichat'
import { useChatDataStore } from '@/stores/ChatData'

const ChatStore = useChatStore()
const ChatData = useChatDataStore()
const questionInput = ref('')
const AiAnswer = ref('')

const setAIChatScreen = () => {
  ChatStore.isChatOpened = true
}

watch(
  () => ChatStore.useSampleQuestion,
  () => {
    questionInput.value = ChatStore.useSampleQuestion
    onQuestionAsk()
  }
)

async function onQuestionAsk() {
  if (questionInput.value !== '') {
    if (!ChatStore.isChatOpened) {
      setAIChatScreen()
    }

    const userText = questionInput.value

    ChatData.Add2ChatList(userText, true)
    ChatStore.ProcessingAi = true

    questionInput.value = ''
    AiAnswer.value = await SampleAnswers()
    ChatData.Add2ChatList(AiAnswer.value.answer, false)
    ChatStore.ProcessingAi = false
  }
}
</script>

<template>
  <div :id="ChatStore.isChatOpened ? 'inp-box-small' : 'inp-box'">
    <textarea
      v-autosize
      name="Text1"
      rows="3"
      cols="5"
      placeholder="Ask for precision..."
      v-model="questionInput"
    ></textarea>
    <button :disabled="ChatStore.ProcessingAi" @click="onQuestionAsk">
      <img :src="EnterBtn" alt="Enter" />
    </button>
  </div>
</template>

<style scoped>
#inp-box {
  transition: all 1s ease-in-out;
  border: #828a9c 1px solid;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 10px;
  background-color: #161c2e;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50vh;
}

#inp-box-small {
  transition: all 1s ease-in-out;
  border: #828a9c 1px solid;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 10px;
  background-color: #161c2e;
  /* margin: 0% auto; */
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  /* bottom: 20px; */
  animation: MoveBar 1s ease-out forwards;
}

@keyframes MoveBar {
  from {
    top: 50vh;
  }
  to {
    top: 88vh;
  }
}
textarea:focus {
  outline: none;
}

textarea {
  max-height: 100px;
  overflow-y: scroll;
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

button {
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
button:hover {
  background-color: #101524;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #inp-box {
    width: 85vw;
  }

  #inp-box-small {
    width: 85vw;
    animation: MoveBar 1s ease-out forwards;
  }

  @keyframes MoveBar {
    from {
      top: 50vh;
    }
    to {
      top: 84vh;
    }
  }
}
</style>