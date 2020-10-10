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

$discription = $_REQUEST["discription"];
$discription = strip_tags($discription);
$discription = stripslashes($discription);
$discription = mysqli_real_escape_string($conn, $discription);




    $sql = "SELECT name FROM product WHERE name = '$name' ";
    $result = $conn->query($sql);
    
    if (mysqli_num_rows($result) > 0) {   
        $returnObject->error = true;
        $returnObject->errorMessage="Product exist";
        $myJSON = json_encode($returnObject);
        echo $myJSON; 
    }
    else {
        $sql = "INSERT INTO product (name, dis) VALUES ('$name', '$discription')";     
        $conn->query($sql);
        $returnObject->name = $name;
        $returnObject->errorMessage = "Product addet";
        $sql = "SELECT id FROM product WHERE name = '$name' ";
        $result = $conn->query($sql);
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC); 
        $returnObject->errorMessage=$row['id'];
        $myJSON = json_encode($returnObject);
        echo $myJSON;    
        
    }
$conn->close();

?>