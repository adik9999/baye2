$(".rand-img").click(function() {
    $(".rand-img").addClass("touch-img");
    var aud = new Audio("woosh.wav");
    aud.play();
    setTimeout(function() {
      $(".rand-img").removeClass("touch-img");
    },1000 );
  });
  $(".foot").click(function() {
    window.open("https://morning-tundra-62034.herokuapp.com/");
  });