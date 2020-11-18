<?php
// require_once('conn.php');

// //刪除 token：
// $token = $_COOKIE['token'];
// $sql = sprintf(
//   "Delete from tokens where token ='%s'",
//   $token
// );
// $conn->query($sql);
// setcookie("token", "", time() -3600);
session_start();
session_destroy();
header("Location: index.php");
?>