let username = document.querySelector("#user");
let userImg = document.querySelector("#img");
let bio = document.querySelector("#bio");
let address = document.querySelector("#address");
let number = document.querySelector("#number");

// let btn = document.getElementById("add");
// let countEL = document.getElementById("count");

// import data from "./martjson.json";
// let data = require("./martjson.json");

// let count = 0;

// function addFunc() {
//   count++;
//   console.log("Button clicked", count);
//   countEL.textContent = count;
// }

// btn.addEventListener("click", () => {
//   addFunc();
// });

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

const apiurl = "https://dummyjson.com/users";

async function fetchData() {
  const response = await fetch(apiurl);

  let data = await response.json();
  // username.innerHTML = data.users[1].firstName + " " + data.users[1].lastName;
  // userImg.src = data.users[1].image;
  // bio.innerHTML = data.users[1].university;
  // address.innerHTML = data.users[1].address.address;
  // number.innerHsTML = data.users[1].phone;

  let createElement1 = document.createElement("div");
  data.users.forEach((user) => {
    createElement1.innerHTML += `
      <div class="user-card">
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}" />
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>University: ${user.university}</p>
        <p>Address: ${user.address.address}</p>
        <p>Phone: ${user.phone}</p>
      </div>
    `;

    // username.innerHTML = user.firstName + " " + user.lastName;
    // userImg.src = user.image;
    // bio.innerHTML = user.university;
    // address.innerHTML = user.address.address;
    // number.innerHTML = user.phone;
    // console.log("User Name:", user);
  });

  username.append(createElement1);

  console.log("Data received from the API:", data);
}

fetchData();
