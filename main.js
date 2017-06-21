
// initialize slider
$(document).ready(function(){
  $('.myContent').slick({
    autoplay: true
});

// slides through content in order
 $('myContent').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.nav'
});

// displays all images in nav, selected image becomes visisble in slider
$('.nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.myContent',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});