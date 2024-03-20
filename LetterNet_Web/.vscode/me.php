<?php
// Check if the form is submitted
if ($_POST) {
  // Get the user information from the request
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $surname = isset($_POST['surname']) ? $_POST['surname'] : '';
  $username = isset($_POST['Username']) ? $_POST['Username'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $password = isset($_POST['Password']) ? $_POST['Password'] : '';
  $confirmPassword = isset($_POST['confirmPassword']) ? $_POST['confirmPassword'] : '';

  // Validate the user information
  if (empty($name) || empty($surname) || empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
    echo "Please fill in all the fields.";
  } elseif ($password !== $confirmPassword) {
    echo "Password and Confirm Password do not match.";
  } else {
    // Save the user information to the database
    // Your code to save the user information to the database goes here

    echo "User information saved successfully.";
  }
}
?>