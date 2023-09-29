
function Hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre); 
        },1000)
    })
}

async function hablar(nombre){
    return new Promise(((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla Bla Bla Bla...');
            resolve(nombre);
        })
    }))
    
}


async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ' + nombre)
            resolve();
        }, 1000);
    })

}

//PARA USAR AWAIT SE LLAMA EL METODO, LA FUNCION Y EL PARAMETRO
async function main(){
    let nombre = await Hola('Mario');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando proceso... ');
}
console.log('Iniciando proceso...');
main();