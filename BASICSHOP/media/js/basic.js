let products = JSON.parse(localStorage.getItem('productData'));
if (products == null) {
  localStorage.setItem('productData', JSON.stringify(productData));
  products = JSON.parse(localStorage.getItem('productData'));
}
let user = JSON.parse(localStorage.getItem('userData'));
if (user == null) {
  localStorage.setItem('userData', JSON.stringify(userData));
  user = JSON.parse(localStorage.getItem('userData'));
}
let suaxoa = document.getElementById('suaxoa');
let nutsuaxoa = document.getElementById('nutsuaxoa')
let arrayName = [];
let showNike = document.getElementById('nike');
let showAdidas = document.getElementById('adidas');
let showBalen = document.getElementById('balenciaga');
let showVete = document.getElementById('vetements');
let showMen = document.getElementById('proMen');
let showWoman = document.getElementById('proWomen');
let showApparel = document.getElementById('apparel');
let showShoes = document.getElementById('shoes');
let showAccessories = document.getElementById('accessories');
let showList = document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
let shopCartIcons = document.getElementById('shopCart');
// responsive menu
let menuBtn = document.querySelector(".menu-icon #menu-icon-bars")
let searchBtn = document.querySelector("#search-icon");
let cancelBtn = document.querySelector(".cancel-icon");
let items = document.querySelector(".menu-items")
let form = document.querySelector("#form-search")
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  // cancelBtn.classList.remove("show");
  form.classList.remove("active1");
  // cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active1");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// }
//chuyển đọng trái phải silder show + auto run
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(showDivs, 2000);
}
// show sản phẩm ra từ đầu
getdata()
function getdata() {
  showList.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    soProduct(products[i].id, products[i].img, products[i].name, products[i].price);
  }
}
function soProduct(id, img, name, price) {
  showList.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem" style="padding-bottom: 10px;">
      <div class ="productsImg" style = "position: relative">
        <div class="productImg0" style = "top:0; "><img src="${img[0]}" alt="" ></div>
        <div class="productImg1" style = "position: absolute ; top: 0 ; z-index :-1"><img src="${img[1]}" alt="" ></div>
      </div>
      <div class="productTit">
        <b class="detailPro" style ="font-size:10px;" onclick="detailPro(${id})">${name}</b>
      </div>
      <div style="display:flex">
        <div class="productPrice" style="width:50%;">${price}</div>
        <div style="width:50%; text-align: end;"><button  class="btnToCart" style="background-color: transparent; cursor: pointer; border:none; " onclick="AddPro(${id})" ><i class='fas fa-shopping-basket' ></i></button></div>
        
      </div>
     </div>
    `
  )
}

let ProductsList = document.getElementById('ProductsList')
function searchResult(name) {
  // console.log(name)
  ProductsList.insertAdjacentHTML('beforeEnd',
    `
      <option value="${name}" />              
  `
  )
}
// tên tìm kiếm
function fillArr() {
  for (let i = 0; i < products.length; i++) {
    arrayName.push(products[i].name.toLowerCase())
  }
  // console.log(arrayName)
  for (let i = 0; i < products.length; i++) {
    searchResult(products[i].name)
  }
}
fillArr()
// tìm kiếm theo brand + gender


showApparel.addEventListener('click', () => {
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == `Thơ tự do`);
  getdata(products);
})
showShoes.addEventListener('click', () => {
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == `Thơ bảy chữ`);
  getdata(products);
})
showAccessories.addEventListener('click', () => {
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == `Thơ năm chữ`);
  getdata(products);
})
// tìm kiếm theo tên

function getInputValue() {
  showList.innerHTML = '';
  products = JSON.parse(localStorage.getItem('productData'));
  var inputVal = search_Text.value.toLowerCase();
  products = products.filter(x => x.name.toLowerCase() == inputVal);
  getdata(products);
}
// sắp xếp theo giá 
let sortby = document.getElementById('sortby');
sortby.addEventListener('change', () => {
  products = JSON.parse(localStorage.getItem('productData'));
  if (sortby.value == 'low') {
    products.sort(function (a, b) { return a.price - b.price });
    getdata(products);
  } else if (sortby.value == 'high') {
    products.sort(function (a, b) { return b.price - a.price });
    getdata(products);
  } else {
    getdata(products);
  }
})
//gio hang
let numberCard = document.getElementById('numberCard');
let tabbleCart = document.getElementById('tableCart');
let checkout = document.getElementById('checkout');
let BoxCart = document.getElementById('BoxCart');
let nutx = document.getElementById('nutx');
BoxCart.style.display = 'none';
checkout.style.display = 'none';
numberCard.addEventListener('click', ()=>{
  BoxCart.style.display = 'block';
})
nutx.addEventListener('click', ()=>{
  BoxCart.style.display = 'none';
})
let listPro = new Array;
function AddPro(id) {
  alert('Add to cart successfully');
  for (let item of products) {
    if (item.id === id) {
      if (!listPro.includes(item)) {
        listPro.push(item);
        listPro[listPro.indexOf(item)].number = 1;
      } else {
        listPro[listPro.indexOf(item)].number++
      }
    }
  }
  console.log(listPro);
  updateTable();
  delBill()
}
function updateTable() {
  document.getElementById('numberCard').innerHTML = listPro.length;
  tabbleCart.innerHTML = '';
  let cost = 0; totalPrice = 0;
  for (let item of listPro) {
    idd = item.id;
    img = item.img[0];
    name = item.name;
    number = item.number;
    price = item.price;
    cost = price * number;
    totalPrice += price * number;
    addTable(idd, img, name, number, price, cost, totalPrice)
  }
}
function addTable(idd, img, name, number, price, cost, totalPrice) {
  let totalCart = document.getElementById('totalCart');
  let tabbleCart = document.getElementById('tableCart');
  tabbleCart.insertAdjacentHTML('beforeend',
    `
  <div class = 'boxProducts' style = "width : 70% ; display: flex; padding-bottom : 20px;"> 
    <div class = "BoxImg"><img height="160rem" width="160rem" src="${img}" alt="${idd}"></div>
    <div class = "infoProducts" style = "flex-direction: column;">
      <div class ="boxItems">${name}</div>
      
      <div class ="boxItems">Quantity :<input type="number" id="editNumber_${idd}" placeholder="${number}" value="${number}" style="border:none;outline:none"/></div>
      <div class ="boxItems">$${price}</div>
      <div style="display:flex">
        <div class ="boxItems">$${cost} </div>
        <div class ="boxItems"><button class="btn_delBill" style="background-color: transparent; cursor: pointer; color: red; border-radius: 5px;" onclick="delBill()">Delete</button></div>
      </div>
    </div>
    
  </div>
  `)
  totalCart.innerHTML = 'Subtotal :  $' + totalPrice;
  let editNumber = document.getElementById(`editNumber_${idd}`);
  editNumber.addEventListener('change', () => {
    for (item of listPro) {
      if (item.id == idd) {
        listPro[listPro.indexOf(item)].number = editNumber.value;
        updateTable(listPro);
      }
    }
  })
  checkout.style.display = 'block';
}
function delBill() {
  let btn_delBill = document.getElementsByClassName('btn_delBill');
  for (let i = 0; i < listPro.length; i++) {
    btn_delBill[i].addEventListener('click', () => {
      listPro.splice(i, 1);
      if (listPro.length == 0){
        checkout.style.display = 'none';
      }
      updateTable();
      alert('You have successfully deleted the product');
    })
  }
}
checkout.addEventListener('click', () => {
  checkout.style.display = 'none';
  tabbleCart.innerHTML = '';
  totalCart.innerHTML = '';
  alert('Payment success');
})

//popupShopcart
let shopCart = document.getElementById('btn_shopCart')
let tableCart = document.getElementById('tableCart')
// shopCart.addEventListener("click", =>() {
//     tableCart.style.display = 'block'
// })
// let BoxCart = document.getElementsByClassName('BoxCart');
// shopCartIcons.onclick = function(event){
//   BoxCart.style.display = "block";


// }
//Them xua xoa sp
// let shopCart = document.getElementById('shopCart');





// let update_num = 0;
// let update_state = false;





// function loadTable() {
//   MaTable.innerHTML = '';
//   let products = JSON.parse(localStorage.getItem('productData'));
//   for (let item of products) {
//     let id = item.id;
//     let category = item.category;
//     let name = item.name;
//     let brand = item.brand;
//     let size = item.size;
    
    
//     let price = item.price
//     let img = item.img;
//     let description = item.description;
    
//     MaTable.insertAdjacentHTML('beforeend', `
//   <tr>
//     <td>${id}</td>
//     <td>${category}</td>
//     <td>${name}</td>
//     <td>${brand}</td>
//     <td>${size}</td>
    
   
//     <td>${price}</td>
//     <td>${img.join('</br>')}</td>
//     <td>${description}</td>
    
//     <td>
//       <button class="editPro">Edit</button>
//       <button class="deletePro">Delete</button>
//     </td>
//   </tr>
//   `)
//   }
//   const deletePro = document.getElementsByClassName('deletePro');
//   const editPro = document.getElementsByClassName('editPro');
//   for (let i = 0; i < deletePro.length; i++) {
//     deletePro[i].addEventListener('click', () => {
//       products.splice(i, 1);
//       localStorage.setItem('productData', JSON.stringify(products));
//       loadTable();
//     })
//   }
//   for (let i = 0; i < editPro.length; i++) {
//     editPro[i].addEventListener('click', () => {
//       idPro.value = products[i].id;
//       catPro.value = products[i].category;
//       namePro.value = products[i].name;
//       brandPro.value = products[i].brand;
//       sizePro.value = products[i].size;
      
     
//       pricePro.value = products[i].price;
//       imgPro.value = products[i].img;
//       desPro.value = products[i].description;
      
//       update_state = true;
//       update_num = i;
//     })
//   }
// }
// loadTable()
// btn_add.addEventListener('click', () => {
//   if (idPro.value.value == '' || namePro.value == '' || pricePro.value == '') {
//     alert('dont leave stuff blank')
//   } else if (update_state) {
//     products[update_num] = {
//       id: idPro.value,
//       category: catPro.value,
//       name: namePro.value,
//       brand: brandPro.value,
//       size: sizePro.value.split(','),
      
      
//       price: pricePro.value,
//       img: imgPro.value.split(','),
//       description: desPro.value,
     
//     };
//     update_state = false;
//     localStorage.setItem('productData', JSON.stringify(products));
//     loadTable();
//     idPro.value = ''
//     catPro.value = ''
//     namePro.value = ''
//     brandPro.value = ''
//     sizePro.value = ''
    
    
//     pricePro.value = ''
//     imgPro.value = ''
//     desPro.value = ''
//     typePro.value = ''
//   } else {
//     products.push({
//       id: idPro.value,
//       category: catPro.value,
//       name: namePro.value,
//       brand: brandPro.value,
//       size: sizePro.value.split(','),
      
      
//       price: pricePro.value,
//       img: imgPro.value.split(','),
//       description: desPro.value,
     
//     });
//     localStorage.setItem('productData', JSON.stringify(products));
//     loadTable();
//     idPro.value = ''; catPro.value = ''; namePro.value = ''; brandPro.value = ''; sizePro.value = ''; pricePro.value = ''; imgPro.value = ''; desPro.value = ''; typePro.value = '';
//   };
// });

// Aclear_btn.addEventListener('click', () => {
//   new_id.value = '';
//   newTenBaiTho.value ='';
//   newNamSangTac.value ='';
//   newNoiDung.value ='';
//   newTheTho.value ='';
//   newTenTacGia.value ='';
//   newAnh1.value ='';
//   newAnh2.value ='';
//   newTho.value ='';
//   update_state = false;
// })
var MaTable = document.getElementById('MaTable');
var newId= document.getElementById('new_id')
var newTenBaiTho= document.getElementById('new_tenbaitho')
var newNamSangTac= document.getElementById('new_namsangtac')
var newNoiDung= document.getElementById('new_noidung')
var newTheTho= document.getElementById('new_thetho')
var newTenTacGia= document.getElementById('new_tentacgia')
var newAnh1= document.getElementById('new_anh1')
var newAnh2= document.getElementById('new_anh2')
var newTho= document.getElementById('new_ndTho')
const Aadd_btn = document.getElementById('Aadd_btn');
const Aclear_btn = document.getElementById('Aclear_btn');

let update_num = 0;
let update_state = false;

// console.log(Atable_body);

function Aupdate_table() {
  
  MaTable.innerHTML = '';
  let productData = JSON.parse(localStorage.getItem('productData'));
    for (let data of productData) {
      MaTable.insertAdjacentHTML('beforeend',`<tr><td>${data.id}</td><td>${data.name}</td><td>${data.brand}</td><td>${data.size}</td><td>${data.category}</td><td>${data.price}</td><td>${data.img[0]}</td><td>${data.img[1]}</td><td>${data.description}</td><td><button class="Aremove_btn">X</button><button class="Aupdate_btn">U</button></td></tr>`);
    };

    const Aremove_btns = document.getElementsByClassName('Aremove_btn');
    const Aupdate_btns = document.getElementsByClassName('Aupdate_btn');
// console.log(Aremove_btns)
    for (let i = 0; i < Aremove_btns.length; i++) {
        Aremove_btns[i].addEventListener('click', () => {
            productData.splice(i, 1);
            localStorage.setItem('productData', JSON.stringify(productData));
            Aupdate_table();
        });
    };
    
    for (let i = 0; i < Aupdate_btns.length; i++) {
        Aupdate_btns[i].addEventListener('click', () => {
            update_state = true;
            update_num = i;
            new_id.value =  productData[i].id;
            newTenBaiTho.value =  productData[i].name;
            newNamSangTac.value =  productData[i].brand;
            newNoiDung.value =  productData[i].size;
            newTheTho.value =  productData[i].category;
            newTenTacGia.value =  productData[i].price;
            newAnh1.value =  productData[i].img[0];
            newAnh2.value =  productData[i].img[1];
            newTho.value =  productData[i].description;
        });
    };
};

Aupdate_table();

Aadd_btn.addEventListener('click', () => {
    if (new_id.value == '' || newTenBaiTho.value == '' || newNamSangTac.value == '' || newNoiDung.value == ''  || newTheTho.value == ''  || newTenTacGia.value == ''  || newAnh1.value == '' || newAnh2.value == '' || newTho.value == '' ) {
        alert('dont leave stuff blank')
    } else if (update_state) {
        productData[update_num] ={  id: new_id.value, name: newTenBaiTho.value, brand: newNamSangTac.value,size: newNoiDung.value,category: newTheTho.value,price:newTenTacGia.value,img:[`${newAnh1.value}`,`${newAnh2.value}`],description:newTho.value };
        update_state = false;
        localStorage.setItem('productData', JSON.stringify(productData)); 
        Aupdate_table();
            new_id.value = '';
            newTenBaiTho.value ='';
            newNamSangTac.value ='';
            newNoiDung.value ='';
            newTheTho.value ='';
            newTenTacGia.value ='';
            newAnh1.value ='';
             newAnh2.value ='';
            newTho.value ='';
    } else {
        productData.push({  id: new_id.value, name: newTenBaiTho.value, brand: newNamSangTac.value,size: newNoiDung.value,category: newTheTho.value,price:newTenTacGia.value,img:[`${newAnh1.value}`,`${newAnh2.value}`],description:newTho.value });
        
        Aupdate_table();
        localStorage.setItem('productData', JSON.stringify(productData));
       new_id.value = '';
       newTenBaiTho.value ='';
       newNamSangTac.value ='';
       newNoiDung.value ='';
       newTheTho.value ='';
       newTenTacGia.value ='';
       newAnh1.value ='';
       newAnh2.value ='';
       newTho.value ='';
    };
});
Aclear_btn.addEventListener('click', () => {
       new_id.value = '';
       newTenBaiTho.value ='';
       newNamSangTac.value ='';
       newNoiDung.value ='';
       newTheTho.value ='';
       newTenTacGia.value ='';
       newAnh1.value ='';
       newAnh2.value ='';
       newTho.value ='';
       update_state = false;
})

//detail Product
let show_detail = document.getElementById('show_detail');
function detailPro(id) {
  let found = products.find(x => x.id == id)
  show_detail.innerHTML = '';
 
  show_detail.insertAdjacentHTML('beforeend', `
  <div style="text-align: center; font-size: 32px">Tác Phẩm</div>
  <div class="detail_Pro" style="display:flex;">
    <div class="detail_pic" style="width:50% ; display:flex;"> 
      <div style="width:50% ; padding-right:10px;" ><img src="${found.img[0]}" alt="img1" style="width:100%"/></div>
      <div style="width:50% ; padding-right:10px;"><img src="${found.img[1]}" alt="img2" style="width:100%"/></div>
    </div>
    <div class="detail_all" style="width:50%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
      <p style="font-size:30px;" >${found.category}</p>
      <div style="font-size:50px;">${found.name}</div>
      <div style="font-size:30px;">Tên tác giả: ${found.price}</div>
      <p style="font-size:30px;">Năm sáng tác: ${found.brand}</h1>
      <div id="selectsize" ><div style="font-size:30px;">Nội dung và đặc sắc nghệ thuật:</div>
        
      </div>
      <div id="selectsize" ><div style="font-size:30px;">Nội dung thơ:</div>
      <pre>${found.description}</pre>
      <div>
        <!-- <button class="btn" onclick="AddProduct(${id})">Add to bags</button> -->
        <a href="./index.html"><button id="closeindex" class="btn" >Go back</button></a>
        
      </div>
    </div>
  </div>
  `);
  let selectsize = document.getElementById('selectsize');
  let arr = found.size;
  for (item of arr) {
    selectsize.insertAdjacentHTML('beforeend', `<label>${item}</label><br>`)
  }
}