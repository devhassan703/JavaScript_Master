// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "  Hassan  ";
console.log(firstName.length);
// trim use to remove spaces from the string
let  new_firstname = firstName.trim(); // create a new variable and assign the trim value & print
console.log(new_firstname);
console.log(new_firstname.length);

// 2nd method same trim method assign to again same variable and print method is below
let secondName = "        Faisal       ";
console.log(secondName.length);
secondName = secondName.trim();
console.log(secondName);
console.log(secondName.length);


// toUpperCase

let myName = "hassan";
myName = myName.toUpperCase()
// toUpperCase or any other string method sirf string method perform karta hy usk liye,
// kisi b string k sath .toUpperCase() wagera likhtay hain, but agr just 
// myName.toUppercase() karen to ye string muteable hota hy ku k ye method perform ho chuka hy 
// excact value k liye ise kisi variable main store karna zaroori hy otherwise same value hi rehti hy 
console.log(myName);


// toLowerCase
myName_lowerCase = myName.toLowerCase();
// same uppercase value to lower main change kar k new variable main store karwa lia 
console.log(myName_lowerCase);


//slice()

let newString = "Hassan Faisal";
newString = newString.slice(0,6)
// string main agr value slice(0,6) dain gay to slice just ye character rakhy baki remove hoga
console.log(newString);
newString = newString.slice(3)
// string main agr value slice(3) 1 value dain to slice jitni value di hogi use remove kary ga
console.log(newString);











