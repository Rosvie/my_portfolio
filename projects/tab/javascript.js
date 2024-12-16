
$(document).ready(function() {


  // Tab
  $(".tabcontent").hide();

  $(".tablinks").click(function () {
    var city = $(this).data("city");

    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    $("#" + city).show();
    $(this).addClass("active");
    
  });
  
  $(".tablinks:first").click();
  
});    
