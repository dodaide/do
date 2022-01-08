var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function openImg(number){
  var x = document.getElementsByClassName("member__img")[number].getAttribute("src");
  document.getElementById("show-img").style.display = "block";
  var ans = '<div onclick="closeBuyTicket();" class="close-window"><i class="fas fa-times"></i></div>';
  ans += '<div class="show-img"><img width="100%" src="' + x + '" alt=""></div></div>';
  document.getElementById("show-img").innerHTML = ans;
}

function closeimg(){
  document.getElementById("show-img").style.display = "none";
}

function openBuyTicket(){
  document.getElementById("modal").style.display = "block";
}

function closeBuyTicket(){
  document.getElementById("modal").style.display = "none";
}

function showMap(){
  var x='https://www.google.com/maps/place/H%E1%BB%8Dc+vi%E1%BB%87n+C%C3%B4ng+ngh%E1%BB%87+B%C6%B0u+ch%C3%ADnh+vi%E1%BB%85n+th%C3%B4ng/@20.9806141,105.7873528,18.82z/data=!4m12!1m6!3m5!1s0x3135accdd8a1ad71:0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!8m2!3d20.980506!4d105.787925!3m4!1s0x3135accdd8a1ad71:0xa2f9b16036648187!8m2!3d20.980506!4d105.787925?hl=vi-VN';
  window.open(x, '_blank');
}

function showMenu(){
  var x = document.getElementById("nav");
  var check = x.style.height;
  if(check=="auto"){
      x.style.overflow = "hidden";
      x.style.height = null;
  }
  else{
      x.style.overflow = "visible";
      x.style.height = "auto";
  }
}
var ticketPlace = new Number;
ticketPlace = 1000;
function selectTicketPlace(sel){
  var giaTri = 'Newyork';
  giaTri = sel.options[sel.selectedIndex].text;
  if(giaTri == 'Newyork'){
    ticketPlace = 1000;
  }
  else if(giaTri == 'Paris'){
    ticketPlace = 700;
  }
  else if(giaTri == 'San Francisco'){
    ticketPlace = 500;
  }
  tinhTien();
}
var typeCost = new Number;
typeCost = 2;
function selectTypeTicket(sel) {
  var giaTri = 'Vip';
  giaTri = sel.options[sel.selectedIndex].text;
  if(giaTri == 'Vip'){
    typeCost = 2;
  }
  else if(giaTri == 'Thường'){
    typeCost = 1;
  }
  else if(giaTri == 'Free'){
    typeCost = 0;
  }
  tinhTien();
}
var soLuong = new Number;
soLuong = 0;
function howManyTicket(){
  var giaTri = document.getElementById("ticket-howmany");
  soLuong = giaTri.value;
  tinhTien();
}
tinhTien();
function tinhTien(){
  var ans = ticketPlace * typeCost *soLuong;
  var meiBeo = document.querySelectorAll(".ticket-cost");
  for(var i = 0; i<meiBeo.length; i++){
    if(i==0){
      meiBeo[i].innerHTML = `Tiền vé: ${ans}$`;
    }
    if(i==2){
      meiBeo[i].innerHTML = `Tổng Tiền vé: ${ans}$`;
    }
  }
}

alert("Hướng dẫn sử dụng website");
alert("Tương thích trên tất cả các thiết bị\n Tương thích trên trình duyệt chrome, Edge, Cốc Cốc, ...")
alert("Các tính năng trên website:\n1. Bấm vào thanh nav để di lướt nhanh hơn\n2. Bấm vào ảnh member để xem được ảnh rõ hơn\n3. Bấm vào 'Buy tickets' để có thể mua vé\n4. Bấm vào bản đồ để biết được địa chỉ trên google map ");
if (window.confirm('Xem danh sách khách hàng, Thôi'))
{
  window.open('https://docs.google.com/spreadsheets/d/1y8Qu0qUzhmENJGihLgvq2GXoemt_DnstLs8wUfjg9_U/edit#gid=0', '_blank');
};