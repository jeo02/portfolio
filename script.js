//resizes grid based on elements
function gridResize(){
  let row1 = document.getElementById("profile").offsetHeight/2 + "px ";
  let row2 = row1;
  let row3 = document.getElementById("content").offsetHeight + "px ";
  let row4_6_8 = (document.getElementById("image1").clientHeight * 0.75) + "px ";
  let row5 = document.getElementById("contentAbout").offsetHeight + 30 + "px ";
  let row7 = document.getElementById("contentProj").offsetHeight + 30 + "px ";
  let row9 = document.getElementById("contentContact").offsetHeight + 30 + "px";

  document.getElementById("container").style.gridTemplateRows = row1 + row2 + row3 + row4_6_8 + row5 + row4_6_8 + row7 + row4_6_8 + row9;
  document.getElementById("imageFinal").style.height = document.getElementById("image1").clientHeight+"px";
}

document.addEventListener('scroll', function(){
    let y = window.pageYOffset;
    var element_position1 = document.getElementById("aboutMe").offsetTop;
    var element_position2 = document.getElementById("projects").offsetTop;
    if(y > element_position1 && y < element_position2){
      document.getElementById("image1").src = "track_pic.JPG"; 
    }
    else if (y >element_position2)
      document.getElementById("image1").src = "Colombia_pic.jpg";
    else if(y < element_position1)
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