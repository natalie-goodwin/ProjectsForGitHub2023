// 5 Methods on the Array: 
// Map method invokes a function for each element in an array and creates
//a new array from the returned values of each iteration's function invocation
// useful for transforming the data in an array in some manner


// We have an array of names and we want to create an array that 
// contains the length of each name (string, element) in an array: 

let names = ['Sam', 'Tom', 'Bill', 'Candy', 'Fred', 'Deacon'];
let lengths = names.map(function(element) {
    return element.length; 
}) /*this variable will hold the new array; 
map takes a function, and calls that function once for each element in the array;
whatever it returns will be an element in the new array; lenth of the element
passed in for the function call  */
console.log(lengths) 

/*Reduce method takes all values in an array and reduces them to a final value
the final value is the result of a reducer function passed in as an argument;
used anytime you want to perform an operation on all elements in an array
that results in a single value; summing values, averaging values, or returnin
an object with properties composed of multiple objects */

let sum = lengths.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue
}, 10);

console.log(sum); /* accumulates all values together; result of 
the previously returned value; each time the function executes, 
the accumulator will be whatever was returned by the previous 
execution; the second element is the current value in the 
array; current index of the array, and the array itself 
can be additional parameters; reduce can take a second 
parameter after the function which is the initial 
value to start the accumulator at; if no initial 
value is supplied the first element of the array 
is used by default*/

/*For each method: invokes a function for each element 
in an array but does not return a new array from the 
results of the invocation */

names.forEach(function(element) {
    console.log(element)
});

/*Filter method: invoke a function that returns a boolean 
value on each element in an array; returns an new 
array containing all the elements where the invoked method 
returns true; allows us to use a boolean expression to
filter out specific element and only keep the ones
that pass the boolean expression*/

//filter for names with an even number of characters

let evens = names.filter(function(element) {
    return element.length % 2 == 0
}); /*if the length is even, it will return true */
console.log (evens)

/*Splice method can be used to alter the contents of an array
by adding, modifying, or removing elements from an array at
a specific location;*/

let removedElement = names.splice (1, 3); /* first parameter is location to start at;
second parameter is how many elements to remove; splice method returns an
srray of all elements removed; */
console.log(removedElement);
