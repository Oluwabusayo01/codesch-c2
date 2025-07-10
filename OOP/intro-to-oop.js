const obj = {
  name: "michael",
  "age d": 56,
  speak: () => {
    console.log("my name is " + this.name + " and am " + this.age + " old");
  },
};

let myName = obj.name;
let age = obj["age d"];

obj.speak();

// Meet Whiskers, our first object!
// const whiskers = {
//     name: "Whiskers",
//     color: "orange",
//     weight: 5,
//     meow: function() {
//       console.log("Meow! I'm " + this.name);
//     }
//   };

// Using our object
//   console.log(whiskers.name); // "Whiskers"
//   whiskers.meow(); // "Meow! I'm Whiskers"

// Constructor function (notice the capital C)
function Cat(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.sample = "testing";
  this.meow = function () {
    console.log("Meow! I'm " + this.name);
  };
  this.quote = function () {
    fetch("https://api.kanye.rest")
      .then((data) => data.json())
      .then((data) => {
        console.log("------fetch function--------");
        console.log(data.quote);
      })
      .catch((error) => console.error(error));
  };
  this.asyncQuote = async () => {
    try {
      const request = await fetch("https://api.kanye.rest");
      if (!request.ok) {
        throw new Error(`unable to fetch data ${request.status}`);
      }
      const response = await request.json();
      console.log("------async--------");
      console.log(response.quote);
    } catch (error) {
        console.error("faild to fetch")
    }
  };
}

// Creating multiple cats
const whiskers = new Cat("Whiskers", "orange", 5);
const shadow = new Cat("Shadow", "black", 4);
const mittens = new Cat("Mittens", "white", 3);

whiskers.meow(); // "Meow! I'm Whiskers"
shadow.meow(); // "Meow! I'm Shadow"
mittens.asyncQuote(); // random quote with async/ await
// shadow.quote(); // random quote

const user = {
  name: "frank",
  age: 34,
};
console.log(user);
user.age = 77;
user.test = "testing";
console.log(user);

function sam() {
  console.log("test");
  return "fan of a fan";
}

let m = sam();
console.log(m);
