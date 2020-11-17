<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post" action="">
	Thanh toán<br>
	<input type="checkbox" name="bun">Bún<input type="textbox" name="a"><br>
	<input type="checkbox" name="pho">Phở<input type="textbox" name="b"><br>
	<input type="checkbox" name="mien">Miến<input type="textbox" name="c"><br>
	Giảm giá: <select name="giamgia">
		<option>0%</option>
		<option>10%</option>
		<option>20%</option>
	</select><br>
	<input type="submit" name="Tinh" value="Tổng tiền">
</form>
<?php
$kq=0;
if (isset($_POST['Tinh'])) {
	$a=$_POST['a'];
	$b=$_POST['b'];	
	$c=$_POST['c'];	
	$giamgia=$_POST['giamgia'];
	switch ($giamgia) {
		case '0%':
			if (isset($_POST['bun'])) {
				$kq=$kq+20000;
			}
			if (isset($_POST['pho'])) {
				$kq=$kq+25000;
			}
			if (isset($_POST['mien'])) {
				$kq=$kq+23000;
			}
			
		case '10%':
			if (isset($_POST['bun'])) {
				$kq=$kq+20000*0.9;
			}
			if (isset($_POST['pho'])) {
				$kq=$kq+25000*0.9;
			}
			if (isset($_POST['mien'])) {
				$kq=$kq+23000*0.9;
			}
			break;
		case '20%':
			if (isset($_POST['bun'])) {
				$kq=$kq+20000*0.8;
			}
			if (isset($_POST['pho'])) {
				$kq=$kq+25000*0.8;
			}
			if (isset($_POST['mien'])) {
				$kq=$kq+23000*0.8;
			}

			break;
	}
	echo "Tổng tiền ".$kq;
}
?>
</body>
</html>