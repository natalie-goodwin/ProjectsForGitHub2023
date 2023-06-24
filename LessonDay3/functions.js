/*functions allow us to write code and 
then give it a name so we can 
reuse it anytime we need to*/

function myFunction(){
    for (let i= 0; i < 100; i++){
        console.log(i);
    } /*these are the instructions for a function; 
    but on its own nothing happens; you have to 
    invoke the function*/
} /*any programming construct can go inside a function */
/*parameters go inside the parentheses */

/*myFunction(); //this line invokes the function

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
} /*firstName and lastName are the parameters 
of createFullName */

/*createFullName('Abby', 'Newman');
/*Abby and Newman are arguments */

/*parameter is a part of the declaration
of the function
argument is used when invoking the function */

/*retrn statement ends the function and 
returns whatever value follows;  */
/*myFunction(); //this line invokes the function

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
} /*firstName and lastName are the parameters 
of createFullName */

/*console.log(createFullName('Abby', 'Newman'));*/

myFunction(); //this line invokes the function

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
} /*firstName and lastName are the parameters 
of createFullName */

var fullName = createFullName('Abby', 'Newman');
console.log('Welcome, ' + fullName);
/*value stored as a variable */