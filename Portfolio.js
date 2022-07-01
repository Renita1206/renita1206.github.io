$(document).ready(function(){

  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  });

  // typing text animation script
  var typed = new Typed(".iam", {
      strings: ["Computer Science Student","ML/Data Science Enthusiast","Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".intro", {
    strings: ["a Computer Science Student", "a ML/Data Science Enthusiast","a Coder","an Avid Reader"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
  });
  
  var typed = new Typed(".farewell-note", {
    strings: ["Made by Renita Kurian",
              "Vivamus Moriendum Est",
              "Don't let the muggles get you down.",
              "I am Divergent. And I can't be controlled.",
              "It's no use going back to yesterday, because I was a different person then.",
              "I am IronMan.",
              "We're all just a bunch of addicts, struggling with our drug of choice.",
              "In love with being alive"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

});

function openNav() {
  $('.nav-links').addClass("visible");
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  $('.nav-links').removeClass("visible");
}
