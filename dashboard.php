<!DOCTYPE html>
<!--
This page is only visible for authorized users.
-->
<?php
session_start();
require './app/api/session.php';
?>
<html>

    <head>
        <title>Nerds & Company</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
            html{
                margin: 0px;
                padding: 0px
            }
            body{
                margin: 0px;
                padding: 0px;

            }
        </style>
        <script>
            function logout() {
                
            }
        </script>

    </head>
    <body>
        <div style="width: 100%; background: rgba(47, 155, 160, 1); height: 50px; margin: 0px; padding: 8px 0px; color: #ffffff">
            <p><?php echo $message; ?></p>
        </div>
        <br>
        <br>
        <div style="margin: 10px">
            <a href="app/api/logout.php">Log Out</a>
        </div>

    </body>
</html>
