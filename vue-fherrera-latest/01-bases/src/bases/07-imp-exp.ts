import misPersonajes, { owners, type Owner } from '../data/heroes';

console.log(owners, misPersonajes);

export const getHeroById = (id: number) => {
    return misPersonajes.find( hero => hero.id === id);
}

console.log(getHeroById(1));
console.log(getHeroById(100));

export const getHeroesByOwner = (owner: Owner) => {
    return misPersonajes.filter( hero => hero.owner === owner) ?? [];
}

console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));