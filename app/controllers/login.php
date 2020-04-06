<?php
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
		header('Content-Type: application/json');
        $data = json_decode(file_get_contents('php://input'),true);
		$userName = $data["userName"];
		$passWord = $data["passWord"];
		$sql = "select * from user where userName = '$userName' and passWord = '$passWord'";
		$query = $this->conn->query($sql);
		if(mysqli_num_rows($query) == 0) {
			$response = array(
        'status' => false,
        'message' => 'An error occured...'
		);
		}
		else
		{
			$response = array(
        'status' => false,
        'message' => 'An error occured...'
		);
		}


        echo json_encode($response);
    }
}
$new = new login();
$new->login();
?>