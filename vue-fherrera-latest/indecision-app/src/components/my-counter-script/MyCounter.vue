<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button data-testid="decrement-button" class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

// interface Props {
//   value: number;
//   text: string;
// }

// const props = defineProps<Props>();
</script>

<style scoped>
@import 'tailwindcss';

.btn {
  @apply p-2 mx-1 rounded bg-blue-500 hover:bg-blue-700;
}
</style>
