/*Handling Exceptions: code can result in errors; if a program 
that our program is dependent on fails, it could cause an error
in our program regardless of how our code is written; 
we can use try -- catch blocks to prevent this from happening 

we can catch exceptions and tell our program how to handle them 
instead of crashing because it doesn't know how to handle 
the exception */ 

// list.push('hello');
// console.log('goodbye'); 
/*we get an error because we are trying to push code to an array 
that doesn't exist; we can fix this by adding try and catch blocks*/
try {
list.push('hello');
} catch(err) {
    console.log(err);
}

console.log('goodbye');
/*even though an error was thrown it logs goodbye because the 
exception was handled and the program keeps running*/

/*with a finally block, code will run whether an exception is thrown
or not */

/*handling exceptions is for the exceptions we don't have control of; 
it isn't designed as an excuse to write poor code; exceptions are 
used for errors in other people's libraries, networking exceptions,
or other exceptions we don't have control of.*/