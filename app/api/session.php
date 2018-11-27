<?php
if ($_SESSION['username']) {
    $message = "Logged in as " . $_SESSION['username'];
}else{
    header('Location: index.php');
}
?>

