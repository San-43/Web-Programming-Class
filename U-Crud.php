<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "taller1";
$idc=$_POST['idcliente'];
$nomc=$_POST['nomcliente'];
$apc=$_POST['apcliente'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE cliente SET nomcliente='$nomc', apcliente='$apc' WHERE idcliente='$idc'";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>