<?php
//echo "hari";
//die();
//print_r($_POST);
/*$fname=$_POST['fname'];
$lname=$_POST['lname'];
$dob=$_POST['dob'];
$email=$_POST['email'];
$pswd=$_POST['pswd'];*/
//print_r($_GET['id']);
$conn=mysqli_connect("localhost","root","root","angularform");
$data = json_decode(file_get_contents("php://input"));
if (isset($data->fname)){
$fname = $data->fname;
//echo $data->fname;
$lname = $data->lname;
$dob = $data->dob;
$email = $data->email;
$pswd = $data->pswd;

$ins=mysqli_query($conn,"insert into form (fname,lname,dob,email,pswd) values('$fname','$lname','$dob','$email','$pswd')");
if($ins)
{
	echo "success";
}
else
{
	echo "error";
}
}

$fetch=mysqli_query($conn,"select * from form");
//print_r($fetch);
	while($fetch1=mysqli_fetch_array($fetch))
		{
			echo $id=$fetch1['id'];
			echo $fname=$fetch1['fname'];
			echo $lname=$fetch1['lname'];
			echo $dob=$fetch1['dob'];
			echo $email=$fetch1['email'];
			echo $pswd=$fetch1['pswd'];
		}
		//echo json_encode(mysqli_fetch_array($fetch));
?>