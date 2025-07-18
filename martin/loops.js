// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");
// console.log("Hello, World!");

let i = 0;

// for (i = 0; i < 5; i++) {
//   console.log("Hello world", i);
// }

// while (i < 5) {
//   console.log("Hello world", i);
//   i++;
// }

do {
  console.log("Hello world", i);
  i++;
} while (i < 5);

let j = { name: "martin", age: 30, occupation: "developer/crypto" };
let arr = [1, 2, 3, 4, 5];

for (let key in j) {
  console.log("key:", key, "value", j[key]);
}

for (let key of arr) {
  console.log("key:", key);
}
