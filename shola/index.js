/*
====================================================================
BEGINNER JAVASCRIPT ESSENTIALS
Variables, Data Types, Console.log, Concatenation & Math Operations
====================================================================
*/

// ============================================
// 1. CONSOLE.LOG - YOUR DEBUGGING FRIEND
// ============================================

console.log("🚀 Welcome to JavaScript!"); // Basic output
console.log("Let's learn the fundamentals!");

// ============================================
// 2. VARIABLES - STORING DATA
// ============================================

// let - for values that can change
let studentName = "John";
let age = 20;
console.log("Student:", studentName, "Age:", age);

// const - for values that stay the same
const schoolName = "JS Academy";
const currentYear = 2024;
console.log("School:", schoolName, "Year:", currentYear);

// Variables can be updated (except const)
studentName = "Jane";
age = 22;
console.log("Updated:", studentName, age);

// ============================================
// 3. DATA TYPES - DIFFERENT KINDS OF DATA
// ============================================

// STRING - Text data
let firstName = "Alice";
let lastName = 'Johnson';
console.log("Strings:", firstName, lastName, "Type:", typeof firstName);

// NUMBER - Integers and decimals
let userAgeNumber = 25;
let price = 19.99;
console.log("Numbers:", userAgeNumber, price, "Type:", typeof userAgeNumber);

// BOOLEAN - True or False
let isStudent = true;
let hasJob = false;
console.log("Booleans:", isStudent, hasJob, "Type:", typeof isStudent);

// UNDEFINED - No value assigned
let notAssigned;
console.log("Undefined:", notAssigned, "Type:", typeof notAssigned);

// NULL - Intentionally empty
let emptyValue = null;
console.log("Null:", emptyValue, "Type:", typeof emptyValue);

// ============================================
// 4. STRING CONCATENATION
// ============================================

// Method 1: Using + operator
let greeting = "Hello" + " " + "World!";
console.log("Concatenation:", greeting);

// Method 2: Joining variables
let first = "JavaScript";
let second = "Programming";
let combined = first + " " + second;
console.log("Combined:", combined);

// Method 3: Template literals (MODERN WAY)
let userName = "Sarah";
let userAge = 28;
let message = `Hello ${userName}, you are ${userAge} years old!`;
console.log("Template literal:", message);

// Practical example - Receipt
let productName = "Laptop";
let productPrice = 999.99;
let receipt = `Product: ${productName}, Price: $${productPrice}`;
console.log("Receipt:", receipt);

// String methods
let text = "JavaScript is Amazing!";
console.log("Original:", text);
console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// ============================================
// 5. ARITHMETIC OPERATIONS
// ============================================

let num1 = 20;
let num2 = 8;
console.log(`Math with ${num1} and ${num2}:`);

// Basic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log("Addition:", num1, "+", num2, "=", sum);
console.log("Subtraction:", num1, "-", num2, "=", difference);
console.log("Multiplication:", num1, "*", num2, "=", product);
console.log("Division:", num1, "/", num2, "=", quotient);
console.log("Remainder:", num1, "%", num2, "=", remainder);

// More math examples
let radius = 5;
let pi = 3.14;
let area = pi * radius * radius;
console.log(`Circle area (radius ${radius}):`, area);

// Working with decimals
let price1 = 19.99;
let price2 = 25.50;
let total = price1 + price2;
console.log(`Total: $${price1} + $${price2} = $${total.toFixed(2)}`);

// Increment operations
let counter = 10;
console.log("Counter:", counter);
counter = counter + 1; // or counter++
console.log("After +1:", counter);
counter = counter * 2;
console.log("After *2:", counter);

// ============================================
// 6. TYPE CHECKING & CONVERSION
// ============================================

// Check types
console.log("Type checking:");
console.log(typeof "Hello"); // string
console.log(typeof 42); // number  
console.log(typeof true); // boolean
console.log(typeof [1,2,3]); // object (arrays are objects!)

// Convert types
let stringNum = "123";
let realNum = Number(stringNum);
console.log(`"${stringNum}" converted to number:`, realNum);

let numToString = String(456);
console.log(`456 converted to string: "${numToString}"`);

// Automatic conversion
console.log("Auto conversion:");
console.log('"5" + 3 =', "5" + 3); // "53" (string)
console.log('"5" - 3 =', "5" - 3); // 2 (number)

// ============================================
// 7. PRACTICAL EXAMPLES
// ============================================

// User profile
let user = {
  firstName: "Emma",
  lastName: "Wilson", 
  age: 26,
  email: "emma@email.com"
};

let profile = `
👤 User: ${user.firstName} ${user.lastName}
📧 Email: ${user.email}
🎂 Age: ${user.age}
`;
console.log(profile);

// Shopping calculation
let itemPrice = 29.99;
let quantity = 3;
let subtotal = itemPrice * quantity;
let tax = subtotal * 0.08; // 8% tax
let finalTotal = subtotal + tax;

console.log("🛒 Shopping Cart:");
console.log(`Item: $${itemPrice} x ${quantity} = $${subtotal.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Total: $${finalTotal.toFixed(2)}`);

// Temperature converter
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// ============================================
// 8. SUMMARY & TIPS
// ============================================

console.log(`
📚 What we learned:
• Variables: let (changeable), const (constant)
• Data types: string, number, boolean, array, object
• console.log() for output
• String joining with + and template literals
• Math: +, -, *, /, %
• typeof for checking types

💡 Best practices:
• Use const by default, let when changing
• Use template literals for strings: \`Hello \${name}\`
• Use descriptive names: userName not u
• JavaScript is case-sensitive!
`);

console.log("🎉 Great job! You know the JavaScript basics!");