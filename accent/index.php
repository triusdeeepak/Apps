<meta http-equiv="Content-type" content="text/html;" />
<meta http-equiv="Content-type" content="text/html;charset=utf-8" />
<?php
	if(isset($_POST)&&!empty($_POST['name'])){
		
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "myDB";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 
		$aa = $_POST['name'];
		$sql = 'INSERT INTO `mydata`(`content`) VALUES ("'.$aa.'")';
		

		if ($conn->query($sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();

	}

?>
<form action="#" method="POST">
	<input type="text" name="name">
	<input type="submit" value="submit">
</form>

<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "myDB";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 
		$sql1 = 'SELECT * FROM `mydata`';
		$result = $conn->query($sql1);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		        echo "id: " . $row["id"]. " - content: " . $row["content"]."<br>";
		    }
		} else {
		    echo "0 results";
		}
		?>