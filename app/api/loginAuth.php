<?php
/**
 * This file is used to generate the authentication token which is then sent to the authentication page
 * The authentication page used here is http://localhost:82/Login/login.php
 */
// This key is unique for every client. It is known by the client and the authentication provider
$key = "This key should be unique";

/**
 * User name, password and the redirect page are got from the client application
 */
$username = $_POST['username'];
$password = $_POST['password'];
$redirect = urlencode($_POST['redirect']);

// Generate signature from authentication information + secret key
$imp_auth_token = hash(
        'sha256', $username.$password.$key, false
);
// Send the user to this URL to log them in and redirect to their final location
echo "http://localhost:82/Login/login.php?redirect=" . $redirect . "&username=" . $username ."&password=".$password. "&authtoken=" . $imp_auth_token;
?>

