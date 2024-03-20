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

/*document.addEventListener('DOMContentLoaded', function() { 
  const signupBtn = document.querySelector("#signup-btn");
  const signupForm = document.querySelector("#signUpForm");

signupBtn.addEventListener('click', function(event) {
  event.preventDefault();
  signupForm.submit()
  console.log("clicked");
});
});*/
  // Get user input values
  function submitInfo(event){
    event.preventDefault();
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let username = document.getElementById("userName").value;
  let email = document.getElementById("eMail").value;
  let password = document.getElementById("passWord").value;

  // Create an object with user information
  const userData = {
    name,
    surname,
    username,
    email,
    password
  };
  fetch('mysqlconnect.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
.then(response => response.text())
.then(data => {
    console.log("Information submitted successfully!"); // Handle the server response
})
.catch(error => {
    console.error('Error:', error);
});
}
  // Send the user information to the server using AJAX
  /*const xhr = new XMLHttpRequest();
  xhr.open('POST', 'mysqlconnect.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
      // Handle the server response
      console.log(xhr.responseText);
    }else{
      console.error("Error: " + xhr.statusText);
    }
  }
  };
    xhr.send(JSON.stringify(userData));
}*/
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener('submit', submitInfo);
