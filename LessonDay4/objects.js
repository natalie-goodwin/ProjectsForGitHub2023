// An object is a structure that logically groups 
// data 
// and functionality together
// Objects have properties -- pieces of data 
// that define it, 
// as well as functionality

// Object literals make up an object's property 
// and functionality - or methods - 
// by wrapping a comma-separated list of 
// key-value 
// pairs inside curly braces

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12, 
    weight: 7, 
    color: 'black',
    dvdName: 'Mulan',
     printDVDName: function() {
        console.log(this.dvdName) /*the 'this' keyword
        refers to the object itself; because 
        dvdName is a property inside the object rather 
        than outside the object, we use 'this'*/
     } /*printDVDName is a method*/
}; /*height, width, depth, weight, and color 
are keys, and the descriptions given are
values of the object literal that 
describe the object dvdPlayer; a method
is a function that belongs to an object; 
printDVDName is the method that
provides functionality*/

/*although some people use function and method
synonomously, they are different -- a function is
a stand-alone piece of functionality, while a 
method is a function that belongs to an object*/ 

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();
/*dot notation: you type out variable, 
add a dot, and then access the values by
adding keys: variable.method  */

/*object literals allow for grouping related
data instead of having multiple variables */
// see MDN documentation for strings and arrays