<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-2 bg-red-200 mx-1 rounded" @click="counter++">+1</button>
      <button class="p-2 bg-red-200 mx-1 rounded" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter: counter,
      squareCounter: squareCounter,
    };
  },
});

// interface Props {
//   value: number;
//   text: string;
// }

// const props = defineProps<Props>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
h1 {
  color: green;
}
</style>
