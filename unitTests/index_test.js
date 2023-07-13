/*unit test is here */

var expect = chai.expect; /*anytime we call 'expect', we really call chai's 
expect */

describe('MyFunctions', function() {
    describe('#doSomething', function(){
        it('should concatenate the two parameters', function(){
            var x = doSomething("Hello", 5); /*argument where we call the function */
            expect(x).to.equal("Hello5") /*this is what we expect it to do */
        }); /*tests doSomething function; in plain English, you tell
        it what to do with the 'it' method */
        it('should throw an error if first parameter is not a string', function(){
            expect(function(){ /*this 'it' method is second test case */
                doSomething(5,5);
            }).to.throw(Error); 
        });
    });
}); 

/*this is the unit text; variable imports the chai expect method; describe 
takes a name for the group of tests being set up,  and it takes a function 
that facilitates the test; */