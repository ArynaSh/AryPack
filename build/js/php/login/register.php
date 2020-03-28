<?php
require '../conn.php';

$returnObject = new \stdClass();
$returnObject->login = "";
$returnObject->error = false;
$returnObject->errorMessage="0";


$login = $_REQUEST["login"];
$login = strip_tags($login);
$login = stripslashes($login);
$login = mysqli_real_escape_string($conn, $login);

$psw = $_REQUEST["psw"];
$psw = strip_tags($psw);
$psw = stripslashes($psw);
$psw = mysqli_real_escape_string($conn, $psw);
$hash = password_hash($psw, PASSWORD_DEFAULT);

    $sql = "SELECT id, login, psw FROM users WHERE login = '$login' ";
    $result = $conn->query($sql);
    
    if (mysqli_num_rows($result) > 0) {   
        $returnObject->error = true;
        $returnObject->errorMessage="Name taken";
        $myJSON = json_encode($returnObject);
        echo $myJSON; 
    }
    else {
        $sql = "INSERT INTO users (login, psw) VALUES ($login, $hash)";
        $returnObject->login = $login;
        $returnObject->errorMessage="User created";
        $myJSON = json_encode($returnObject);
        echo $myJSON;
    }




$conn->close();

?>