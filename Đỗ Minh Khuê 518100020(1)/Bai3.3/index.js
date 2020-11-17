function Tinh_tien() {
    var x=f1.x.value;
    var y=f1.y.value;
    var gg=f1.giamgia.value;
    var thanhtoan=1;
    switch(gg){
        case"5%":{
            thanhtoan=(x*y)-(x*y*0.05)
            alert("Số tiền quý khách phải trả là "+thanhtoan+"đ")
        break;
        }
        case"8%":{
            thanhtoan=(x*y)-(x*y*0.08);
        alert("Số tiền quý khách phải trả là "+thanhtoan+"đ")
        break;}
    }

}