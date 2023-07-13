/*unit testing: process of writing code to test our
application code; test small pieces of functionality 
in the application code that we refer to as units; this 
creates a safety net for our code's logic so that 
if a developer changes something that breaks the code, 
it will cause the test to fail which notifies the 
developer that the code is broken; without the unit test,
the developer may never know something was broken;

2 of the most common frameworks that work together to 
test JavaScript are mocha and chai

Must install node package manager: 
in command prompt: 
-- choose the files where you want to initialize npm
-- type npm init 
-- npm install mocha
-- npm install chai


once installed, it downloads a directory
called node_modules; all code for mocha
and chai is installed there*/ 

function doSomething(x, y) { 
    if (typeof x != 'string') {
        throw new Error ('x must be a string')
    }
    return x + y;
}
/*function will check to see if x is not a string; if it isn't a 
string, it will throw an error if the first parameter is not a string;
it will concatenate the two parameters in index_test.js; we will test 
the path we expect to work, as well as what happens when we pass in an 
argument into the first position that isn't a string; user test will
be written in index_test.js */

