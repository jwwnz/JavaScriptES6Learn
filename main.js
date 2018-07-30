// CONST & LET
/* These are new ways to set up variables instead of var.
    - const = constants, cannot 'remake/reassign' after initialisation 
    and must be initialised with a value. Can change attributes of the const.
    - let = values that are expected to change. 
*/
let name1 = "John";
let test;

name1 = "Jack";

const person = {
  name: "John",
  age: 33
};

person.name1 = "jack";

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ARROW FUNCTIONS
// Replicates functions in more cleaner syntax.

// function sayHello() {
//   console.log("hello");
// }

const sayHello = name => console.log(`Hello ${name}`);

// sayHello("James");

const fruits = ["Apples", "Oranges", "Grapes"];

// FOREACH
// Easy way to access each item and its index from an array.

fruits.forEach((fruit, index) => console.log(fruit + index));

// MAP
// get back and apply something to a variable
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER
// Get back values specifically excluding certain values.
// This is useful as JS and react const are immutable, and this enables easy access without mutation of variables.
const people = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Jongwoo" },
  { id: 3, name: "Min" }
];

const people2 = people.filter(person => person.id != 2);

console.log(people2);

// SPREAD
// Where you want to access another variables contents, eg. array or object. without typing each one out.

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

console.log(arr3);

const personTemp = {
  name: "brad",
  age: 36
};

const newPerson = {
  ...person,
  email: "brad@gmail.com"
};

// console.log(newPerson);

// DESTRUCTURING
// "Pulling out" values from an object

const profile = {
  name: "john doe",
  address: {
    street: "40 Main St",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile;
const { street, city } = address;

console.log("Name is: " + name, street, city, hobbies[0]);

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("John", 28);
const person2 = new Person("Sally", 35);

console.log(person1.greet());

// SUBCLASSES (extending another class)
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}.00`;
  }
}

const customer1 = new Customer("Kevin", 32, 300);

console.log(customer1.info());

// MODULES

// file 1 (file1.js)
export const name = "Jeff";
export const nums = [1, 2, 3];
export default Person;

// file 2 (file2.js)
import { name, nums } from "./file1";

import Person from "./file1";
