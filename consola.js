const { group } = require("console");

console.info('Algo');


//Metodo table de console en un array[]
var tabla = [
{    
    id: 1,
    name: 'mario',
},
{
    id: 2,
    name: 'ivan'
}
]
console.log('Metodo console.log()');
console.log(tabla);
console.log('Metodo console.table');
console.table(tabla)


console.group("Grupo 1");
console.log("Dato");
console.log("Dato");
console.log("Dato");
console.groupEnd("Grupo 1")


console.log("Cuenta las veces que se repite algo")
console.count('palabra');
console.count('palabra');
console.count('palabra');
console.count('palabra');
console.count('palabra');
