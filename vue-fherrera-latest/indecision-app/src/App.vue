<template>
  <h1 class="text-3xl font-bold">Mi primera App de Vue</h1>
  <hr>

  <MyCounter :value="5" text="Hola mundo"/>
  <MyCounterScript :value="6"/>
  <MyCounterScript2 :value="10"/>
</template>

<script setup lang="ts">
import MyCounter from "./components/MyCounter.vue";
import MyCounterScript from "./components/MyCounterScript.vue";
import MyCounterScript2 from "./components/my-counter-script/MyCounterScript2.vue";

</script>

<style scoped>
h1 {
  color: green;
}
</style>
