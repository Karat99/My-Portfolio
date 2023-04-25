/*Event Listeners*/
$("#work").click(function() {
    $("html, body").animate({
        scrollTop: $("#scroll1").offset().top
    }, 300);
});

$("#skills").click(function() {
    $("html, body").animate({
        scrollTop: $("#scroll2").offset().top
    }, 600);
});

$("#about").click(function() {
    $("html, body").animate({
        scrollTop: $("#scroll3").offset().top
    }, 1000);
});