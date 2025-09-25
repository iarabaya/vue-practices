<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ name, id } in options"
      :key="id"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-200 disabled:pointer-events-none',
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
    <!-- <ul>
      <li>{{ props.options[1].name }}</li>
      <li>{{ props.options[2].name }}</li>
      <li>{{ props.options[3].name }}</li>
      <li>{{ props.options[4].name }}</li>
    </ul> -->
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
@reference "@/assets/styles.css";
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-green-400 text-white;
}

.incorrect {
  @apply bg-red-100 opacity-70;
}
</style>
