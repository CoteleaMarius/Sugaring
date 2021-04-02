$(document).ready(function () {
    var $submit = $("#buton-final").prop('disabled', true);
      $cbs = $('input[name="options"]').click(function () {
        if ($cbs.is(":checked")) {
            $submit.removeAttr('disabled');
        }
      });
  });