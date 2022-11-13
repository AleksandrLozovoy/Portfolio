$(function () {
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
});
