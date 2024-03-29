/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR SOLARTECH                      |||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";

//====Main menu===
function mainmenu() {
  //Submenu Dropdown Toggle
  if ($(".main-menu li.dropdown ul").length) {
    $(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>');

    //Dropdown Button
    $(".main-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
    });
  }
}

//===Language switcher===
function languageSwitcher() {
  if ($("#polyglot-language-options").length) {
    $("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({
      effect: "slide",
      animSpeed: 500,
      testMode: true,
      onChange: function (evt) {
        alert("The selected language is: " + evt.selectedItem);
      },
    });
  }
}

//===Header Sticky===
function stickyHeader() {
  if ($(".stricky").length) {
    var strickyScrollPos = 100;
    if ($(window).scrollTop() > strickyScrollPos) {
      $(".stricky").addClass("stricky-fixed");
      $(".scroll-to-top").fadeIn(1500);
    } else if ($(this).scrollTop() <= strickyScrollPos) {
      $(".stricky").removeClass("stricky-fixed");
      $(".scroll-to-top").fadeOut(1500);
    }
  }
}

//Update Header Style and Scroll to Top
function headerStyle() {
  if ($(".header-bottom-style2").length) {
    var windowpos = $(window).scrollTop();
    var siteHeader = $(".header-bottom-style2");
    var sticky_header = $(".fixed-header .sticky-header");
    var scrollLink = $(".scroll-to-top-style2");
    if (windowpos > 50) {
      siteHeader.addClass("fixed-header");
      sticky_header.addClass("animated slideInDown");
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass("fixed-header");
      sticky_header.removeClass("animated slideInDown");
      scrollLink.fadeOut(300);
    }
  }
}

//===Search box ===
function searchbox() {
  //Search Box Toggle
  if ($(".seach-toggle").length) {
    //Dropdown Button
    $(".seach-toggle").on("click", function () {
      $(this).toggleClass("active");
      $(this).next(".search-box").toggleClass("now-visible");
    });
  }
}

// Scoll To Top
function scrollToTop() {
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
}

// ===Prealoder===
function prealoader() {
  if ($(".preloader").length) {
    $(".preloader").delay(200).fadeOut(500);
  }
}

//  Fact counter
function CounterNumberChanger() {
  var timer = $(".timer");
  if (timer.length) {
    timer.appear(function () {
      timer.countTo();
    });
  }
}

// Single Product Tab
function singleProductTab() {
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }
}

// Price Filter
function priceFilter() {
  if ($(".price-ranger").length) {
    $(".price-ranger #slider-range").slider({
      range: true,
      min: 10,
      max: 200,
      values: [11, 99],
      slide: function (event, ui) {
        $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
        $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
      },
    });
    $(".price-ranger .ranger-min-max-block .min").val(
      "$" + $(".price-ranger #slider-range").slider("values", 0)
    );
    $(".price-ranger .ranger-min-max-block .max").val(
      "$" + $(".price-ranger #slider-range").slider("values", 1)
    );
  }
}

//Accordion Box
function accordion() {
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".accord-btn", function () {
      if ($(this).hasClass("active") !== true) {
        $(".accordion .accord-btn").removeClass("active");
      }

      if ($(this).next(".accord-content").is(":visible")) {
        $(this).removeClass("active");
        $(this).next(".accord-content").slideUp(500);
      } else {
        $(this).addClass("active");
        $(".accordion .accord-content").slideUp(500);
        $(this).next(".accord-content").slideDown(500);
      }
    });
  }
}

//Progress Bar / Levels
if ($(".progress-levels .progress-box .bar-fill").length) {
  $(".progress-box .bar-fill").each(
    function () {
      $(".progress-box .bar-fill").appear(function () {
        var progressWidth = $(this).attr("data-percent");
        $(this).css("width", progressWidth + "%");
      });
    },
    { accY: 0 }
  );
}

//Fact Counter + Text Count
if ($(".count-box").length) {
  $(".count-box").appear(
    function () {
      var $t = $(this),
        n = $t.find(".count-text").attr("data-stop"),
        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text(),
        }).animate(
          {
            countNum: n,
          },
          {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            },
          }
        );
      }
    },
    { accY: 0 }
  );
}

// Cart Touch Spin
function cartTouchSpin() {
  if ($(".quantity-spinner").length) {
    $("input.quantity-spinner").TouchSpin({
      verticalbuttons: true,
    });
  }
}

// Date picker
function datepicker() {
  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }
}

// Time picker
function timepicker() {
  if ($('input[name="time"]').length) {
    $('input[name="time"]').ptTimeSelect();
  }
}

//=== Tool tip ===
function tooltip() {
  if ($(".tool_tip").length) {
    $(".tool_tip").tooltip();
  }
  $;
}

// ===Project===
function projectMasonaryLayout() {
  if ($(".masonary-layout").length) {
    $(".masonary-layout").isotope({
      layoutMode: "masonry",
    });
  }
  if ($(".post-filter").length) {
    $(".post-filter li")
      .children(".filter-text")
      .on("click", function () {
        var Self = $(this);
        var selector = Self.parent().attr("data-filter");
        $(".post-filter li").removeClass("active");
        Self.parent().addClass("active");
        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
  }

  if ($(".post-filter.has-dynamic-filters-counter").length) {
    // var allItem = $('.single-filter-item').length;
    var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
      "li"
    );
    activeFilterItem.each(function () {
      var filterElement = $(this).data("filter");
      var count = $(".filter-layout").find(filterElement).length;
      $(this)
        .children(".filter-text")
        .append('<span class="count">' + count + "</span>");
    });
  }
}

function countryInfo() {
  if ($(".area_select").length) {
    $(".area_select").change(function () {
      var val = $(this).val();
      if (val) {
        $(".state:not(#value" + val + ")").slideUp();
        $("#value" + val).slideDown();
      } else {
        $(".state").slideDown();
      }
    });
  }
}

// Select menu
function selectDropdown() {
  if ($(".selectmenu").length) {
    $(".selectmenu").selectmenu();

    var changeSelectMenu = function (event, item) {
      $(this).trigger("change", item);
    };
    $(".selectmenu").selectmenu({ change: changeSelectMenu });
  }
}

//=== Choose Carousel ===
function chooseCarousel() {
  if ($(".choose-carousel").length) {
    $(".choose-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left left"><p>Prev</p></span>',
        '<span class="fa fa-angle-right right"><p>Next</p></span>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}

//=== Working Process Carousel ===
function workingProcessCarousel() {
  if ($(".working-process-carousel").length) {
    $(".working-process-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
}

//=== Project Carousel ===
function projectCarousel() {
  if ($(".project-carousel").length) {
    $(".project-carousel").owlCarousel({
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 15000,
      smartSpeed: 700,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1100: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
}

//=== Blog Carousel ===
function blogCarousel() {
  if ($(".blog-carousel").length) {
    $(".blog-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left left"><p>Prev</p></span>',
        '<span class="fa fa-angle-right right"><p>Next</p></span>',
      ],
      autoplayHoverPause: false,
      autoplay: 15000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1100: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
}

//=== Testimonial Carousel ===
function testimonialCarousel() {
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 15000,
      smartSpeed: 700,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
  if ($(".testimonial-carousel_2").length) {
    $(".testimonial-carousel_2").owlCarousel({
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 15000,
      smartSpeed: 700,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 2,
        },
        1100: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }
}

//=== Team Carousel ===
function teamCarousel() {
  if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}

//=== Branches Carousel ===
function branchesCarousel() {
  if ($(".branches-carousel").length) {
    $(".branches-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left left"><p>Prev</p></span>',
        '<span class="fa fa-angle-right right"><p>Next</p></span>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}

//=== Service Offer Carousel ===
function serviceOfferCarousel() {
  if ($(".service-offer-carousel").length) {
    $(".service-offer-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left left"><p>Prev</p></span>',
        '<span class="fa fa-angle-right right"><p>Next</p></span>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}

//=== Excellent Project Carousel ===
function excellentProjectCarousel() {
  if ($(".excellent-project-carousel").length) {
    $(".excellent-project-carousel").owlCarousel({
      dots: true,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1100: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
}

//=== Testimonial Style2 Carousel ===
function testimonialStyle2Carousel() {
  if ($(".testimonial-style2-carousel").length) {
    $(".testimonial-style2-carousel").owlCarousel({
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left left"><p>Prev</p></span>',
        '<span class="fa fa-angle-right right"><p>Next</p></span>',
      ],
      autoplayHoverPause: false,
      autoplay: 6000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1100: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }
}

//Hidden Sidebar
if ($(".hidden-bar").length) {
  var hiddenBar = $(".hidden-bar");
  var hiddenBarOpener = $(".hidden-bar-opener");
  var hiddenBarCloser = $(".hidden-bar-closer");
  var navToggler = $(".nav-toggler");
  $(".hidden-bar-wrapper").mCustomScrollbar();

  //Show Sidebar
  hiddenBarOpener.on("click", function () {
    hiddenBar.toggleClass("visible-sidebar");
    navToggler.toggleClass("open");
  });

  //Hide Sidebar
  hiddenBarCloser.on("click", function () {
    hiddenBar.toggleClass("visible-sidebar");
    navToggler.toggleClass("open");
  });
}

//LightBox / Fancybox
if ($(".lightbox-image").length) {
  $(".lightbox-image").fancybox({
    openEffect: "fade",
    closeEffect: "fade",

    youtube: {
      controls: 0,
      showinfo: 0,
    },

    helpers: {
      media: {},
    },
  });
}

if ($(".paroller").length) {
  $(".paroller").paroller({
    factor: 0.05, // multiplier for scrolling speed and offset, +- values for direction control
    factorLg: 0.05, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
    type: "foreground", // background, foreground
    direction: "horizontal", // vertical, horizontal
  });
}

// Elements Animation
if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
  });
  wow.init();
}

//Contact Form Validation
if ($("#contact-form").length) {
  $("#contact-form").validate({
    submitHandler: function (form) {
      // $("#contact-form").on('submit',function(){
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before(
        '<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'
      );
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));

      // var form = $(this);
      
      $.ajax({
        url: "./php/send_mail.php",
        method: "post",
        data: {
          form_name: form.form_name.value,
          form_email: form.form_email.value,
          asunto: form.asunto.value,
          form_phone: form.form_phone.value,
          form_message: form.form_message.value,
        },
        success: function (result) {
          console.log(result);

          if (result === "success") {
            $("#form-result")
              .removeClass("alert-danger alert-success")
              .addClass("alert-success");
            $("#form-result")
              .html(
                "Recepcionamos tu mensaje, pronto nos pondremos en contacto contigo."
              )
              .fadeIn("slow");
            form_btn.prop("disabled", false).html(form_btn_old_msg);
            setTimeout(function () {
              $("#form-result").fadeOut("slow");
            }, 6000);
            document.querySelector("#contact-form").reset();
          } else {
            $("#form-result")
              .removeClass("alert-danger alert-success")
              .addClass("alert-danger");
            $("#form-result")
              .html("Algo salio mal intentalo nuevamente!")
              .fadeIn("slow");
            form_btn.prop("disabled", false).html(form_btn_old_msg);
            setTimeout(function () {
              $("#form-result").fadeOut("slow");
            }, 6000);
          }
        },
      });

      // Prevents default submission of the form after clicking on the submit button.
      return false;

      // Email.send({
      //   SecureToken : "42e75685-2bac-4f53-9ee1-b2c8c15d6247",
      //   // Host: "smtp.gmail.com",
      //   // Username: "icontsac.web@gmail.com",
      //   // Password: "ecuvbssglikubezx",
      //   To: ["amolina@icontsac.com", "icontsac.web@gmail.com", "angelmolinaherrera@gmail.com"],
      //   // To: ["gastelu.n.ivan@gmail.com", "icontsac.web@gmail.com"],
      //   From: "gasteluivan007@gmail.com",
      //   Subject: "Formulario web ICONTSAC - " + form.asunto.value ,
      //   Body:
      //     "Este correo fué enviado desde la pagina contactos: <br> Nombre del cliente: " +
      //     form.form_name.value +
      //     "<br> Teléfono: " +
      //     form.form_phone.value +
      //     "<br> Correo electrónico: " +
      //     form.form_email.value +
      //     "<br> Téma: " +
      //     form.asunto.value +
      //     "<br> Mensáje: " +
      //     form.form_message.value,
      // })
      //   .then((message) => {
      //     console.log(message);
      //     if (message === "OK") {
      //       $("#form-result").removeClass("alert-danger alert-success").addClass("alert-success");
      //       $("#form-result")
      //         .html("Recepcionamos tu mensaje, pronto nos pondremos en contacto contigo.")
      //         .fadeIn("slow");
      //       form_btn.prop("disabled", false).html(form_btn_old_msg);
      //       setTimeout(function () {
      //         $("#form-result").fadeOut("slow");
      //       }, 6000);
      //     } else {
      //       $("#form-result").removeClass("alert-danger alert-success").addClass("alert-danger");
      //       $("#form-result")
      //         .html("Algo salio mal intentalo nuevamente!")
      //         .fadeIn("slow");
      //       form_btn.prop("disabled", false).html(form_btn_old_msg);
      //       setTimeout(function () {
      //         $("#form-result").fadeOut("slow");
      //       }, 6000);
      //     }
      //     var frm = document.querySelector("#contact-form").reset();
      //   })
      //   .catch((err) => console.log(err));
    },
  });
}

// Add Comment Form Validation
if ($("#add-comment-form").length) {
  $("#add-comment-form").validate({
    submitHandler: function (form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before(
        '<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'
      );
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType: "json",
        success: function (data) {
          if ((data.status = "true")) {
            $(form).find(".form-control").val("");
          }
          form_btn.prop("disabled", false).html(form_btn_old_msg);
          $(form_result_div).html(data.message).fadeIn("slow");
          setTimeout(function () {
            $(form_result_div).fadeOut("slow");
          }, 6000);
        },
      });
    },
  });
}

// Appoinment Form Validation
if ($("#appoinment-form").length) {
  $("#appoinment-form").validate({
    submitHandler: function (form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before(
        '<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>'
      );
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType: "json",
        success: function (data) {
          if ((data.status = "true")) {
            $(form).find(".form-control").val("");
          }
          form_btn.prop("disabled", false).html(form_btn_old_msg);
          $(form_result_div).html(data.message).fadeIn("slow");
          setTimeout(function () {
            $(form_result_div).fadeOut("slow");
          }, 6000);
        },
      });
    },
  });
}

// Dom Ready Function
jQuery(document).on("ready", function () {
  (function ($) {
    // add your functions
    mainmenu();
    languageSwitcher();
    searchbox();
    scrollToTop();
    CounterNumberChanger();
    singleProductTab();
    priceFilter();
    accordion();
    cartTouchSpin();
    selectDropdown();
    datepicker();
    timepicker();
    tooltip();
    countryInfo();

    chooseCarousel();
    workingProcessCarousel();
    projectCarousel();
    blogCarousel();
    testimonialCarousel();
    teamCarousel();
    branchesCarousel();
    serviceOfferCarousel();
    excellentProjectCarousel();
    testimonialStyle2Carousel();
  })(jQuery);
});

jQuery(window).on("scroll", function () {
  (function ($) {
    stickyHeader();
    headerStyle();
  })(jQuery);
});

// Instance Of Fuction while Window Load event
jQuery(window).on("load", function () {
  (function ($) {
    prealoader();
    projectMasonaryLayout();
  })(jQuery);
});

$(window).enllax();
