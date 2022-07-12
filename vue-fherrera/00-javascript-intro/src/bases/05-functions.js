// function saludar ( xyz ) {
// 	return `Hola ${ xyz }`
// }



// const saludar = ( xyz ) => {
// 	return `Hola ${ xyz }`
// }

const saludar = ( xyz = 'Peter' ) => `Hola ${ xyz }`

const nombre = 'Tony'

// console.log(saludar( nombre ))

// const getUser = () => {
// 	return {
// 		uid: 'ABC123',
// 		username: 'Tony01'
// 	}
// }

const getUser = () => ({ uid: 'ABC123', username: 'Tony01'	})
console.log(getUser());

const heroes = [
	{
		id:1,
		name: 'Batman'
	},
	{
		id:2,
		name: 'Superman'
	},
]

// const existe = (array,id) => array.some( e => e.id === id ) 
// console.log(existe(heroes, 1));


const findHero = (array,id) => array.find( e => e.id === id ) 
const { name } = findHero(heroes, 1)
console.log( name );




