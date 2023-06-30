// JS is single-threaded, meaning it only runs one line of code at a time
// This is fine unless we have code that reads or writes to an external program
// or has to wait for something outside of our code's control.
// When this happens, the line of code waiting on an external resource
// could end up blocking the following lines of code from running
// until the line completes. JS was built to be event driven so it doesn't 
// wait for each line of code to finish. It moves onto the next line of 
// code after calling each line. 

let username = sentHTTPRequest('getUser'); 
console.log(username)
/*sending a request to get a username; it will log as undefined because
sentHTTPRequest hasn't returned yet; Callbacks -- pass a function into another
function to be called back after that code is complete */


function logUserName(user) {
    console.log(user);
}

sendHTTPRequest('getUser', 'logUserName' )
/*logUserName function is passed into the 
sendHttpRequest function as an argument; sendHttpRequest function
does what it needs and the last line of code in the
function would be a call to the logUserName function where 
it passes the username it grabbed in as an argument; and the other
function logs it out; 
 */

sendHTTPRequest('getUser', user => console.log(user));
/*creates an anonymous function; this is used when working with 
third-party libraries*/
