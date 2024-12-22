$(document).ready(function() {
  
    // Typewriter Effect
    const text = "Hello! I'm ";
    const typingSpeed = 100; 
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            $("#typewriter").text($("#typewriter").text() + text.charAt(i));
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    typeWriter();
    
    // Slider
    const slideCount = $(".slider").length;
    const slideWidth = $(".slider").width();  
    const sliderUlWidth = slideCount * slideWidth;
  
    $("#slider_boxes").css({ width: sliderUlWidth, marginLeft: -800 });
    $("#slider_boxes section:last-child").prependTo("#slider_boxes");
  
    function moveLeft() {
        $("#slider_boxes").animate({
            left: +slideWidth
        }, 200, function() {
            $("#slider_boxes section:last-child").prependTo("#slider_boxes");
            $("#slider_boxes").css("left", "");
        });
    }
  
    function moveRight() {
        $("#slider_boxes").animate({
            left: -slideWidth
        }, 200, function() {
            $("#slider_boxes section:first-child").appendTo("#slider_boxes");
            $("#slider_boxes").css("left", "");
        });
    }
  
    $("button.slider_arrow_prev").click(function() {
        moveLeft();
    });
  
    $("button.slider_arrow_next").click(function() {
        moveRight();
    });





  
});
