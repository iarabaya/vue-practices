<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi señora</span>
    </div>

    <!-- Chat messages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola mundo!!',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Hola mundo',
    itsMine: false,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Quieres ir a tomar café?',
    itsMine: true,
  },
    {
    id: new Date().getTime() + 1,
    message: 'no',
    itsMine: false,
  }
]);
</script>
