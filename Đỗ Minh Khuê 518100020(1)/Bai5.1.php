<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form id="form" method="post" action="">
	<h1 style="font-weight: bold;"> Thêm dữ liệu vào bảng khách hàng</h1><br>
	Mã khách hàng:<input type="textbox" name="makh"><br>
	Họ và tên:<input type="textbox" name="hoten"><br>
	Địa chỉ:<select name="diachi">
	    <option>Hà Nội</option>
		<option>Lào Cai</option>
		<option>Quảng Ninh</option>
		<option>Nha Trang</option>
		<option>Thái bình</option>
	    <option>Hải Dương</option>
	    <option>Nghệ An</option>
	</select><br>
	Số điện thoại:<input type="textbox" name="sodt"><br>
	<input type="submit" name="nhan" value="Nhập">
	Giới tính:<input type="radio" name="gioitinh" value="nam">Nam
	<input type="radio" name="gioitinh" value="nữ">Nữ
</form>
<?php
if (isset($_POST['nhan'])) {
	$ketnoi =mysqli_connect("localhost","root","") or die("khong the ket noi den Sql");
	mysqli_select_db($ketnoi,"quanlydonhang") or die("khong tim thay csdl");
	$makh=$_POST['makh'];
	$hoten=$_POST['hoten'];
	$gioitinh=$_POST['gioitinh'];
	$diachi=$_POST['diachi'];
	$sodt=$_POST['sodt'];
	$lenhsql="insert into khachhang
	values ('$makh',N'$hoten','$gioitinh',N'$diachi','$sodt')";
	$chay=mysqli_query($ketnoi,$lenhsql);
	echo "nhap thanh cong 1 ban ghi";
}
?>
	<style>
	#form{
	background-color: yellow;
	width: 20%;
	padding: 2%;
	}
		</style>
</body>
</html>