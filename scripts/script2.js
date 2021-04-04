$(document).ready(function () {
  var $submit = $("#buton-final").prop('disabled', true);
  $cbs = $('input[name="options"]').click(function () {
    if ($cbs.is(":checked")) {
      $submit.removeAttr('disabled');
    }
  });
});

function test(clickedId) {
  let thisDay = new Date().getDate();
  let thisMonth = new Date().getMonth() + 1;
  let thisYear = new Date().getFullYear();
  let thisHour = new Date().getHours();
  let thisMinute = new Date().getMinutes();
  if (document.getElementById(clickedId).value < thisDay || document.getElementById(clickedId).title < thisMonth || document.getElementById(clickedId).size < thisYear || document.getElementById(clickedId).slot < thisHour || document.getElementById(clickedId).lang < thisMinute){
    document.getElementById(clickedId).setAttribute('disabled', '');
    document.getElementById(clickedId).checked = false;
  };
}