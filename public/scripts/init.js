let colors = ["#0057ff", "#484d5c", "#ff0d7b", "#674b7c", "#ff3627", "#864aff", "#5b1ee1"]
var i = Math.floor(Math.random() * colors.length)
var color = colors[i];
document.body.style.backgroundColor = color;

var font = document.createElement('link');
font.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">';
document.head.appendChild(font);

var contactlink = document.createElement('link');
contactlink.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
document.body.appendChild(contactlink);


var contact = document.createElement('p');
contact.innerHTML = '<p style = "text-align:center;">\
  <!-- Add font awesome icons -->\
  <a href="https://www.facebook.com/profile.php?id=100012337741780" class="fa fa-facebook"></a>\
  <a href="https://www.instagram.com/yunho0421/" class = "fa fa-instagram"></a>\
  <a href="https://www.youtube.com/channel/UCTOWIV_bY6bRggJueR9Rfhw/videos" class = "fa fa-youtube"></a>\
  <a href="https://www.pinterest.co.kr/f35jsflove/_saved/" class = "fa fa-pinterest"></a>\
  <a href="https://github.com/YunhoKim21" class = "fa fa-github"></a>\
</p>';


document.body.appendChild(contact);
