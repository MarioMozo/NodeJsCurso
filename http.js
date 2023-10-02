const { log } = require('console');
const http= require('http')

http.createServer(router).listen(3000);

function router(req, res){ //pasa por parametros la solicitud y la respuesta req, y res.
    console.log('Nueva peticion');      //muestra el inicio 
    console.log(req.url);               //solicitud a la url

    switch (req.url) {
        case '/hola':
            res.write('Ya se lo que quieres:Hola');
            res.end();
            break;

        default:
            res.write('Error 404: No se que quieres')
            res.end();
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'});
    // res.write('Ya se usar HTTP'); 

    // res.end();
}
console.log('Escuchando puerto 3000');