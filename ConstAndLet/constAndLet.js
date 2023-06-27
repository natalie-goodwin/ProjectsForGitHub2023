// ES6 -- ES2015 allows for JS to be written in 
// a more object-oriented approach using classes
//Const -- for a constant variable in which
// value cannot change; prevents accidental
// changing of variables
//Let -- declare variable that exists only within 
// a blocked scope; variable can be reused outside 
// of the block


var x = 10; //exists outiside of the block

console.log(x)

{
    let x = 2; /*only exists inside the block */
    console.log(x)
}

console.log(x); /*because var x is outside block, 
the answer is once again 10 */

const pi = 3.14159; 

console.log(pi);
