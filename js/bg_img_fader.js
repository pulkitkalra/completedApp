$(document).ready(function(){

  var count = 0;
  var images = ["images/img1.jpg","images/img2.jpg","images/img3.jpg"];
  var image = $(".fader");

  image.css("background-image","url("+images[count]+")");

  setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(500);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },8000);
});