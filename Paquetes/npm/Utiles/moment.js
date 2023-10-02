//para trabajar con fechas

const moment = require('moment');


let present = moment();
console.log(present.toString());

console.log(present.format('YYYY/MM/DD -HH:mm'));