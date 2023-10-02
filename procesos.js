process.on('exit', () =>{
    console.log('Ivan:  el proceso va a terminar');
})

process.on('exit', () =>{
    console.log('El proceso se acabo');
})
process.on('uncaughtException', (err, origen) => {
    console.error(err);
});

fucionNoExisteDaError();

console.log('Si esto es error, no se ejecuta');