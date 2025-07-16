// let arr = [1, 2, 3, 4, 5];

// // arr.push(6);
// // arr.pop();
// // arr.unshift(0);
// // arr.shift();

// // delete arr[2]; // Deletes the element at index 2
// console.log(arr);

// let splice = arr.splice(0, 2, 10, 11); // Removes elements from index 0 to 2 and inserts 10 and 11 at index 0
// let arr1 = [1, 2, 3, 4, 5];
// let slice = arr1.slice(0, 2); // Returns a shallow copy of elements from index 1 to 3 (not including 3)
// // arr.splice(1, 0, 10); // Inserts 10 at index 1

// console.log(splice); // Logs the removed elements
// console.log(slice); // Logs the sliced elements
// console.log(arr); // Logs the modified array after splice

let arrayNew = [1, 2, 3, 4, 5];
// let arrayNew1 = [6, 7, 8, 9, 10];
// let arrayNew2 = [11, 12, 13, 14, 15];

// console.log(arrayNew + arrayNew1 + arrayNew2); // Concatenates the two arrays

// let arrayConcat = arrayNew.concat(arrayNew1, arrayNew2);
// console.log(arrayConcat); // Logs the concatenated array

// let arrayForEach = arrayNew.forEach((element, index) => {
//   console.log(`Element at index ${index} is ${element + 5}`);
// });

// let users = [
//   { id: 1, name: "John michae" },
//   { id: 2, name: "Peter" },
//   { id: 3, name: "Mary james" },
//   { id: 4, name: "vibes " },
// ];

// let filteredUsers = users.filter((user) => user.name.length > 5);

// console.log("Filtered Users:", filteredUsers);
// console.log("Filtered Users:", filteredUsers.length);

let mapArr = [1, 2, 3, 4, 5];

let returnedMap = mapArr.map((elm, i) => {
  //   console.log(`Element at index ${i} is ${elm + 5}`);
  return elm + 5;
});

// console.log("Mapped Array:", returnedMap); // Logs the new array with each element increased by 5

const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

// let arr = [1, 2, 3, 4, 5];

// let filteredArr = arr.reduce((element, i) => {
//   return element + i;
// });

console.log("Filtered Array:", filteredArr); // Logs the sum of all elements in the array

// let totalPrice = 0;

// items.forEach((item) => {
//   totalPrice += item.price;
// });

// console.log(totalPrice); // 6

let totalPrice1 = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);

console.log("Total Price using reduce is: ", totalPrice1); // 6
