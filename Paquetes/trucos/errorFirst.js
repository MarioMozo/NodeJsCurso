function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (e) {
            callback(e);            
        }

    }, 1000)

    asincrona(function(err, dato){
        if(err){
            console.error("Tenemos un error");
            console.error(errs); 
            return false;
        }
        console.log('Todo va bien', dato);
    })
}