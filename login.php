<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" &&$_POST["email"]!="")
{
    $email="b191210551@sakarya.edu.tr";
    $password="123654";

    $cEmail=test_input($_POST["email"]);
    $cPassword=test_input($_POST["password"]);


    if($cEmail==$email && $cPassword==$password)
    {
        echo "Hosgeldiniz 'b191210551'";
    }
    else 
    {
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    }
}
function test_input($data) 
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>