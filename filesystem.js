const fs = require('fs');
function leer(ruta, cb){
    fs.readFile(ruta, (err, data    ) =>{
        console.log(data.toString());
    })
}

leer(__dirname + '/NodeJsCurso/archivoFileSystem.txt', console.log);

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No he podido escribirlo', err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    })
}

escribir(__dirname + "/NodeJsCurso/archivoFileSystem.txt", console.log)