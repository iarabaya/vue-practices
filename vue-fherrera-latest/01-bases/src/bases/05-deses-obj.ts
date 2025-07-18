interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string; //es opcional
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Money',
};

/* const { age, name, power = 'No tiene poder' } = person; //puede ser un objeto o un array

console.log(person.codeName);

console.log({
    age, name, power
}); */
interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}:  CreateHeroArgs ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
});

console.log( createHero(person) );
