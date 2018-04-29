 <?php
//Using GET
$var_value = $_GET['value'];
$cookie_value = "True";
?>
<html>
<body>

<?php
	

if(($var_value) == $cookie_value) {
    
    echo "Congrats!<br>";
    echo "fortune your password is: VsJVzZrYr7Sq";

} else {
   echo "Incorrect secret question response. <br>Please try again.";
}
?>

</body>
</html> 
