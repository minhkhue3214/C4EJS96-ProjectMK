<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post" action="">
	<b>Trang lấy dữ liệu theo điều kiện trong bảng đơn hàng</b><br>
	Select * from donhang where:<input type="textbox" name="a"><br>
	<input type="submit" name="nhan" value="Nhấn">
</form>
<?php
	$ketnoi=mysqli_connect("localhost","root","") or die("Trang không kết nối được");
	mysqli_select_db($ketnoi,"quanlydonhang") or die("Không vào được");
	$a=$_POST["a"];
	$lenhsql="select madon,makh,manv,ngaydat,gia from donhang where $a";
	$chay=mysqli_query($ketnoi, $lenhsql);
	$sodong=mysqli_num_rows($chay);
?>

	
	<table border="1">
		<tr>
			<th>Mã đơn hàng</th>
			<th>Mã khách hàng</th>
			<th>Mã nhân viên</th>
			<th>Ngày đặt</th>
			<th>Giá</th>
		</tr>
	


	<?php
	while ($kq=mysqli_fetch_array($chay)) {
		$madh=$kq[0];
		$makh=$kq[1];
		$manv=$kq[2];
		$ngaydat=$kq[3];
		$gia=$kq[4];

		echo "
		<tr>
			<td>".$madh."</td>
			<td>".$makh."</td>
			<td>".$manv."</td>
			<td>".$ngaydat."</td>
			<td>".$gia."</td>
		<tr>";
		
	}
	?>
</body>
</html>