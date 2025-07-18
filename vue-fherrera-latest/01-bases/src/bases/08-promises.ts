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