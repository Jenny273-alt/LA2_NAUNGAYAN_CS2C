// Variables and Constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"; 
let e = 15;

// Display the sum
let sum = a + b + c + (d) + e; // Convert d to an integer before adding
console.log("Sum of a, b, c, d, and e: " + sum);

// Compare d and e
console.log("d > e: " + (d > e));
console.log("d < e: " + (d < e));
console.log("d >= e: " + (d >= e));
console.log("d <= e: " + (d <= e));
console.log("d === e: " + (d === e)); // Strict equality, checks both value and type

// Operations and Display
let subtractionResult = a - b - c - (d) - e;
console.log("Subtraction result: " + subtractionResult);

let multiplicationResult = (a * c) / e;
console.log("Multiplication result: " + multiplicationResult);

let exponentResult = e ** c;
console.log("Exponent result: " + exponentResult);

e = c ** 3;
console.log("New value of e: " + e);