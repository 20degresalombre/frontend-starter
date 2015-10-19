/*!
 * Button material module
 */
 
$(function(){

  /**
  * When you click on a .btn.material
  * you trigger a wave effect
  */
  $(".btn.material").click(function(e) {
    var parentOffset = $(this).offset(),
        cursorX      = e.pageX - parentOffset.left,
        cursorY      = e.pageY - parentOffset.top;

    $(this).children(".wave").remove();
    $(this).append("<div class=\"wave\"></div>");
    $(this).children(".wave").css({"left" : cursorX + "px", "top" : cursorY + "px"});

    // Launch a callback when the animation is over
    $(".wave").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend", function() {
      waveCallback();
    });
  });

  // Function declaration

  function waveCallback(){
    console.log('Material button wave effect finished');
  }

});