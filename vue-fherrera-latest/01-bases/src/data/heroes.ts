export interface Hero {  //para objetos interfaces, se pueden expandir
    id: number;
    name: string;
    owner: Owner
    // owner: 'DC' | 'Marvel'; para tipos de datos -> types
}

export type Owner = 'DC' | 'Marvel';

const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    }
]

export const owners = ['DC', 'Marvel'] as const ;

export default heroes;