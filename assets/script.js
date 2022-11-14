$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 150) {
        $(".navbar-bg").css("background-color" , "white");
      }

      else{
          $(".navbar-bg").css("background-color" , "rgba(92, 127, 101, 0)");  	
      }
  })

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    let x = 1;
    do {
      let opacity = x - ((scroll+1)/151)
      $(".container-text").css("opacity", opacity)
    } while (opacity > 0 && scroll < 150);
  })
})