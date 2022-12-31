function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Stack overflow */
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $('.navbar-default').addClass('top-of-page');
    } else {
        $('.navbar-default').removeClass('top-of-page');
    }
});