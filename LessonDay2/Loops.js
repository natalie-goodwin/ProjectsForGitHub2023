/*Loops: repeat something until 
condition is met

For loop is good when you 
know the number of iterations
*/

for (let i = 0; i < 10; i++) {
    console.log (i)
} 
console.log('whatever is next')/*as long as i is less than 10 it will 
iterate */

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
} /* prints only even numbers */ 



let names = ['Paul', 'Jim', 'Mary']; 

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} /*iterate over each element in the array*/

/*while loop: more flexibility and you don't have knowledge of 
how many iterations are needed */

/* this is an infinite loop

let a = 0;
while (a < 10) {
    console.log(a);
}
*/

let a = 110;
while (a < 10) {
    console.log(a);
    a++;
} /*here we make sure it does not have an infinite loop 
by  adding a condition */

/* do while loop iterates at least once, and check the condition 
at the end*/

do {
    console.log(a);
} while (a < 10) /*it did not print out all nimbers because
a is 110 and is not < 10; but it did iterate once which is why it 
printed out 110*/

/*for in loop and for of loop are for iterations of elements in 
arrays*/

for (i in names) {
    console.log(names[i]);
} // start at 0 and increment without the incrementation code


for (name of names) {
    console.log(name)
}
//loops through the value itself instead of through the index



























