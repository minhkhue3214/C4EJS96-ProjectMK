<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body id="form">
<h1 style="font-weight: bold;"> Nhập dữ liệu và xóa theo điều kiện của bảng</h1>
<form method="post" action="">
	<h3>Xóa dữ liệu trong bảng đơn hàng:</h3>
	Điều kiện:<select name="dk">
		<option>madh</option>
		<option>makh</option>
		<option>manv</option>
	    <option>gia</option>
	</select><input type="textbox" name="dieukien"><br>
	<input type="submit" name="nhap" value="Xóa"><br>	
<form method="post" action="">	<h3>Nhập dữ liệu vào bảng đơn hàng:</h3>
	Đơn:<input type="textbox" name="madh"><br>
	Mã kh:<input type="textbox" name="makh"><br>
	Mã nv:<input type="textbox" name="manv"><br>
	Ngày:<input type="textbox" name="ngaydat"><br>
	Giá:<input type="textbox" name="gia"><br>
	<input type="submit" name="nhan" value="Nhập dữ liệu">
<?php
if (isset($_POST['nhan'])) {
	$ketnoi =mysqli_connect("localhost","root","") or die("khong the ket noi den Sql");
	mysqli_select_db($ketnoi,"quanlydonhang") or die("khong tim thay csdl");
	$madh=$_POST['madh'];
	$makh=$_POST['makh'];
	$manv=$_POST['manv'];
	$ngaydat=$_POST['ngaydat'];
	$gia=$_POST['gia'];
	$lenhsql="insert into donhang
	values ('$madh','$makh','$manv','$ngaydat','$gia')";
	$chay=mysqli_query($ketnoi,$lenhsql);
	echo "Nhập thành công";
}
?>	
</form ><br>

<?php
$lenhsql1='';
if (isset($_POST['nhap'])) {
	$ketnoi1=mysqli_connect("localhost","root","") or die("khong the ket noi den Sql");
	mysqli_select_db($ketnoi1,"quanlydonhang") or die("khong tim thay csdl");
	$dieukien=$_POST['dieukien'];
	$dk=$_POST['dk'];
	switch ($dk) {
		case 'madh':
			$lenhsql1="delete from donhang where madon='$dieukien'";
			$chay=mysqli_query($ketnoi1,$lenhsql1);
			break;
		case 'makh':
			$lenhsql1="delete from donhang where makh='$dieukien'";
			$chay=mysqli_query($ketnoi1,$lenhsql1);
			break;	
		case 'manv':
			$lenhsql1="delete from donhang where manv='$dieukien'";
			$chay=mysqli_query($ketnoi1,$lenhsql1);
			break;
        case 'gia':
			$lenhsql1="delete from donhang where gia='$dieukien'";
			$chay=mysqli_query($ketnoi1,$lenhsql1);
			break;
	}

	echo "Xóa thành công";
}
?>	
</form>	
	<style>
	#form{
	background-color: skyblue;
	width: 50%;
	padding: 2%;
	}
		</style>

</body>
</html>