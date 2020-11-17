<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form id="form" method="post" action="">
	<h1 style="font-weight: bold;">Sửa giá trong bảng đơn hàng</h1>
	Nhập giá tiền bạn muốn sửa:<input type="textbox" name="gia"><br>
	Nhập mã đơn hàng:<input type="textbox" name="madh"><br>
	Nhập mã khách hàng:<input type="textbox" name="makh"><br><input type="submit" name="nhan" value="Sửa">
</form>
<?php
if (isset($_POST['nhan'])) {
	$ketnoi =mysqli_connect("localhost","root","") or die("khong the ket noi den Sql");
	mysqli_select_db($ketnoi,"quanlydonhang") or die("khong tim thay csdl");
	$gia=$_POST['gia'];
	$madh=$_POST['madh'];
	$makh=$_POST['makh'];
	$lenhsql="update donhang set gia='$gia' where makh='$makh' and madon='$madh'";
	$chay=mysqli_query($ketnoi,$lenhsql);
	echo "nhap thanh cong 1 ban ghi";
}
?>
		<style>
	#form{
	background-color:whitesmoke;
	width: 40%;
	padding: 2%;
	}
		</style>
</body>
</html>