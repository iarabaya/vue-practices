import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {
	const pokemonsArr = Array.from( Array(650) )
	return pokemonsArr.map( (value, index) => index + 1 )
}



const getPokemonOptions = async () => {

	const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

	const pokemons = await  getPokemonNames( mixedPokemons.splice(0, 4))

	return pokemons
}


const getPokemonNames = async ( pokemons = [] ) => {
	const [ a, b, c, d ] = pokemons
	// const res = await	pokemonApi.get(`/1`)
	// console.log(res.data.name, res.data.id)

	const promiseArr = [
		pokemonApi.get(`/${ a }`),
		pokemonApi.get(`/${ b }`),
		pokemonApi.get(`/${ c }`),
		pokemonApi.get(`/${ d }`),
	]
	// const respuestas = await Promise.all(promiseArr)
	const [ p1, p2, p3, p4 ] = await Promise.all(promiseArr)

	return [
		{ name: p1.data.name, id: p1.data.id },
		{ name: p2.data.name, id: p2.data.id },
		{ name: p3.data.name, id: p3.data.id },
		{ name: p4.data.name, id: p4.data.id },
	]
}

export default getPokemonOptions