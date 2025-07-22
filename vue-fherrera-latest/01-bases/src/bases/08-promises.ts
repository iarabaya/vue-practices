import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

console.log('Inicio');

new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa');
    setTimeout(() => {
        //    resolve('Mi amigo cumplió'); se resuelve al fin del stack
        reject('Mi amigo, no cumplió');
    }, 1000)
})
    .then(message => console.log(message))
    .catch(errorMessage => console.log('error:', errorMessage))
    .finally(() => console.log('Fin de la promesa'))

console.log('Fin');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const hero = getHeroById(id);

            hero ? resolve(hero) : reject(`Héroe no encontrado ${id}`);

            // if (hero) {
            //     resolve(hero)
            //     return;
            // }
            // reject(`Héroe no encontrado ${id}`)

        }, 1500);
    })
};

getHeroByIdAsync(1)
    .then(hero => console.log('El nombre es ', hero.name))
    .catch(message => alert(message));