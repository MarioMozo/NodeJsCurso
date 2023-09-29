//promesas


function Hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre); 
        },1000)
    })
}

function hablar(nombre){
    return new Promise(((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla Bla Bla Bla...');
            resolve(nombre);
        })
    }))
    
}


function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ' + nombre)
            resolve();
        }, 1000);
    })

}


//Llamar a la funcion hola()


console.log('Iniciando proceso...');
Hola('Mario')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando proceso');
})
    .catch(error => {
        console.error('Hay un error:');
        console.error(error);
    })