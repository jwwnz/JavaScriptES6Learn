// CONST & LET
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

// SUBCLASSES

// MODULES
