console.log('Hola Mundo!!')

const person = {
	name: 'Tony',
	age: 45,
	codeName: 'Ironman'
}


// const { age, name, codeName, power = 'No tiene poder'} = person

// console.log(name, age, codeName);

const createHero = (  { age, name, codeName, power = 'No tiene poder'} ) =>{ id: 123412, name, age, codeName, power }



console.log( createHero( person ));