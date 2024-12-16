
$(document).ready(function() {


// Character Counting
const $textarea = $("#textarea");
const $counterarea = $("#counterarea");
const $remainingarea = $("#remainingarea");

$textarea.on("keyup", function() {
  updateCounter();
});

updateCounter();

function updateCounter() {
  $counterarea.text($textarea.val().length);
  $remainingarea.text($textarea.prop("maxLength") - $textarea.val().length);
}


});    

