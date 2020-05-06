
<?php
// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST"&&$_POST["email"]!="") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $surname = test_input($_POST["surname"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);



  echo $name;
  echo "<br>";
  echo $surname;
  echo "<br>";
  echo $email;
  echo "<br>";
  echo $comment;
  echo "<br>";
  echo $gender;
  header("gonderildi");
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
