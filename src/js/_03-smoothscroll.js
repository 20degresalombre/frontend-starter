/*!
 * A smooth scroll on the page when you click on link with a href == "#my-id"
 * Note that if you have a fixed header you can replace 0 by the height of your header
 */
 
$(function(){

  // SMOOTH SCROLLING (with negative scroll of 0 for header)
  $('a[href*=#]:not([href=#])').on('click touchend', function(e) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
            scrollTop: (target.offset().top - 0)
        }, 850);
        return false;
      }
    }
  });

});