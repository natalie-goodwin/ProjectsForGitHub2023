/*Promises -- solves same problem as a callback, but much cleaner 
to write and produce code that is easier to read; a promise is an 
object that represents the eventual completion or failure of an asynchronous
operation; asynchronous functions can return a promise and we 
can use the promise to do something if the call was successful
or do something else, if unsuccessful

Then and Catch methods handle completion and failure 
of an operation*/

doSomethingThatReturnsAPromise() /*function being called*/
.then((value) => { /*pass a function and log it out when it returns */
    console.log(value);
}).catch((err) => { /*if it doesn't return, give an error and log it out */
    console.error(err)
}); /*calling a function that returns a promise */


/*2nd possibility below  */

function handleEvent(value) {
    console.log(value);
}

function handleError(err) {
    console.error(err);
}

doSomethingThatReturnsAPromise() 
    .then(handleEvent) 
    .catch(handleError);
/*Promises can also catch other promises*/