jQuery(function ($) {
  $(".online-services-wrap .category").on("click", function () {
    var parent = $(this).closest(".online-services-wrap");
    parent.toggleClass("active");
    parent.find(".services").toggleClass("hide");
  });
});

$(document).ready(function () {
  var $submit = $("#btn-sub").hide(),
    $cbs = $('input[name="prog"]').click(function () {
      $submit.toggle($cbs.is(":checked"));
    });
});

$(".carousel").carousel({
  interval: 5000,
});