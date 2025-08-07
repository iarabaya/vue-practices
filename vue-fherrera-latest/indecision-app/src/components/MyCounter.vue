<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>
    <div>
      <button class="btn" @click="counter--">-1</button>
      <button class="btn" @click="counter++">+1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// const props = defineProps({
//   value: { type: Number, required: true },
// });

interface Props {
  value: number;
  text: string;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);

// const sumOne = () => {
//   counter.value = counter.value + 1;
// }

// const minusOne = () => {
//   counter.value = counter.value - 1;
// }
</script>

<style scoped>
@import "tailwindcss";

.btn {
  @apply p-2 mx-1 rounded bg-blue-500 hover:bg-blue-700;
}
</style>
