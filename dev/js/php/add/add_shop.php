<?php
require '../shop_conn.php';

$returnObject = new \stdClass();
$returnObject->name = "";
$returnObject->error = false;
$returnObject->errorMessage="0";


$name = $_REQUEST["name"];
$name = strip_tags($name);
$name = stripslashes($name);
$name = mysqli_real_escape_string($conn, $name);

$location = $_REQUEST["location"];
$location = strip_tags($location);
$location = stripslashes($location);
$location = mysqli_real_escape_string($conn, $location);

$comments = $_REQUEST["comments"];
$comments = strip_tags($comments);
$comments = stripslashes($comments);
$comments = mysqli_real_escape_string($conn, $comments);


    $sql = "SELECT name FROM shops WHERE name = '$name' ";
    $result = $conn->query($sql);
    
    if (mysqli_num_rows($result) > 0) {   
        $returnObject->error = true;
        $returnObject->errorMessage="Shop exist";
        $myJSON = json_encode($returnObject);
        echo $myJSON; 
    }
    else {
        $sql = "INSERT INTO shops (name, location, comments) VALUES ('$login', '$hash', '$comments')";     
        $conn->query($sql);
        $returnObject->name = $name;
        $returnObject->errorMessage = "Shop addet";
        $myJSON = json_encode($returnObject);
        echo $myJSON;    
        
    }
$conn->close();

?>