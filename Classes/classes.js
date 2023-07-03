/*Classes: useful for grouping properties and functionality
together to provide a representation of an object
*/
/*clas Student has variables identifying a student and
 methods that outlies functionality the student object 
 performs in the program*/


class Student { /*class follows Pascal instead of camelCase */
    constructor(firstName, lastName, phoneNumber, grade) /*parameters*/{
        this.firstName = firstName; /*firstName is the assigned value from the argument */
        this.lastName = lastName; /*lastName is the assigned value from the argument */
        this.phoneNumber = phoneNumber; /*phoneNumber is the assigned value from the argument */
        this.grade = grade; /*grade is the assigned value from the argument */
    } /*creating an instance of Student with properties being 
    initialized; 
    everything inside the brackets is the blueprint for 
    the class; 
    'this.' specifies the field that belongs to the instance; 
     'this.firstName' represents the first name for a specific 
     student in question */
    
    introduce() { /*this is the method and we declare below what the method will do */ 
        console.log(`${this.firstName} ${this.lastName} 
                can be reached at ${this.phoneNumber}. Final
                grade earned: ${this.grade}.`);  /*template literal */    
                /*functionality is here */
                /*a method is a function belonging to a class */
    }
}

/*instances: passing values into a constructor */
let student1 = new Student('Tom', 'Sawyer', '5558884444', 'A');
let student2 = new Student('Anne', 'Shirley', '5554632222', 'A');
let student3 = new Student('Huck', 'Finn', '5551113476', 'A');

/*call introduce method on each student */
student1.introduce();
student2.introduce();
student3.introduce();

/*each class should be its own thing with its 
own data and functionality; 

'new' keyword is instantiating an instance of an object; 
it instanciates the object and it runs the code inside of the
constructor*/
