class Person {
    constructor(name, age) {
        this.name = name; // Store the name
        this.age = age;   // Store the age
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle; // Store the job title
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
const alice = new Person("Alice", 25);
alice.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

bob.greet(); // Output: Hello, my name is Bob, I am 30 years old.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
