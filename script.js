function gridResize(){
    document.getElementById("container").style.gridTemplateRows = "175px 175px 200px " + (document.getElementById("image1").clientHeight * 0.75) + "px 1000px " + 
    (document.getElementById("image1").clientHeight * 0.75) + "px 2000px " + (document.getElementById("image1").clientHeight * 0.75) + "px 1000px";
}

document.addEventListener('scroll', function(){
    let y = window.pageYOffset;
    var element_position = document.getElementById("aboutMe").offsetTop;
    if(y > element_position){
        document.getElementById("image1").src = "track_pic.JPG";
    }
    else
        document.getElementById("image1").src = "stony_pic.jpg";
})
var slideIndex = 1;

window.addEventListener('load', function(){
    showDivs(slideIndex);
})


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function hoverVideo(hovering, element){
  if(hovering)
    element.play();
  else
    element.pause();
}