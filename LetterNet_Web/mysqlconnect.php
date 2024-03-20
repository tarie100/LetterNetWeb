<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
/*$connection = mysqli_connect("localhost","root","Shoniwa100!","shondata");
if (!$connection)
die("could not connect". mysqli_connect_error());
$query = "select * from users";
$stmt = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($stmt, MYSQLI_ASSOC))
{
    echo $row['users'].'</br>';
}
//mysqli_close($connection);

$requestMethod = isset($_POST['requestMethod']) ? $_POST['requestMethod'] : '';
if ($requestMethod == "POST") {
    $Name = isset($_POST['name']) ? $_POST['name']: '';
    $Surname = isset($_POST['surname'])? $_POST['surname']: '';
    $Username = isset($_POST['Username']) ? $_POST['Username']: '';
    $Email= isset($_POST['email']) ? $_POST['email']: '';
    $Password=isset($_POST['Password']) ? $_POST['Password']: '';
    $ConfirmPassword = isset($_POST['confirmPassword']) ? $_POST['confirmPassword'] : '';
    if ($Password !== $ConfirmPassword) {
        echo "Error: Passwords do not match. Please try again.";
    } else {
       $sql = "INSERT INTO users (Name, Surname, Username, Email, Password) VALUES
        ('$Name', '$Surname', '$Username', '$Email', '$Password')";
        
        if ($connection->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
        }
    }
}

$connection->close();
*/
error_reporting(E_ALL);
ini_set("display_errors",1);

$connection = mysqli_connect("localhost", "root", "Shoniwa100!", "shondata");

if (!$connection) {
    die("Could not connect: " . mysqli_connect_error());
}

if (isset($_POST['signup-btn'])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['eMail'];
    $username = $_POST['userName'];
    $password = $_POST['passWord'];
    
    // You can add additional validation and sanitization for the input fields here
    
    $query = "INSERT INTO users (name, surname, email, username, password) VALUES ('$name', '$surname', '$email', '$username', '$password')";
    
    if (mysqli_query($connection, $query)) {
        echo "User information inserted successfully.";
    } else {
        echo "Error inserting user information: " . mysqli_error($connection);
    }
}

mysqli_close($connection);
