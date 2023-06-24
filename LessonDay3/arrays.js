/*Arrays are a data type that allow us 
to group similar variables together 
and refer to the values by location; 
instead of assigning each name to 
a separate variable; assigning 
individual variables is tedious 
and will not scale and isn 't 
maintainable; instead, 
assign an array to a single variable, 
and then add and remove names from 
the array, and access it's specific 
location in the array; the location or
index of an array is zero-based, and the
first element in an array is 0, and the last
value will always be located at the index 
just one less than the length of the array */

/*A  position 0
B
C
D
E
F   position 5; this is true even though 
there are 6 elements for the array*/

var customerNames = [];
customerNames.push('Sam');
customerNames.push('Bob');

console.log(customerNames[0]) 
//accesses first name in array
console.log(customerNames[1]) 
//accesses second name in array

for (let i= 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

