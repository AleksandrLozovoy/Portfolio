$(function () {
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let category = $(this).data("filter");

    if (category == "all") {
      $("[data-category]").removeClass("hide");
    } else {
      $("[data-category]").each(function () {
        let work = $(this).data("category");
        if (work != category || work == "all") {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
});
