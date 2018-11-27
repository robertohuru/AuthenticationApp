<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
// This key is unique for every client. It is known by the client and the authentication provider
$key = "This key should be unique";
$username = $_GET['username'];
$password = $_GET['password'];
$redirect = $_GET['redirect'];
$authtoken = $_GET['authtoken'];

if ($_SESSION['username'] && $_SESSION['username'] == $_GET['username']) {
    session_destroy();
}

$hashed = hash("sha256", $username.$password.$key, false);

if ($authtoken == $hashed) {
    session_start();
    $_SESSION['username'] = $username;
    $message = "Logged in as " . $username;    
    header('Location: '.$redirect);
} else {
    $message = $authtoken. "=".$hashed ;
    session_destroy();
}
?>
<html>

    <head>
        <title>Login Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans|Baumans' type='text/css'>

    </head>
    <body>
        <div>
            <p>User login in progress....</p>
        </div>

    </body>
</html>
