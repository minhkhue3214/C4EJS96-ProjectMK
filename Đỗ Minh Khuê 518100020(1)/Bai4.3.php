<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post" action="">
	<p style="font-weight: bold;">Đếm số chữ</p>
<br>Nhập:<input type="textbox" name="x"><br>
<input type="submit" name="count" value="Nhấn">
</form>
</body>
<?php
if (isset($_POST['count'])) {
	$a=$_POST['x'];
	echo "Số phần tử của chuỗi là ".strlen($a);
}
?>
</html>