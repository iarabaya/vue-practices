export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 512346,
        lat: 14.23454,
        lng: 15.12366
    }
} //as const; //quita el metodo de set, dejando solo lectura

//se puede mutar un objeto, pero no se puede redefinir la variable a otro espacio de memoria/objeto
person.age = 55;

//todos los objetos pasan por referencia en javascript
//apuntan al mismo espacio en memoria
// const person2 = person;

// const person2 = {...person}; //los objetos anidados siguen por referencia

const person2 = structuredClone(person);
person2.lastName = 'Parker';
person2.address.city = 'Los Angeles';

console.log({person});
console.log({person2});