// function greetPerson( name: string ) { 
//     return `Hola ${name}`;
// }

// const greetPerson = ( name: string ) => {
// return `Hola ${name}`;
// }

const greetPerson = (name: string) => `Hola ${name}`;

const getUser = (uid: string) => ({
    uid: uid ,
    username: 'Tony001'
});

console.log(getUser('BCD-223'));
console.log(greetPerson('Iara'));

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
    {
        id: 3,
        name: 'Aquaman',
    },
];
const hero = heroes.find( (h) => h.id === 1);

console.log(hero?.name);//null check operator
console.log(hero?.power?.toUpperCase());

