<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="post" action="">Giải phương trình bậc 2<br>
	Nhập: a<input type="textbox" name="a" style="width: 30px">
	b<input type="textbox" name="b" style="width: 30px">
	c<input type="textbox" name="c" style="width: 30px"><br>
	a^2+b+c
	<input type="submit" name="tinhdel" value="Tính">
</form>
<?php
$kq='';
if (isset($_POST['tinhdel'])) {
	$a=$_POST['a'];
	$b=$_POST['b'];
	$c=$_POST['c'];
	$del=$b*$b-4*$a*$c;
	if ($a=='') {
		$kq='Đừng để a rỗng';
	}
	elseif ($a==0) {
		if ($b=='') {
			$kq='Đừng để b rỗng';
		}
		else if ($c=='') {
			$kq='Đừng để c rỗng';
		}
		else if ($b==0) {
			$kq='Không có nghiệm';
		}
		else{
			$kq='Nghiệm phương trình là '.-($c)/$b;
		}

	}
	else{
		
		if ($del<0) {
			$kq='Phương trình vô nghiệm';
		}
		else if ($del==0) {
			$kq='Phương trình có nghiệm là x1=x2='.-($b)/(2*$a);
		}
		else{
			$kq='Phương trình có nghiệm là x1='.(-$b + $del)/(2*$a).'; x2='.(-$b-$del)/(2*$a);
		}
	}
	echo $kq;
	
}
?>
</body>
</html>