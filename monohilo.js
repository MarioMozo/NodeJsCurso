console.log("Hola mundo")


let i = 0;
setInterval(function(){
    console.log('Sigo activo', i)
    i++;

    
}, 1000)

console.log("Segundo hilo")