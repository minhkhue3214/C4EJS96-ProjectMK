function nhap() {
    var slvan=f1.slvan.value;
    var sltoan=f1.sltoan.value;
    var slanh=f1.slanh.value;
    var tien=0;
    if (f1.gt[0].checked) {
        if (f1.van.checked) {
            tien=tien+slvan*200000;
            }
        if (f1.toan.checked) {
            tien=tien+sltoan*50000;
            }
        if (f1.anh.checked) {
            tien=tien+slanh*30000;
            }
        
        alert("Số tiền cần phải trả là "+tien+ " vnd dong");}
    if (f1.gt[1].checked) {if (f1.van.checked) {
            tien=tien+slvan*200000*0.7;
            }
        if (f1.toan.checked) {
            tien=tien+sltoan*50000*0.7;
            }
        if (f1.anh.checked) {
            tien=tien+slanh*50000*0.7;
            }
        alert("Số tiền cần phải trả là "+tien+" vnd dong");}
}