<?php 
$fullname=$_POST['fullname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$userName=$_POST['username'];
$Password=$_POST['password'];

// Database Connection
$servername = "localhost";
$username = "root";
$password = "";
$database="users";
$con = new mysqli($servername, $username, $password);
mysqli_select_db($con, $database);

if (isset($_POST['submit'])) 
//isset � Determine if a variable is declared and is different than null
//isset() will return false when checking a variable that has been assigned to null.
{
$sql="INSERT INTO  accounts (id,fullname,email,phone,username,password) VALUES 
    (NULL,'$fullname','$email','$phone','$userName','$Password')";	
if ($con->query($sql) === TRUE) {
  echo "New record created successfully";
  header ("Location: successfully.html"); //redirect browser
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}
$con->close();
}
?>