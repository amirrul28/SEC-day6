// 3. Operation - Math Calculation

let a = 10;
let b = 30;
let c = a + b;
console.log(c);

// 4. Operation - String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = "firstName + lastName";
console.log(fullname);

let mix = a + firstName;
console.log(mix);

// 5. Operation - Comparison
let x = 10;
let y = 30;
console.log(x > y);
console.log(x < y);
console.log(x >= y);

// 6. Operation - Equality

let p = 10;
let q = "10";
let r = 11;
console.log(p == r);
console.log(p == q);
// deep equality (must same value and type)
console.log(p === q);

// 6. Operation - Inequality

console.log(p != r);
console.log(p != q);
// deep inequality
console.log(p !== r);
// deep inequality (must diff value and type)

// 7. Truthy and Falsy
let t = true;
let f = false;
console.log(t, f);

let num = 0;
let num2 = 1;
console.log(Boolean(num)); //false
console.log(Boolean(num2)); //true
