<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
class login 
{
    const host     = 'localhost';
    const db       = 'chat_web';
    const username = 'root';
    const password = '';
    public $conn = NULL;
    public function __construct()
    {
        $this->connect();
    }

    public function connect()
    {
        $this->conn = mysqli_connect(self::host, self::username, self::password, self::db);
        if($this->conn)
            $array = array('1');
        echo json_encode($array);
    }

    public function login()
    {
        $post = array($_REQUEST["userName"]);
        echo json_encode($post);
    }
}
$new = new login();
$new->login();
?>