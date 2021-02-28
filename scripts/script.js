jQuery(function ($) {
  $(".online-services-wrap .category").on("click", function () {
    var parent = $(this).closest(".online-services-wrap");
    parent.toggleClass("active");
    parent.find(".services").toggleClass("hide");
  });
});