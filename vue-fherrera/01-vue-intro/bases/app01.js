const app = Vue.createApp({
	template: `
		<h1> Hola Mundo </h1>
		<p>{{ [1,2,3,4,5,6] }}</p>
		<p>{{ true ? 'Activo' : 'Inactivo'}}</p>
	`
})


app.mount('#myApp')