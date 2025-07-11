// Helper functions (implement these):
const validateEmail = (email) => {
  // Return Promise that resolves if valid, rejects if invalid
  return new Promise((resolve, reject) => {
    const validEmail = email.includes("@") && email.includes(".com");
    if (validEmail) {
      resolve({ email });
    } else {
      reject("invalid email address");
    }
  });
};

const checkEmailExists = (email) => {
  // Return Promise that resolves with false if email is available
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.4;
    if (success) {
      resolve({ email });
    } else {
      reject("user with this " + email + " exist");
    }
  });
};

const createAccount = (email, password) => {
  // Return Promise that resolves with user object
  return new Promise((resolve) => {
    resolve({ email, password });
  });
};

const sendWelcomeEmail = (user) => {
  // Return Promise that resolves when email sent
  return new Promise((resolve) => {
    resolve("welcome to the hub " + user);
  });
};

// Your registration flow:
const registerUser = (email, password) => {
  return validateEmail(email)
    .then((data) => checkEmailExists(data.email))
    .then((data) => createAccount(data.email, password))
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// registerUser("kate@gmail.com", 0.98765);

// for (let i = 0; i < 20; i++) {
//   registerUser("kate@gmail", 0.98765);
// }

async function handlePromise(email, password) {
  try {
    let valid = await validateEmail(email);
    let isExist = await checkEmailExists(valid.email);
    let createUser = await createAccount(isExist.email, password);
    let welcome = await sendWelcomeEmail(createUser.email);
    //   console.log(welcome);
    return welcome;
  } catch (error) {
    console.log(error);
  }
}

// let isExist = await checkEmailExists(valid.email);

// for (let i = 0; i < 20; i++) {
//     let m = handlePromise("kate@gmail.com", 98765);
//     console.log(m)
// }

// arrow function
const sample = async () => {
  try {
    let request = await Promise.race([
      fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD"),
      fetch("https://api.kanye.rest"),
    ]);
    // console.log(request)
    let response = await request.json();
    console.log(response);

    let [data1, data2] = await Promise.all([
      fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD"),
      fetch("https://api.kanye.rest"),
    ]);
    // console.log(request)
    // let response2 = await request2.json();
    console.log({
      data1,
      data2,
    });
  } catch (error) {
    console.log(error);
  }
};

async function fetcher() {
  try {
    let request = await fetch("https://api.kanye.rest");

    if (!request.ok) {
      throw new Error("unable to fetch " + request.status);
    }

    let response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// sample();
fetcher();