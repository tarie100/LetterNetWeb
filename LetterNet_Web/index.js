const btn = document.querySelector("#signup-btn");
btn.addEventListener('click', function(){
  console.log("clicked");

});

document.getElementById("loginLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signUpForm").style.display = "none";
});

document.getElementById("signUpLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signUpForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
});
/*document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;
  let userType = document.getElementById("userType").value;

  // Example code to handle sign-up based on user selection
  if (userType === "reader") {
    // Handle sign-up for readers
  } else if (userType === "creator") {
    // Handle sign-up for content creators
  }
});*/

document.addEventListener('DOMContentLoaded', function() { 
  const signupBtn = document.querySelector("#signup-btn");
  const signupForm = document.querySelector("#signUpForm");

signupBtn.addEventListener('submit', function(event) {
  event.preventDefault();
  signupForm.submit()
  
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('Password');
const usernameInput = document.getElementById('Username');
});
});

document.addEventListener('DOMContentLoaded', function() { 
  const signupBtn = document.querySelector("#signup-btn");
  const signupForm = document.querySelector("#signUpForm");

signupBtn.addEventListener('submit', function(event) {
  event.preventDefault();
  signupForm.submit()
});
});
   

// Add a submit event listener to the form
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get user input values
  const name = nameInput.value;
  const surname = surnameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create an object with user information
  const userData = {
    name,
    surname,
    username,
    email,
    password
  };

  // Send the user information to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'mysqlconnect.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the server response
      console.log(xhr.responseText);
      // You can display a success message to the user or redirect them to another page
    }
  };
  xhr.send(JSON.stringify(userData));
});