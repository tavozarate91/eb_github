<?php
    $user_name = $_POST["user"];
    $score = $_POST["score"];

    //Variables for Database access
    $host = "rdbms.strato.de";
    $user    = "dbu690451";
    $pass    = "mastermind2022";
    $db_name = "dbs7617842";

    //create connection
    try
    {
        $conn=new PDO("mysql:host=rdbms.strato.de; dbname=dbs7617842", "dbu690451", "mastermind2022");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (Exception $e)
    {
        die("Error: " .$e->getMessage());
    }

    $sql="INSERT INTO `scores` (`index`, `name`, `score`) VALUES (NULL, :user_name, :score)"; 
        
    $result = $conn->prepare($sql);

    $result->bindValue(":user_name", $user_name, PDO::PARAM_STR);
    $result->bindValue(":score", $score, PDO::PARAM_INT);

    $result->execute();

    //echo $user;
    //echo $score;

    header("Location: ../");
    exit();
?>