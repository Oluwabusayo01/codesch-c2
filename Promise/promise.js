// Simulating API calls
const fetchUserProfile = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Alice",
        email: "alice@example.com",
      });
    }, 1000);
  });
};

const fetchUserPreferences = (userId) => {
  return new Promise((_,reject) => {
    setTimeout(() => {
    //   resolve({
    //     theme: "dark",
    //     notifications: true,
        //   });
        reject("opps error")
    }, 800);
  });
};

// Chaining them together
fetchUserProfile(123)
  .then((profile) => {
    console.log("Profile loaded:", profile);
    return fetchUserPreferences(profile.id);
  })
  .then((preferences) => {
    console.log("Preferences loaded:", preferences.theme);
  })
  .catch((error) => {
    console.log("Failed to load user data:", error);
  }).finally(_ => {
      console.log("Finally")
  });
