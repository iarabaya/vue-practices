<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

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
