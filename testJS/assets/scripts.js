function showTicket(){
    document.getElementById('modal').style.display = "block";
}
function closeTicket(){
    document.getElementById('modal').style.display = "none";
}
function pay(){
    var x = document.getElementsByClassName('modal-input').length;
    for(var i=0; i<x;i++){
        var y = document.getElementsByClassName('modal-input')[i].value = "";
    }
}
function send(){
    var x = document.getElementsByClassName('form').length;
    for(var i=0; i<x;i++){
        var y = document.getElementsByClassName('form')[i].value = "";
    }
}

function closeimg(){
    document.getElementById('showimages').style.display = "none";
}

function showimg(number){
    var x = document.getElementsByClassName("member-img")[number].getAttribute("src");
    document.getElementById('showimages').style.display = "block";
    var ans = '<div class="img-showing"><img width="100%" src="';
    ans += x;
    ans += '" alt=""></div>'
    document.getElementById('showimages').innerHTML = ans;
}

function showMenu(){
    var x = document.getElementById("header").style.height;
    if(x=="auto"){
        document.getElementById("header").style.overflow = "hidden";
        document.getElementById("header").style.height = null;
    }
    else{
        document.getElementById("header").style.overflow = "visible";
        document.getElementById("header").style.height = "auto";
    }
}

function showMap(){
    var x='https://www.google.com/maps/place/H%E1%BB%8Dc+vi%E1%BB%87n+C%C3%B4ng+ngh%E1%BB%87+B%C6%B0u+ch%C3%ADnh+vi%E1%BB%85n+th%C3%B4ng/@20.9806141,105.7873528,18.82z/data=!4m12!1m6!3m5!1s0x3135accdd8a1ad71:0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!8m2!3d20.980506!4d105.787925!3m4!1s0x3135accdd8a1ad71:0xa2f9b16036648187!8m2!3d20.980506!4d105.787925?hl=vi-VN';
    window.open(x, '_blank');
}

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

alert("Hướng dẫn sử dụng website");
alert("Các tính năng trên website:\n1. Bấm vào thanh nav để di lướt nhanh hơn\n2. Bấm vào ảnh member để xem được ảnh rõ hơn\n3. Bấm vào 'Buy tickets' để có thể mua vé và thông tin khách hàng sẽ được lưu lại trên google sheet\n4. Bấm vào bản đồ để biết được địa chỉ trên google map ");
alert("Tương thích trên tất cả các thiết bị\n Tương thích trên trình duyệt chrome, Edge, Cốc Cốc, ...")
var confirm = window.confirm("Hãy enjoy moment này");