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
              "For in dreams we enter a world that is entirely our own.",
              "It's no use going back to yesterday, because I was a different person then.",
              "And those who were seen dancing were thought to be insane by those who could not hear the music.",
              "I am IronMan.",
              "We're all just a bunch of addicts, struggling with our drug of choice.",
              "Paradise isn't a place, it's a feeling.",
              "I wonder if fears ever really go away, or if they just lose their power over us.",
              "In the end, we'll all become stories.",
              "Suddenly you're ripped into being alive. And life is pain, and life is suffering, and life is horror. But my God, you're alive and it's spectacular",
              "Sometimes the greatest adventure is simply a conversation."],
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
