//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});

//scroll to top script
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

// menu toggle
$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
});

// scroll to fix header
var lastScrollTop = 0;
header = document.getElementById("header");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYoffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-60px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// count
$(".add").click(function () {
  if ($("#count").val() < 10) {
    $("#count").val(+$("#count").val() + 1);
  }
});
$(".sub").click(function () {
  if ($("#count").val() > 1) {
    if ($("#count").val() > 1) $("#count").val(+$("#count").val() - 1);
  }
});

// Accordian script

$(".hide_box").hide();

// without arrow
// $(document).on('click', '.slide_box', function(){
//  $(this).find('.hide_box').slideToggle();
//  $(this).siblings().find('.hide_box').slideUp();

// });

//with arrow
$(document).on("click", ".slide_box", function () {
  $(this).find(".hide_box").slideToggle();
  if ($(this).hasClass("active")) {
    console.log("yes");
    $(this).removeClass("active");
  } else {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  }
  $(this).siblings().find(".hide_box").slideUp();
});
