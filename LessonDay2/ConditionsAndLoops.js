/*Boolean data is true or false -- a conditional that 
determines a further action

Boolean Logic: ==, >, <, and, or, and/or resulting in true or false; 
Boolean expression evaluates to another Boolean value 

== equal (type does not matter, i.e. '3' == 3 is true)
=== strictly equal (type matters)
>  greater than
<  less than
>= greater than or equal to
<= less than or equal to 

&& and 
|| or

&& means both parts of an expression evaluate to true
|| means only one part of the expression has to evaluate to true

5 > 4 && 2 > 4 false because one statement is false in 
an 'and' situation 
5 > 4 || 2 > 4 true  because one part of the boolean 
expression is true in an 'or' situation

Conditional Statement

If statement: code will be executed if the expression
evaluates to true*/

var firstName = 'paulette';

if (firstName == 'paul') {
    console.log('hello, paul.')
} else {
    console.log('Hey, ' + firstName + '!')
}

/*else statement will be evaluated if the "if" 
statement evaluates to false*/

var costCandy = 3.01; 

if (costCandy < 2) {
    console.log('We will buy 2 candy bars.')
} else if (costCandy < 3) {
    console.log('We will only buy 1 candy bar')
} else {
    console.log('no thanks!')
}

var grade = 'B'; 
switch (grade) {
    case 'A':
        console.log('90-100');
        break; //break means as soon as we hit the matching case, exit out and do not check other conditions
    case 'B':
        console.log('80-89');
        break; 
    case 'C':
        console.log('70-79');
        break;
    default: 
        console.log('failed course')
}

/* The following is a nested statement. It works but it 
is poorly written and needs to be flattened. Flattening 
is the process of combingin the statements with the logical
and operator*/

var a = 5; 
var b = 6; 
if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6.')
    }
}

//This is cleaner and flattened
if (a == 5 && b == 6) {
    console.log('a is 5 and b is 6.')
}

/*Nesting if statements is okay only when you have a 
diverging path based on the nested condition; If the 
first condition is true, you will do something but what 
you do depends on if the second condition is true or not
*/

if (a == 5 && b == 6) {
    console.log('a is 5 and b is 6.')
} else {
    console.log ('a is 5 but b is not 6.')
}  /* in this case it allows for the possibility that 
the second condition is not true even if the first 
condition is true*/








