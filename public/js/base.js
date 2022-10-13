$(document).ready(function() {
  // var f = window.onscroll;
  let sectionBars = $(".barWrapper");
  $(window).scroll(function() {
    let py = window.pageYOffset;
    let buffer = window.innerHeight/2;
    $(".barWrapper").removeClass('inview');
    for (let i = sectionBars.length - 1; i >= 0; i--) {
      //55 is anchor css top magnitude
      const elem = document.getElementById(sectionBars[i].attributes.href.value.slice(1));
      if (py > elem.offsetTop - buffer + 55) {
        $(sectionBars[i]).addClass('inview');
        break;
      }
    }
  })
  // window.onscroll = function() {
  //   // f();
    
  //   };
$(".sidebarsWrapper").hover(function() {
    $(".sidebars span").css('opacity', 1);
  }, function() {
    $(".sidebars span").css('opacity', 0);
  })
  window.scroll();
});