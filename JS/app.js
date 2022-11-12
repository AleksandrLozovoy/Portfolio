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
        transform: "rotateX(0)",
      });
    }, 200);
  });

  let modalClose = $("[data-close]");

  modalClose.on("click", function (event) {
    event.preventDefault();

    $(modalID).removeClass("show");
    $("body").removeClass("no-scroll");
  });

  $(".modal").on("click", function () {
    let $this = $(this);
    $this.removeClass("show");
    $("body").removeClass("no-scroll");
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });
});
