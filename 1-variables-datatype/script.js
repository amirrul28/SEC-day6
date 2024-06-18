console.log("Hello,World!");

// JavaScript Intro 101

//1. Variables
// assign a value to a variable
// var vs let vs const
// var - traditional, let - newer
// var x = 5;
let y = 10;
const pi = 3.14;
const birthYear = 1990;
// birthYear / fisrtName / lastName --> variable naming conventions
// camel case

const firstName = "Amirrul";
const lastName = "Shukur";

console.log(y);
console.log(pi);
// reassign variable value - ONLY for other than const

y = 40;
// pi = 3.5;
console.log(y);

// 2. Data Types
// - Number
let num = 3.14;

// - String (wording)
// ada quote (double, single, or backticks)
let str = "Hello World";
let str2 = "Hello World";
let str3 = `Hello World`;

// - Boolean (TRUE or FALSE)
let isMale = true;
let isFemale = false;

// - Undefined (variable without value)
let z;
console.log(z);

// - Null
let a = null;
console.log(a);

// - Object (use curly braces)
let person = {
  firstName: "Amirrul",
  lastName: "Shukur",
  age: 28,
};
console.log(person);

// - Array (use square bracket)
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// determine data type
console.log(num, typeof num);
console.log(str, typeof str);
console.log(isMale, typeof isMale);
console.log(isFemale, typeof isFemale);
console.log(z, typeof z);
console.log(person, typeof person);
console.log(fruits, typeof fruits);
