
// ========================{  Object Oriented Programming In JavaScript   }============================//
// Revisiting JS





// Use Condition because multiple values funcrion construction
// For Example
/*
const stu1 = {
    name: "adam",
    age: 25,
    marks: 85,
    getMarks: function(){
        return this.marks;
    }
};
const stu2 = {
    name: "adam",
    age: 25,
    marks: 85,
    getMarks: function(){
        return this.marks;
    }
};
const stu3 = {
    name: "adam",
    age: 25,
    marks: 85,
    getMarks: function(){
        return this.marks;
    }
};
*/

// There are multiple function and dataTypes are defind we can reduced this by OOPs
//To Structure our code


//[1] Object prototypes
let arr1 = [1,2,3];
let arr2 = [25, 62, 312];
arr1.sayHello = () =>{
    console.log("Hello!, i am arr");
};

console.log(arr1.sayHello === arr2.sayHello);  // false
console.log("abc".toUpperCase === "xyz".toUpperCase);  // true  it point to the same toupperCase function of same object

arr1.__proto__       // > [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]





// [2] Construction Function (Factory Function)
// A Factory function that create object

/*      // Example 
function Student(name, age)
{
    this.name = name;
    this.age = age;
    this.introduction = function()
    {
        console.log("Hi, My name is "+ this.name + "and I am " + this.age + " year old");
    }
}
// Using Property and methods
const c1 = new Student("Aman", 25);
const c2 = new Student("Pal", 56);
console.log(c1.name);
console.log(c2.age);
c1.introduction();
c52.introduction();
*/
 
/*
function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, I am ${this.name}`);
        }
    };
    return person;
}
let p1 = PersonMaker("Aman", 45);
*/
/*> p1
< {name: 'Aman', age: 45, talk: ƒ}
< age: 45
< name: "Aman"
> talk : ƒ talk() 
> [[Prototype]] : Object */



// [3] New Operator & Constructor
// Constructors -> do not return anything & start with capital
/*
function Person(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function() {
    console.log(`Hi, My name is ${this.name}`);
}
let p1 = new Person("Mohit", 25);
let p2 = new Person("Johen", 45);
console.log(p1.talk === p2.talk);     // true
/* > p1
> Person {name: 'Mohit', age: 25}
    < age : 25
    < name : "Mohit"
    < [[Prototype]] : Object
      > talk: ƒ () constructor : ƒ Person(name, age)
      > [[Prototype]] : Object
*/





// [4] Classes 
// Classes are a templates for creating objects
class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
let p1 = new Person("Mohit", 25);
let p2 = new Person("Johen", 45);
/* > p1
> Person {name: 'Mohit', age: 25}
    < age: 25
    < name: "Mohit"
    > [[Prototype]] : Object
       > constructor: class Person
       > talk : ƒ talk()
       > [[Prototype]]: Object
*/




// [5] Inheritance
class Person {
    constructor(name, age){
        console.log("Person class Constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`HI, I am ${this.name} & My age is ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, marks){
        console.log("Student class Constructor");
        super(name, age);      // Parent class constructor is being called
        this.marks = marks;
    }
    talk() {
        console.log(`HI, I am ${this.name} & My age is ${this.age}`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        console.log("Teacher class Constructor");
        super(name, age)     // Parent class constructor is being called
        this.subject = subject;
    }
    talk() {
        console.log(`HI, I am ${this.name} & My age is ${this.age}`);
    }
}

// Another Example of in heritance
class Mammal{        // Base class (Parrent class)
    constructor(name){
        this.name = name;
        this.type = "Warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Dogs extends Mammal{          // Derived class (child class)
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Wooff...");
    }
    eat(){              // overRide function
        console.log("Dogs im eating",this.name);
    }
}

class Cats extends Mammal{         // Derived class (child class)
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meow...");
    }
}
