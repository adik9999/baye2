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
  $(".btn-ban").mouseover(function(){
    var aud=new Audio("watson.mp3");
    aud.play();
  });
  $(".btn-ban").click(function(){
    var aud=new Audio("punch.mp3");
    aud.play();
  });
  $(".btn-ban").click(function() {
    window.open("https://morning-tundra-62034.herokuapp.com/");
  });
  $(".btnnr").click(function(){
    window.open("https://adik9999.github.io/anotherOne/instruct.html");
  });
  $(".btnnr").mouseover(function(){
    var aud=new Audio("watson.mp3");
    aud.play();
  });
  $(".btnnr").click(function(){
    var aud=new Audio("punch.mp3");
    aud.play();
    // window.open("https://en.wikipedia.org/wiki/Chess",);
  });