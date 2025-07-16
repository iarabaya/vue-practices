//var firstName = 'Tony';
//const respeta el scope, al ser const typescript infiere el tipo de dato
const firstName:string = 'Tony';
const lastName = 'Stark';

export const fullName = `${firstName} ${lastName}`;

console.log({firstName, lastName});
console.log(`nombre completo: ${firstName} ${lastName}`);
