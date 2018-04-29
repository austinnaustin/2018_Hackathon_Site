 <?php
$cookie_name = "Authenticate";
$cookie_value = "True";
?>
<html>
<body>

<?php
	

if(($_COOKIE[$cookie_name]) == $cookie_value) {
    
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
    echo "<br>gingerbread:		8eUFyPfvVBk2";
} else {
   echo "Cookie set to '" . $_COOKIE[$cookie_name] . "' User not logged in. Nice try!";
}
?>

</body>
</html> 
