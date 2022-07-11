const app = Vue.createApp({
	// template: '<h2>I am a template</h2>',
	data(){
		return {
			showBooks: true,
			title: 'The final empire',
			author: 'Brandon Sanderson',
			age: 45,
			x: 0,
			y: 0,
			books: [
				{ title: 'the name of the wind', author: 'patrick rothfuss', img:'assets/frodo.jpg'},
				{ title: 'the way of kings', author: 'brandon sanderson', img:'assets/gandalf.jpg'},
				{ title: 'The final empire', author: 'brandon sanderson', img:'assets/xavier.jpg'},
			],
			url: 'http://www.google.com'
		}
	},
	methods: {
		changeTitle(title){
			// this.title = 'Words of Radiance'
			this.title = title
		},
		toggleTitle() {
			this.showBooks = !this.showBooks
		},
		handleEvent(e, num){
			console.log(e)
			if(num){
				console.log(num)
			}
		},
		handleMousemove(e){
			this.x = e.offsetX
			this.y = e.offsetY
		}
	}
})

app.mount('#app')