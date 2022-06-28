<?php
    $host = "rdbms.strato.de";
    $user    = "dbu690451";
    $pass    = "mastermind2022";
    $db_name = "dbs7617842";
    
    
?>


<!DOCTYPE html>
<html class="no-js">
<head>
  <meta charset="utf-8">
  <title>JS Mastermind</title>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link rel="stylesheet" href="css/main.css">
  <script> 
    function update_score(){document.getElementById("score_user").value = 4};
  </script>
</head>
<body> 
  <div class="wrapper">
    <header>
      <h1>Mastermind</h1>
      <button id="newGame" class="green">Restart</button>
    </header>
    <div class="player">
      <form action="includes/upload_score.php" method="POST">
        Please insert your user<input type="text" name="user"/>
        <input id="score_user" type="hidden" name="score" value="15"/>
        <input type="submit" name="send" value="send">
      </form>
    </div>
    <div class="container">
      <div id="guesses">
        <div class="code row">
          <div class="secret socket">?</div>
          <div class="secret socket">?</div>
          <div class="secret socket">?</div>
          <div class="secret socket">?</div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
        <div class="guess">
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
          <div class="socket"></div>
        </div>
      </div>

      <div id="hints">
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
        <div class="hint">
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
          <div class="row">
            <div class="js-hint-socket socket"></div>
            <div class="js-hint-socket socket"></div>
          </div>
        </div>
      </div>

      
    </div>
    
    <div id="options" class="container">
      <button value="1" id="green" class="option green"></button>
      <button value="2" id="purple" class="option purple"></button>
      <button value="3" id="red" class="option red"></button>
      <button value="4" id="yellow" class="option yellow"></button>
      <button id="delete" class="">&#8672;</button>
    </div>


    
  </div>

  <div id="results">
      <?php
        echo '<p> Hello, the best score corresponds to the least amount of tries </p>';
      
        //create connection
        $connection = mysqli_connect($host, $user, $pass, $db_name);
        
        //test if connection failed
        if(mysqli_connect_errno()){
            die("connection failed: "
            . mysqli_connect_error()
            . " (" . mysqli_connect_errno()
            . ")");
        }
            
        //get results from database
        $result = mysqli_query($connection,"SELECT * FROM `scores` ORDER BY `scores`.`score` ASC LIMIT 0, 10;");
        $all_property = array();  //declare an array for saving property
        
        //showing property
        echo '<table border="1" class="data-table">
            <tr class="data-heading">';  //initialize table tag
        while ($property = mysqli_fetch_field($result)) {
            echo '<td>' . $property->name . '</td>';  //get field name for header
            array_push($all_property, $property->name);  //save those to array
        }
        
        echo '</tr>'; //end tr tag
        
        //showing all data
        while ($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            foreach ($all_property as $item) {
                echo '<td>' . $row[$item] . '</td>'; //get items using property value
            }
            echo '</tr>';
        }
        echo "</table>";
      ?>

    </div>



  <div id="modalOverlay">
    <div id="modalMessage">
      <button class="large">OK</button>
      <button class="large primary">Restart</button>
    </div>
  </div>

  <script src="js/main.js"></script>

</body>
</html>

<script>
    update_score();
</script>
