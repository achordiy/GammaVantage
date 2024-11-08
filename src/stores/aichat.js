import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('ai-chat', () => {
  const isChatOpened = ref(false)
  const ProcessingAi = ref(false)
  return { isChatOpened, ProcessingAi }
})
