//  khai báo slide cho nút dot
var slides1 = document.getElementById("slide1");
var slides2 = document.getElementById("slide2");
var slides3 = document.getElementById("slide3");
// khai báo icon nút ấn
var btn1 = document.getElementById("bot1");
var btn2 = document.getElementById("bot2");
var btn3 = document.getElementById("bot3");
// xữ lý ảnh đầu
 btn1.onclick = function(){
  slides1.style.display="block";
  slides2.style.display="none";
  slides3.style.display="none";
 }
 btn2.onclick = function(){
  slides1.style.display="none";
  slides2.style.display="block";
  slides3.style.display="none";
 }

 btn3.onclick = function(){
  slides1.style.display="none";
  slides2.style.display="none";
  slides3.style.display="block";
 }

// tự chuyển slide ảnh 

window.onload = function(){
  setTimeout("switch_Image()", 3000);
}
var current = 1;
var num_image = 6;
function switch_Image(){
    current++;
    document.images['image'].src ='images/banner' + current + '.jpg';
   if(current < num_image){
     setTimeout("switch_Image()", 3000);
   }else if(current == num_image){
     current = 0;
     setTimeout("switch_Image()", 3000);
   }
}




//   xữ lý list song sơn tùng 
  var listsongst = document.getElementById("list-Son-tung");
  var btnst = document.getElementById("btnST");
  var listsongcd = document.getElementById("list-Chi-Dan")
  var btncd = document.getElementById("btnCD")
    btnst.onclick = function(){
        listsongst.style.display = "block";
        listsongcd.style.display="none";
        btnst.style.backgroundColor="green";
        btncd.style.backgroundColor="gray";
        listsongba.style.display="none";
        btnba.style.backgroundColor="gray";
      
    }
    // xữ lý song chi dân
    btncd.onclick= function(){
        listsongcd.style.display="block";
        listsongst.style.display="none";
        btncd.style.backgroundColor="green";
        btnst.style.backgroundColor="gray";
        listsongba.style.display="none";
        btnba.style.backgroundColor="gray";
    }
    
    // xữ lý cho  song Bảo Anh
    var listsongba = document.getElementById("list-Bao-Anh");
    var btnba  = document.getElementById("btnBA");
    btnba.onclick = function(){
      listsongba.style.display = "block";
      btnba.style.backgroundColor="green";
      listsongst.style.display="none";
      btnst.style.backgroundColor="gray";
      listsongcd.style.display="none";
      btncd.style.backgroundColor="gray";
      
    }



