/*!
 * Main
 *
 * Here you can put your js main code
 * Keep in mind that you can moduralize other component to re-use them on other projects
 */
$(function () {


  window.viewportUnitsBuggyfill.init();

  FastClick.attach(document.body);
  new WOW().init();



  var degres = "\n ___   ___     ___   \n|__ \\ / _ \\   / _ \\  \n   ) | | | | | (_) | \n  / /| | | |  \\___/  \n / /_| |_| |         \n|____|\\___/          \n";

  console.log(degres);

});