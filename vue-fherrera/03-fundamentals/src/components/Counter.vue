<template>
	<h2>Counter!!</h2>
	<!-- <p>{{ counter }} <sup>2</sup> = {{ counter * counter }} </p>
	<p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }} </p> -->

	<p>{{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

	<div>
		<button @click="increase">+1</button>
		<button @click="decrease">-1</button>
	</div>
</template>

<script>
export default {
	// name: 'Hola',
	data() {
		return {
			counter: 5
		}
	},
	methods: {
		getSquareValue(){
			console.log('getSquareValue')
			return this.counter * this.counter
		},
		increase(){
			// this.counter += 1
			this.counter++
		},
		decrease() {
			// this.counter -= 1
			this.counter--
		}
	}, 
	computed:{
		squareCounter(){
			console.log('computed')
			return this.counter * this.counter
		}
	}
}
</script>

<style>

button {
	background-color: #64B687;
	border-radius: 5px;
	border: 1px solid white;
	color: white;
	cursor: pointer;
	margin: 0 5px;
	padding: 5px 15px;
	transition: 0.3s ease-in-out;
}

button:hover {
	background-color: #478060;
	transition: 0.3s ease-in-out;
}

</style>