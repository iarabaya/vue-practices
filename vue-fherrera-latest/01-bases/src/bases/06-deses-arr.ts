const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [g, v, , go] = character; //la desestructuracion en arrays es posicional
console.log({ g, v, go });

const returnArray = () => {
    return [123, 'ABC'] as const; //siempren devuelvo lo mismo para inferir los tipos
}

const [numbers, letters] = returnArray();

console.log(numbers * 3 , letters.toLowerCase())