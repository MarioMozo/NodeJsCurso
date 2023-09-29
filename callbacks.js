function Hola(nombre, miCallBack){
    setTimeout(function(){
        console.log('Hola ' + nombre);
        miCallBack(); 
    },1000)
}


function adios(nombre, OtroCallBack){
    setTimeout(function(){
        console.log('Adios ' + nombre)
        OtroCallBack();
    }, 1000);
}

console.log('Iniciando proceso...')
Hola('Mario', function(){
    adios('Mario', function(){
        console.log('Terminando proceso...')
    })
    console.log('Terminando proceso...')
});