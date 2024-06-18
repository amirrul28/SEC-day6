// Conditional Statement

// 1. if statement
if (true) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// variable assignment to boolean value
// hard coded value
let isMoreThan18YearsOld = true;
console.log(typeof isMoreThan18YearsOld);

if (isMoreThan18YearsOld) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//comparison operator
const birthYear = 2000;
let currentYear = 2024;
let age = currentYear - birthYear;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
