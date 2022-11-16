$(function () {
  // mobile nav

  let ClickBurger = $("#burger");
  ClickBurger.on("click", function (event) {
    event.preventDefault();
    console.log(0);
    $(".header__nav").toggleClass("header__nav-mobile");
  });

  //  FIXED HEADER
  let header = $("#header");
  let intro = $("#intro");
  let introH = $(intro).innerHeight();
  let headerH = $(header).innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();
    introH = $(intro).innerHeight();

    if (scrollPos > introH + headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // FILTER
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let category = $(this).data("filter");

    if (category == "all") {
      $("[data-category]").removeClass("hide");
    } else {
      $("[data-category]").each(function () {
        let work = $(this).data("category");
        if (work != category) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // MODAL

  let modalClick = $("[data-modal]");

  modalClick.on("click", function (event) {
    event.preventDefault();
    $this = $(this);
    modalID = $this.data("modal");
    $(modalID).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalID).find(".modal__dialog").css({
        transform: "translateY(0)",
      });
    }, 300);

    $(".slick-slider").slick("setPosition");
    $(header).removeClass("fixed");
  });

  let modalClose = $("[data-close]");

  modalClose.on("click", function (event) {
    event.preventDefault();

    setTimeout(function () {
      $(modalID).removeClass("show");
      $("body").removeClass("no-scroll");
    }, 300);

    $(modalID).find(".modal__dialog").css({
      transform: "translateY(-1000px)",
    });
  });

  $(".modal").on("click", function () {
    let $this = $(this);

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 300);

    $(modalID).find(".modal__dialog").css({
      transform: "translateY(-1000px)",
    });
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  // SLIDER : https://kenwheeler.github.io/slick/
  $('[data-slider="slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find("[data-slider='slick']");
    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find("[data-slider='slick']");
    currentSlider.slick("slickNext");
  });

  // Scroll to sections

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    $("html, body").animate(
      {
        scrollTop: elementOffset - headerH,
      },
      500
    );
  });
});
