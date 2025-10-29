<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "taller1";
$idc=$_POST['id_cliente'];
$nomc=$_POST['nomcliente'];
$apc=$_POST['apcliente'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if (!$connex) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO cliente (id_cliente, nom_cliente, ap_cliente) VALUES ('$idc', '$nomc', '$apc')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>