function Hola(nombre, miCallBack){
    setTimeout(function(){
        console.log('Hola ' + nombre);
        miCallBack(); 
    },1000)
}

function hablar(callBackHablar){
    setTimeout(function(){
        console.log('Bla Bla Bla Bla...');
        callBackHablar();
    })
}

hablar('Mario', function(nombre){
    adios(function(){
        console.log('Adios '+ nombre)
    });
});

function conversasion(nombre, veces, callback){
      
    if(veces > 0){
    hablar(function(){
        conversasion();
      })
    }else{
        adios(nombre);
    }
}
console.log('Iniciando proceso...');
Hola('Mario', function(nombre){
    conversasion(nombre, 5, function(){
        console.log('Proceso terminado.');
    });
});

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