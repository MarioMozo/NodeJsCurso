let buffer = Buffer.from([1,2,3]);
let buffer1 = Buffer.from('Hola');
console.log(buffer);
console.log(buffer1);

let bufferABC = Buffer.alloc(26);
for(i = 0; i <= bufferABC.length; i++){
    bufferABC[i] = i+96;
}

console.log('Abecedario: ' + bufferABC.toString());