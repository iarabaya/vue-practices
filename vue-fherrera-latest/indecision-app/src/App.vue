<template>
  <h1>Mi primera App de Vue</h1>

  <hr>

  <Counter/>
  <Counter/>

</template>

<script setup lang="ts">
import Counter from "./components/Counter.vue";
import { computed, ref } from 'vue';

const counter = ref(10);
const squareCounter = computed(() => counter.value * counter.value)

</script>

<style scoped>
h1 {
  color: green;
}
</style>
