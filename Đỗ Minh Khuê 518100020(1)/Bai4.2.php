<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post" action="">
	Kiểm tra số lẻ số chẵn<br>
	Nhập số: <input type="textbox" name="a"><br>
	<input type="submit" name="click" value="Kiểm tra">
</form>
<?php
$kq='';
if (isset($_POST['click'])) {
	$a=$_POST['a'];
	if ($a%2==0) {
		$kq='là số chẵn';	
	}
	elseif ($a%2!==0) {
		$kq='là số lẻ';
	}
	echo $kq;
}

?>
</body>
</html>