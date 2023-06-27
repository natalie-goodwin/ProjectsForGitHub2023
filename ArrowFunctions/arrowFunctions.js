// arrow functions -- fat arrow functions --
// binds current scope to the function

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName("Tom", "Sawyer"));


//Note: if you have multiple lines or curly braces are needed, the return 
// keyword is needed
const someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}
console.log(someFunction("Hello", 3));  /*result is a blank string here; 
'a' is a string and 'b' is 
a number, and we will return the string concatenated for the number
of times in 'b' */

// with above, if you have one parameter, 
// you don't need it in parentheses -- just write
// it out
// if you don't have any parameters, you need 
// empty parentheses
//best practice is to create a const variable and assign 
// the value to it when creating a stand-alone function so value
// of function will not be changed later on