

//Globals, 
// Ejemplo de uso, para conectar una base de datos, se puede intentar por ejemplo 5segundos y con la función
// ... setInvertal y condicionando a que se repita 3 veces y se puede poner cada cuanto tiempo se desea repetir
// ... en caso de que pase el número de veces, se puede hacer otra cosa, para que no se rompa la función.
let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola');
    if (i === 3){
        clearInterval(intervalo)
    }
    i++;
}, 1000);