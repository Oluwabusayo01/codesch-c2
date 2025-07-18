const lname = document.getElementById("lname").value;
const number = document.getElementById("number").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = document.getElementById("fname");
  let fnameValue = fname.value;
  console.log("My first name is", fnameValue);

  fname.value = "";
});
