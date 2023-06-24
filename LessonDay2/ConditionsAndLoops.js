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

Conditional Statement: 

If statement: code will be executed if the expression
evaluates to true*/

var firstName = 'Abby';

if (firstName == 'paul') {
    console.log('hello, paul.')
} else {
    console.log('Hey, ' + firstName + '!')
}

/*else statement will be evaluated if the "if" 
statement evaluates to false*/

var costCandy = 3.00; 

if (costCandy < 2) {
    console.log('We will buy 2 candy bars.')
} else if (costCandy < 3) {
    console.log('We will only buy 1 candy bar')
} else {
    console.log('no thanks!')
}

/*Switch Statement: used to evaluate a variable and provide multiple
different code blocks that can be executed based on the value 
of the variable*/


var grade = 'B'; 
switch (grade) {
    case 'A':
        console.log('90-100');
        break; /*break means as soon as we hit the matching case,
         exit out and do not check other conditions*/
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
is the process of combining the statements 
with the logical and operator*/

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


  /* DRY method: don't repeat yourself; code should 
  never be duplicated because it creates more places
  to have to change something if there is a problem; 
  Loops are designed for code that will repeat 
  until a condition is met */

/*Loops contain parentheses with specific conditions and a body 
denoted by curly braces and will excute over and over until 
the condition in parentheses is false */

 /* "For loops": have 3 sections inside the parentheses 
 separated by two semicolons; the first section is 
 where you declare a variable; the most common 
 variable in a for loop is an "i"; the second 
 section is the Boolean expression that 
 determines if the loop performs an iteration; 
 the third section is the post-iteration: what 
 happens after the loop completes an iteration.*/
  
/*For loops are good when you know how many 
times you need to iterate (loop through your 
code*/

/* for (let i = 0 (a regular variable); i < 10 (as long as 
"i" is less than 10 we will performa an iteration); i++) {console.log(i);}
  let i = 0; runs; then i < 10; runs; then 
    console.log(i); runs; then we jump up to i++ 
    which runs the post iteration where we increment "i")*/

    for (let i = 0; i < 10; i++) {
        console.log(i); /*this code will execute; it is the 
        body of the for loop*/
      }    
      
      /* this loop above will iterate as long as the value of "i" 
      is less than 10; everything in the braces is the body of the 
      loop; the iteration performs until it reaches the point 
      that "i<10" is false*/
    
      console.log("whatever is next");
    
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0)
        console.log(i);
    } /*even numbers only are printed;"i" is a common variable 
    for loops meaning "index"; % means "mod" */
    
    /* we use for loops when we know how many times we want 
    to iterate, or if there's an array we want to iterate 
    over each element in it*/
    
    let names = ["Sam", "Tom", "Hillary"];
    
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
    
    /*While loops has less setup than "for loops", and good when  
    you have to do something until a condition is met, 
    but you have less knowledge of how many iterations are needed */
    
    /* the following is an infinite loop because a is always 0: 
    let a = 0; 
    while (a < 10) {
    console.log(a);
    }  If the variable never changes, the condition never changes;
     See below changes to above */ 
    
     let z = 110; 
    
     while (z < 10) {
     console.log(z);
     z++
     } 
    
    /* Do while loops are like "while loops", but they always 
    iterate at least once and we check the condition at the end
    Do While loop: This loop functions much like a While loop, 
    except that a While loop has the possibility of never running 
    if its Boolean expression evaluates to false the first time, 
    and a Do While loop will always execute at least once since 
    the expression is at the end. Let's take a look at an example*/
    
    do {
      console.log(z);
    } while (z < 10)
    
    /* "For in loop" and "for of loop" each perform an iteration for 
    each element or item in an array (an array is a list of values)*/
    
    for (i in names) {
      console.log(i);
    }
    
    /* "For of loops": instead of looping through the index, it loops
    through the object (the value) itself*/
    
    for (name of names) {
      console.log(name);
    }
    






