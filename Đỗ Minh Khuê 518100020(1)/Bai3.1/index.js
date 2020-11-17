function TinhNgay() {
    var year=f1.year.value;
    var thang=f1.thang.value;
    switch(thang){
        case"January":
        case"March":
        case"May":
        case"July":
        case"August":
        case"October":
        case"December":{
            alert("Có 31 ngày của "+thang+" trong năm "+year)
            break;

        }
        case"April":
        case"June":
        case"September":
        case"November":{
            alert("Có 30 ngày của "+thang+" trong năm"+nhapnam)

        }
        case"Febuary":{
            if ((year % 400==0) || (year % 4==0) && (year % 100!=0)) {
                alert("Có 29 ngày của "+thang+" trong năm "+year)
            } else {alert("Có 28 ngày của "+thang+" trong năm "+year)}
        }
    }
    
}