<?php

header('Content-Type: application/json');

if (isset($_POST['name'])) {
	$name = strip_tags($_POST['name']);
	$email = strip_tags($_POST['email']);
	$message = strip_tags($_POST['message']);
	$parent = strip_tags($_POST['parentId']);

	$con=mysqli_connect("localhost","root","1234","test");
	// Check connection
	if (mysqli_connect_errno()) {
	  // echo "Failed to connect to MySQL: " . mysqli_connect_error();
		echo json_encode(array("status"=>"Fail"));
	}

	$SQL = "INSERT INTO temp (name, email, message, parent)
	VALUES ('$name', '$email', '$message', '$parent')";
	// var_dump($SQL);

	mysqli_query($con, $SQL);
	mysqli_close($con);
	echo json_encode(array("status"=>"OK"));
	}
?>