<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-2 bg-green-200 mx-1 rounded" @click="counter++">+1</button>
      <button class="p-2 bg-green-200 mx-1 rounded" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>
