let x,y,z;

x=10;
y = '10';
z=30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;


console.log("newX is " + newX);
console.log(x);
console.log("Does X equate to Y?  " + (x == y));

let timeInMs = Date.now();
let d2 = new Date(timeInMs);


console.log("Years since epoch are " + Math.abs(d2.getUTCFullYear()-1970));
// console.log("Months since epoch are " + Math.abs(d2.getUTCMonth()-1970));
// console.log("Days since epoch are " + Math.abs(d2.getUTCHours()-1970)/24);
