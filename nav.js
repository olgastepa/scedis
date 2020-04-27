const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');
    //Toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

            //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
    });
}

navSlide();



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
   if (content.style.display === "block") {
     content.style.display = "none";
   } else {
      content.style.display = "block";
   }
  });
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}