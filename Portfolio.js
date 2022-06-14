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
      strings: ["Computer Science Student","Research Intern", "ML/Data Science Enthusiast","Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  
});