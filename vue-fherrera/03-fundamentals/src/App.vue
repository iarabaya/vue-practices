<script setup>
import Counter from './components/Counter.vue';
</script>

<template>
	<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
	<p>hola mundo</p>
	<Counter title="Entraron" :start="100"/>
	<Counter title="Salieron" :start="2"/>
</template>

<style>
@import './assets/base.css';

#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

</style>
