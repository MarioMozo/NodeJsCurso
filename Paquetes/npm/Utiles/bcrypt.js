const bcrypt = require('bcrypt');


const password = '1234segura!';

// se extrae el mdulo  para encriptar "bcrypt" con la funcion hash, el cual solicita 3 parametros
// Parametro uno es el que vamos a encriptar variable; "Password", seguido de las veces que va a encriptar (algoritmo)
// y por ultimo se le pasa el argumento de funcion con el parametro err y hash

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);
});

//salida de hash contraseña encriptada