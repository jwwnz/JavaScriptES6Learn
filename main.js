// CONST & LET
let name = "John";
let test;

name = "Jack";

const person = {
  name: "John",
  age: 33
};

person.name = "jack";

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log("hello");
// }

const sayHello = name => console.log(`Hello ${name}`);

// sayHello("James");

const fruits = ["Apples", "Oranges", "Grapes"];

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit + index));

// MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Jongwoo" },
  { id: 3, name: "Min" }
];

const people2 = people.filter(person => person.id != 2);

console.log(people2);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
