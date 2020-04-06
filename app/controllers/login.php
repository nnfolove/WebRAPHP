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
        //echo json_encode($array);
    }

    public function login()
    {

        $data = json_decode(file_get_contents('php://input'),true);
        if (!empty($data["userName"]) && !empty($data["passWord"])) {
            $userName = $data["userName"];
            $passWord = $data["passWord"];
            $sql = "select * from user where userName = '$userName' and passWord = '$passWord'";
            $query = $this->conn->query($sql);
            if(mysqli_num_rows($query) == 0) {
                $rep = '0';
            }
            else
            {
                $rep = '1';
            }
        }
        else
            $rep = '2';

        echo json_encode($rep);
    }
}
$new = new login();
$new->login();
?>