// ============================================
// JavaScript Day 11: Operators, Conditionals & Loops
// All Code Examples from Class
// ============================================

console.log("🚀 JavaScript Day 11 - Starting Examples...\n");

// ============================================
// PART 1: OPERATORS AND EXPRESSIONS
// ============================================

console.log("📊 === PART 1: OPERATORS ===");

// Arithmetic Operators
console.log("\n🧮 Arithmetic Operators:");
let a = 10;
let b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Modulus: ${a} % ${b} = ${a % b}`);
console.log(`Exponentiation: ${a} ** ${b} = ${a ** b}`);

// Real-World Calculator Example
console.log("\n💰 Shopping Calculator:");
let price = 25.99;
let tax = 0.08;
let quantity = 3;

let subtotal = price * quantity;
let taxAmount = subtotal * tax;
let total = subtotal + taxAmount;

console.log(`Price per item: $${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax (${tax * 100}%): $${taxAmount.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);

// Assignment Operators
console.log("\n📝 Assignment Operators:");
let score = 100;
console.log(`Starting score: ${score}`);

score += 10;  // score = score + 10
console.log(`After += 10: ${score}`);

score -= 5;   // score = score - 5
console.log(`After -= 5: ${score}`);

score *= 2;   // score = score * 2
console.log(`After *= 2: ${score}`);

score /= 3;   // score = score / 3
console.log(`After /= 3: ${score.toFixed(2)}`);

// Comparison Operators
console.log("\n⚖️ Comparison Operators:");
let age = 18;
let votingAge = 18;

console.log(`age = ${age}, votingAge = ${votingAge}`);
console.log(`age == votingAge: ${age == votingAge}`);
console.log(`age === votingAge: ${age === votingAge}`);
console.log(`age != 21: ${age != 21}`);
console.log(`age !== "18": ${age !== "18"}`);
console.log(`age > 16: ${age > 16}`);
console.log(`age >= 18: ${age >= 18}`);
console.log(`age < 21: ${age < 21}`);
console.log(`age <= 18: ${age <= 18}`);

// == vs === Demo
console.log("\n🚨 == vs === Demonstration:");
console.log(`5 == "5": ${5 == "5"}`);   // true (type conversion)
console.log(`5 === "5": ${5 === "5"}`); // false (strict comparison)

// Logical Operators
console.log("\n🧠 Logical Operators:");
let driverAge = 20;
let hasLicense = true;
let hasInsurance = false;

console.log(`Age: ${driverAge}, License: ${hasLicense}, Insurance: ${hasInsurance}`);

let canDrive = driverAge >= 18 && hasLicense && hasInsurance;
console.log(`Can drive (AND): ${canDrive}`);

let canEnterClub = driverAge >= 21 || driverAge >= 18;
console.log(`Can enter club (OR): ${canEnterClub}`);

let isMinor = !(driverAge >= 18);
console.log(`Is minor (NOT): ${isMinor}`);

// Practice Exercise 1: Grade Calculator
console.log("\n🎯 Exercise 1: Grade Calculator:");
let mathScore = 85;
let englishScore = 92;
let scienceScore = 78;

let average = (mathScore + englishScore + scienceScore) / 3;
let passed = average >= 80;
let honorRoll = average >= 90;

console.log(`Math: ${mathScore}, English: ${englishScore}, Science: ${scienceScore}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Passed: ${passed}`);
console.log(`Honor Roll: ${honorRoll}`);

// ============================================
// PART 2: CONDITIONALS
// ============================================

console.log("\n\n🤔 === PART 2: CONDITIONALS ===");

// Basic if statement
console.log("\n🌡️ Temperature Check:");
let temperature = 75;

console.log(`Temperature: ${temperature}°F`);
if (temperature > 80) {
    console.log("It's hot outside! 🌞");
}

if (temperature <= 80) {
    console.log("Perfect weather! 😊");
}

// if...else
console.log("\n🗳️ Voting Age Check:");
let voterAge = 17;

console.log(`Age: ${voterAge}`);
if (voterAge >= 18) {
    console.log("You can vote! 🗳️");
} else {
    console.log("Too young to vote 😔");
}

// if...else if...else
console.log("\n📊 Grade Assignment:");
let testScore = 87;

console.log(`Test Score: ${testScore}`);
if (testScore >= 90) {
    console.log("Grade: A 🌟");
} else if (testScore >= 80) {
    console.log("Grade: B 👍");
} else if (testScore >= 70) {
    console.log("Grade: C 👌");
} else if (testScore >= 60) {
    console.log("Grade: D 😐");
} else {
    console.log("Grade: F 😞");
}

// Real-World Example: Login System
console.log("\n🔐 Login System:");
let username = "admin";
let password = "secret123";
let inputUser = "admin";
let inputPass = "secret123";

console.log(`Attempting login with: ${inputUser} / ${inputPass}`);
if (inputUser === username && inputPass === password) {
    console.log("✅ Login successful! Welcome back!");
} else if (inputUser !== username) {
    console.log("❌ Username not found");
} else {
    console.log("❌ Incorrect password");
}

// Nested Conditionals
console.log("\n🌤️ Weather Decision:");
let weather = "sunny";
let weatherTemp = 75;

console.log(`Weather: ${weather}, Temperature: ${weatherTemp}°F`);
if (weather === "sunny") {
    if (weatherTemp > 70) {
        console.log("Perfect day for the beach! 🏖️");
    } else {
        console.log("Sunny but a bit chilly 🧥");
    }
} else {
    console.log("Maybe stay inside today 🏠");
}

// Switch Statement
console.log("\n📅 Day of Week Messages:");
let dayOfWeek = "wednesday";

console.log(`Today is: ${dayOfWeek}`);
switch (dayOfWeek) {
    case "monday":
        console.log("Start of the work week 😴");
        break;
    case "tuesday":
        console.log("Tuesday blues 💙");
        break;
    case "wednesday":
        console.log("Hump day! 🐪");
        break;
    case "thursday":
        console.log("Almost there! 💪");
        break;
    case "friday":
        console.log("TGIF! 🎉");
        break;
    case "saturday":
    case "sunday":
        console.log("Weekend vibes! 🎮");
        break;
    default:
        console.log("That's not a valid day 🤔");
}

// Switch with Fall-through Example
console.log("\n📝 Grade Switch (with breaks):");
let letterGrade = "B";

console.log(`Grade: ${letterGrade}`);
switch (letterGrade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("You passed!");
        break;
    default:
        console.log("Keep trying!");
}

// Practice Exercise 2: Chatbot
console.log("\n🤖 Exercise 2: Simple Chatbot:");
let userInput = "hello";

console.log(`User says: "${userInput}"`);
if (userInput === "hello") {
    console.log("Bot: Hi there! How can I help?");
} else if (userInput === "help") {
    console.log("Bot: I can chat with you!");
} else if (userInput === "bye") {
    console.log("Bot: Goodbye! See you later!");
} else {
    console.log("Bot: I don't understand that.");
}

// ============================================
// PART 3: LOOPS
// ============================================

console.log("\n\n🔄 === PART 3: LOOPS ===");

// Basic for loop
console.log("\n👋 Student Welcome Messages:");
for (let i = 1; i <= 5; i++) {
    console.log(`Welcome student ${i}`);
}

// For loop breakdown explanation
console.log("\n🔍 For Loop Breakdown:");
for (let i = 0; i < 3; i++) {
    console.log(`Loop iteration: ${i}`);
}

// Real-World Example: Times Table
console.log("\n✖️ Times Table:");
let number = 7;

console.log(`Times table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} × ${i} = ${result}`);
}

// Looping Through Arrays
console.log("\n🍎 Fruit Loop Examples:");
let fruits = ["apple", "banana", "orange", "grape"];

console.log("Method 1 - Traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`I love ${fruits[i]}! 🍎`);
}

console.log("\nMethod 2 - for...of loop:");
for (let fruit of fruits) {
    console.log(`I love ${fruit}! 🍎`);
}

// While Loop Example
console.log("\n💰 Daily Spending Simulation:");
let balance = 100;
let day = 1;

console.log("Starting balance: $" + balance);
while (balance > 0) {
    console.log(`Day ${day}: Balance is $${balance}`);
    balance -= 15; // Spending $15 per day
    day++;
}
console.log("Out of money! 💸");

// Loop Control: break and continue
console.log("\n🛑 Break Example:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5!");
        break;
    }
    console.log(i);
}

console.log("\n⏭️ Continue Example:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3!");
        continue;
    }
    console.log(i);
}

// Practice Exercise 3: Number Guessing Game
console.log("\n🎯 Exercise 3: Number Guessing Game:");
let secretNumber = 7;
let guess = 0;
let attempts = 0;
let guesses = [3, 10, 7]; // Simulate user guesses
let currentGuessIndex = 0;

while (guess !== secretNumber && currentGuessIndex < guesses.length) {
    guess = guesses[currentGuessIndex];
    attempts++;
    
    console.log(`Attempt ${attempts}: You guessed ${guess}`);
    
    if (guess === secretNumber) {
        console.log(`🎉 Correct! It took you ${attempts} attempts!`);
    } else if (guess < secretNumber) {
        console.log("📈 Too low!");
    } else {
        console.log("📉 Too high!");
    }
    
    currentGuessIndex++;
}

// ============================================
// PART 4: PUTTING IT ALL TOGETHER
// ============================================

console.log("\n\n🎨 === PART 4: MINI PROJECTS ===");

// Mini Project 1: Grade Calculator with Feedback
console.log("\n📊 Grade Calculator Project:");
let students = [
    { name: "Alice", scores: [85, 92, 78, 96] },
    { name: "Bob", scores: [72, 68, 84, 77] },
    { name: "Charlie", scores: [95, 88, 92, 89] }
];

for (let student of students) {
    let total = 0;
    
    // Calculate total using a loop
    for (let score of student.scores) {
        total += score;
    }
    
    let average = total / student.scores.length;
    let grade;
    let message;
    
    // Determine letter grade
    if (average >= 90) {
        grade = "A";
        message = "Excellent work! 🌟";
    } else if (average >= 80) {
        grade = "B";
        message = "Good job! 👍";
    } else if (average >= 70) {
        grade = "C";
        message = "You passed! 👌";
    } else if (average >= 60) {
        grade = "D";
        message = "Need improvement 📚";
    } else {
        grade = "F";
        message = "Please see me after class 😟";
    }
    
    console.log(`${student.name}: ${average.toFixed(1)}% (${grade}) - ${message}`);
}

// Mini Project 2: Simple Bank Menu System
console.log("\n🏦 Bank Menu System:");
let bankBalance = 1000;
let menuChoice = "1"; // Simulate user choosing option 1

console.log("=== BANK MENU ===");
console.log("1. Check Balance");
console.log("2. Deposit");
console.log("3. Withdraw");
console.log(`User selected: ${menuChoice}`);

switch (menuChoice) {
    case "1":
        console.log(`Your balance: $${bankBalance}`);
        break;
        
    case "2":
        let deposit = 100;
        bankBalance += deposit;
        console.log(`Deposited $${deposit}. New balance: $${bankBalance}`);
        break;
        
    case "3":
        let withdraw = 50;
        if (withdraw <= bankBalance) {
            bankBalance -= withdraw;
            console.log(`Withdrew $${withdraw}. New balance: $${bankBalance}`);
        } else {
            console.log("Insufficient funds!");
        }
        break;
        
    default:
        console.log("Invalid choice. Please try again.");
}

// ============================================
// FINAL CHALLENGE: FIZZBUZZ
// ============================================

console.log("\n\n🏆 === FINAL CHALLENGE: FIZZBUZZ ===");
console.log("Numbers 1-30 with FizzBuzz rules:");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ============================================
// BONUS: ADDITIONAL EXAMPLES
// ============================================

console.log("\n\n🎁 === BONUS EXAMPLES ===");

// Nested Loops Example
console.log("\n🔢 Multiplication Table (3x3):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(`Row ${i}: ${row}`);
}

// Array Search Example
console.log("\n🔍 Array Search:");
let names = ["Alice", "Bob", "Charlie", "Diana"];
let searchName = "Charlie";
let found = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === searchName) {
        console.log(`Found ${searchName} at position ${i}!`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`${searchName} not found in the list.`);
}

// Password Validator
console.log("\n🔒 Password Strength Checker:");
let testPassword = "MyPassword123";

console.log(`Testing password: "${testPassword}"`);

let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let isLongEnough = testPassword.length >= 8;

for (let char of testPassword) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    if (char >= 'a' && char <= 'z') hasLower = true;
    if (char >= '0' && char <= '9') hasNumber = true;
}

console.log(`Has uppercase: ${hasUpper}`);
console.log(`Has lowercase: ${hasLower}`);
console.log(`Has number: ${hasNumber}`);
console.log(`Long enough (8+): ${isLongEnough}`);

let isStrong = hasUpper && hasLower && hasNumber && isLongEnough;
console.log(`Password is strong: ${isStrong}`);

// ============================================
// END OF EXAMPLES
// ============================================

console.log("\n\n✅ All Day 11 examples completed!");
console.log("🚀 Ready to push to GitHub!");
console.log("\nNext steps:");
console.log("- Practice modifying these examples");
console.log("- Try the homework challenges");
console.log("- Experiment with your own variations");
console.log("\nHappy coding! 🎉");