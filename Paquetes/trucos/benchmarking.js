
//Podemos ver el tiempo de ejecución de lo que queramos de nuestro código.


console.time('TodoCodigo')
let suma = 0;
//No sabemos cuanto tiempo tarda en ejectuarse el for
//Con el metodo  de console.time y .timeEnd podemos ver el tiempo
console.time('bucle');
for (let i = 0; i <1000000; i++ ) {
    suma += 1;
}
console.timeEnd('bucle');
console.timeEnd('TodoCodigo');

console.time("FuncionAsincrona");
console.log("Inicia proceso asincrono");
asincrono().then(()=>{
    console.timeEnd("FuncionAsincrona");
})
function asincrono(){
    return new Promise((resolve) =>{
        setTimeout(function(){
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}

