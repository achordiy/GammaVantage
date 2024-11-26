<script setup>
import EnterBtn from '@/assets/icons/EnterBtn.svg'
import WebBtn from '@/assets/icons/web-ser.svg'
import AttachmentBtn from '@/assets/icons/attachment2.png'
import TwitterBtn from '@/assets/icons/twitterBtn.svg'

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
function createJsonResponse(rawResponse) {
  // Split the raw response at the first space to get the type and the rest as the text
  const [type, ...textParts] = rawResponse.split(' ')
  const text = textParts.join(' ') // Rejoin the rest to form the full text

  return {
    type: type,
    text: text,
  }
}
async function CallAPI(topic) {
  console.log(topic)
  try {
    const a = {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
        Origin: window.location.origin,
      }),
    }
    const response = await fetch('/api/botweb?query=' + topic, a)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    var ans = await response.text()
    ans = createJsonResponse(ans)
    return ans
  } catch (error) {
    console.error('Error fetching markdown file:', error)
  }
}

async function onQuestionAsk() {
  if (questionInput.value !== '') {
    if (!ChatStore.isChatOpened) {
      setAIChatScreen()
    }

    const userText = questionInput.value

    ChatData.Add2ChatList(userText, true)
    ChatStore.ProcessingAi = true

    questionInput.value = ''
    AiAnswer.value = await CallAPI(userText)
    console.log(AiAnswer.value)
    ChatData.Add2ChatList(AiAnswer.value, false)
    ChatStore.ProcessingAi = false
  }
}

const toolType = ref('nan')

const SetToolFunction = (type) => {
  if (type === toolType.value) {
    toolType.value = 'nan'
    return
  }
  if ('tool-file' == type) {
    toolType.value = 'tool-file'
  } else if ('tool-web' == type) {
    toolType.value = 'tool-web'
  } else if ('tool-x' == type) {
    toolType.value = 'tool-x'
  }
}
</script>

<template>
  <div :id="ChatStore.isChatOpened ? 'inp-box-small' : 'inp-box'">
    <transition name="cc1">
      <button
        :class="toolType === 'tool-file' ? 'tool-active tool-btn' : 'tool-btn'"
        v-if="!ChatStore.isChatOpened"
        @click="SetToolFunction('tool-file')"
      >
        <img :src="AttachmentBtn" alt="Attchment file" />
      </button>
    </transition>
    <transition name="cc1">
      <button
        :class="toolType === 'tool-web' ? 'tool-active tool-btn' : 'tool-btn'"
        v-if="!ChatStore.isChatOpened"
        @click="SetToolFunction('tool-web')"
      >
        <img :src="WebBtn" alt="Web Search" />
      </button>
    </transition>
    <transition name="cc1">
      <button
        :class="toolType === 'tool-x' ? 'tool-active tool-btn' : 'tool-btn'"
        v-if="!ChatStore.isChatOpened"
        @click="SetToolFunction('tool-x')"
      >
        <img :src="TwitterBtn" alt="twitter Search" />
      </button>
    </transition>
    <textarea
      :disabled="ChatStore.ProcessingAi"
      v-autosize
      name="Text1"
      rows="3"
      cols="5"
      placeholder="Ask for precision..."
      @keydown.enter="onQuestionAsk"
      v-model="questionInput"
    ></textarea>
    <button :disabled="ChatStore.ProcessingAi" @click="onQuestionAsk">
      <img :src="EnterBtn" alt="Enter" />
    </button>
  </div>
</template>

<style scoped>
.tool-active {
  box-shadow: 0px 0px 5px 0px rgba(254, 187, 173, 1);
}
.tool-btn {
  height: 35px;
  width: 35px;
  margin: 1px;
}
.tool-btn img {
  height: 35px;
  width: 35px;
}
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
  padding-left: 3px;
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
  padding-left: 3px;
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
  transition: width ease-in-out 400ms;
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

.cc1-leave-from {
  opacity: 1;
}
.cc1-leave-to {
  opacity: 0;
}
.cc1-leave-active {
  transition: all ease-in-out 400ms;
}
</style>
