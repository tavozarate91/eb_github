<?php
    $user = $_POST["user"];
    $score = $_POST["score"];

    //create connection
    $connection = mysqli_connect($host, $user, $pass, $db_name);

    $sql = "INSERT INTO `scores` (`index`, `name`, `score`) VALUES (NULL, :user, :score)"; 
    $host = "rdbms.strato.de";
    $user    = "dbu690451";
    $pass    = "mastermind2022";
    $db_name = "dbs7617842";
    $result=$conn->prepare($sql);
    $result->execute();

    //echo $user;
    //echo $score;

    header("Location: ../");
    exit();
?>