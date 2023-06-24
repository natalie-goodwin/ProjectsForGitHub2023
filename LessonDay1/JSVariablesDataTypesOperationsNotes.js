/* variables: assign a name to some data; 
when we refer to that name, we refer to the date
JS is dynamically typed language: when we declare a variable
 we don't have to explicitly say what type of data the 
 variable will be representing; JS infers the data type
 based on the data
*/

var accountBalance = 58.33; //number
var momsName = 'Patty Jones'; //string; has double quotes or single quotes
var numericData = 12345; //number
var numericDataDecimal = 123.45; //decimal number aka floating point
var booleanData = true; //boolean
var booleanData2 = false; //boolean also

/*We need to perform operations on data
because having variables all alone isn't enough;
Operations: an operator acts on operands; most commonly
2 operands */
console.log("Hello Everyone!");

console.log(5 + 3); //addition operation acting on operands 5 and 3

console.log(8 - 1);
console.log(3 * 7);
console.log(10 / 5);
console.log(accountBalance - 20);
console.log(accountBalance * numericData);
console.log(4 == 4); //equality operator determines if 2 vales are equal
console.log( 6 == 12);
console.log(accountBalance == numericData);
console.log(accountBalance == 58.33);





//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Variables & Operations Lab
// JavaScript Week 01 Lab  
//



//create a variable to hold the quantity of available plane seats left on a flight

var availablePlaneSeats = 50;
		
//create a variable to hold the cost of groceries at checkout

var costGroceries = 32.14;

//create a variable to hold a person's middle initial

var midInitial = 'A';

//create a variable to hold true if it's hot outside and false if it's cold outside

var hot = true; 
var cold = false;

//create a variable to hold a customer's first name

var firstName = 'Pamela';

//create a variable to hold a street address

var streetAddress = '2114 Maple Road' 
//print all variables to the console

console.log(availablePlaneSeats);
console.log(costGroceries);
console.log(midInitial);
console.log(hot);
console.log(cold);
console.log(firstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
console.log(availablePlaneSeats - 2);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;

console.log(costGroceries + 2.15);

//birth certificate was printed incorrectly, change the middle initial to something else


var midInitial2 = "L";
console.log(midInitial2);

//the season has changed, update the hot outside variable to be opposite of what it was

var hot2 = false;
console.log(hot2);
//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice

var fullName = firstName + " " + midInitial2 + " " + "Smith";
//print a line to the console that introduces the customer and says they live at the address variable

console.log(fullName + " lives at " + streetAddress);