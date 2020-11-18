<?php
  session_start();
  require_once('conn.php');
  require_once('utility.php');
  
  if ( 
    empty($_POST['username']) ||
    empty($_POST['password'])
    ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];


  $sql = sprintf(
    "select * from yehshan34_w9_users where username = '%s' and password = '%s' ",
    $username,
    $password
  );
  $result = $conn->query($sql);
  if(!$result){
    die($conn->error);
  }

  if($result->num_rows) {
    // 先產生 token 並儲存，把 token 傳到 client 端去。
    // $token = generateToken();
    // $sql = sprintf(
      // "insert into tokens(token, username) value('%s','%s')",
      // $token,
      // $username
    // );
    // $conn->query($sql);
    // $result = $conn->query($sql);
    // if(!$result){
    // die($conn->error);
  // }
    // '登入成功！';
    //把 token 傳到 client 端去。
    //$expire = time() + 3600 * 24 * 30;
    //setcookie("token", $token , $expire);
    $_SESSION['username'] = $username;
    //1. 產生 session id (token)
    //2. 把 username 寫入檔案
    //3. set-cookie: session-id
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }
  
?>
