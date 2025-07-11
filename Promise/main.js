const data = (data) => {
  // console.log(data)
  return data.json();
};

const quote = fetch("https://api.kanye.rest")
  .then(data)
  .then((data) => console.log(data.quote))
  .catch((error) => console.error(error));

// console.log(quote)
function fetchUserData() {
  let userData;
  setTimeout(() => {
    userData = { name: "Alice", age: 30 };
  }, 1000);
  return userData; // What will this return?
}

const user = fetchUserData();
console.log(user); // What gets logged?

const myFirstPromise = new Promise((resolve, reject) => {
  // This is the executor function
  const success = Math.random() > 0.5; // 50% chance of success

  setTimeout(() => {
    if (success) {
      resolve({ name: "Alice", age: 30 });
    } else {
      reject("😞 Oops! Something went wrong.");
    }
  }, 1000);
});

myFirstPromise
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

// Your code here:
const getWeather = () => {
  return new Promise((setter, reject) => {
    // Fill in the implementation
    const success = Math.random() > 0.3;
    setTimeout(() => {
      if (success) {
        setter({ temperature: 25, condition: "sunny" });
      } else {
        reject("error fetching the weather data");
      }
    }, 2000);
  });
};

// Test your promise:
getWeather()
  .then((weather) => console.log("Weather:", weather))
  .catch((error) => console.log("Error:", error));
