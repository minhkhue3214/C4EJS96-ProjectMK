<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form action="" method="post">
		<p style="text-align: center; color: blue;">Khách hàng của bảng khách hàng<br><select>
	</form>
	<?php
	$ketnoi=mysqli_connect("localhost","root","") or die ("không thể kết nối mysql");
	mysqli_select_db($ketnoi, "quanlydonhang") or die ("thông báo không tìm thấy csdl");
		$tenkhoa = "";
	    $lenhsql=" select *
                   from khachhang";
	$chay=mysqli_query($ketnoi,$lenhsql);
	
	while ($kq=mysqli_fetch_array($chay))
	{
		 $tenkhoa = $_POST["<option>$kq[1]</option>"];
		 echo ($tenkhoa);
	}
	?>
	</select></p>
</body>
</html>