// template literals are declared like strings, 
// but text is wrapped in back ticks instead of 
// single or double quotes; allows for creating
// multi-line strings; you can take variables or
// code and make it dynamic inside the template
// literal

let myString = `Hello
world. 
My name
is Natalie.`
//template literal takes into account spaces 
// between lines

console.log(myString);

let anotherString = "Hello\nworld.\nMy name\nis Natalie."
// old way of doing strings
console.log(anotherString);

console.log(`Six times five = ${6 * 5}`) 
// interpolate variables and expressions
// into strings; interpolate: execute code inside
// a string or in a different language

