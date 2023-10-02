const os = require('os');

console.log(os.platform());    //Te indica que tipo de plataforma (os) estas corriendo

console.log(os.arch());


function procesador() {
    let CPU = os.cpus();

    for(i = 0; i<=CPU.length; i++){
        console.log('Procesador:', i);
    }    
    
}
procesador();


console.log(os.freemem());

console.log(os.homedir());

console.log(os.hostname());

console.log(os.networkInterfaces());

