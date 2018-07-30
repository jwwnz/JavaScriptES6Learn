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

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
