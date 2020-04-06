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
		$userName = $data["userName"];
		$passWord = $data["passWord"];
		$sql = "select * from user where userName = '$userName' and passWord = '$passWord'";
		$query = $this->conn->query($sql);
		if(mysqli_num_rows($query) == 0) {
			$rep->Code = '0';
			$rep->Message = 'Sai tài khoản hoặc mật khẩu';
		}
		else
		{
			$rep->Code = '1';
			$rep->Message = 'Sai tài khoản hoặc mật khẩu';
		}


        echo json_encode($rep);
    }
}
$new = new login();
$new->login();
?>