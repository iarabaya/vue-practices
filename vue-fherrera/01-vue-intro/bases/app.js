const app = Vue.createApp({

	data() {
		return {
			message: "I'm Batman",
			author: 'Bruce Wayne'
		}
	},
	methods: {
		changeQuote(event){
			console.log(event)
			this.message = "I'm the Dark Knight";

			this.capitalize()
		},
		capitalize(){
			this.message = this.message.toUpperCase()
		}
	},
	watch: {}

})


app.mount('#myApp')