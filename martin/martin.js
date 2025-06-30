let fetchdom = document.querySelector("#user");

// import data from "./martjson.json";
// let data = require("./martjson.json");

let name = "martin";
let age = 30;
let occupation = "developer";

let person = {
  name: "martin",
  age: 30,
  occupation: "developer",
};

console.log("Person details:", person.name, person.age, person.occupation);
console.log("JSON Person details:");

// console.log("The length of the data: ", data.employee.length);

// data.employee.map((employee) => {
//   console.log("Employee Name:", employee.firstName[3]);
// });

// console.log("This is the data: ", data.employee[0].firstName);

// fetch("https://dummyjson.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Data received from the API", data);
//   });

async function fetchData() {
  const response = await fetch("https://dummyjson.com/users");

  let data = await response.json();
  console.log("Data received from the API:", data);
}

fetchData();
