// typeof operator  use

// Data types (primitive data types)
// numbers 2,4,
// string "hassan"
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 29;
console.log(typeof age);
age = "hassan faisal 29 year"
console.log(typeof age);

// convert numer to string
let myAge = 29;
myAge = myAge + ""; // this is the trick to change the number to string, variable ko
// empty string k sath add kar dain to number string main convert ho jata hy.
console.log(typeof myAge);
let currentAge = 30
console.log(typeof(currentAge + "")); // short method to convert number to string and check type


// string to number
let myStr = "30"
myStr = + myStr; // add plus icon before string variable to change into number tyspe
console.log(typeof myStr);

// acutal method to change the type
let newAge = 29
newAge = String(newAge); // string method use to change into string
console.log(typeof newAge)

newAge = Number(newAge) // number method use to change into string
console.log(typeof newAge)





