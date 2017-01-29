/**
 * Created by admin on 28.12.2016.
 */


$(function() {

    $(window).scroll(function() {
        $("#intro-bg,#footer-bg").css({
            "transform":"translate(0%, " + $(this).scrollTop() / 100 +"%)"
        });
    });

    var menuButton = $(".menu-button");
    menuButton.on("click", function(){
        menuButton.toggleClass("change");
        $(".main-nav").slideToggle(300);
   });

    $(".get-app-button").on("click", function() {
        $("#popup").fadeIn();
    });

    $("#close-popup").on("click", function() {
        $("#popup").fadeOut();
    });

    $(window).resize(function() {
        if($(window).width() >= 992) {
            $("#circle").height($("#circle").width()*2);
        } else {
            $("#circle").height(70);
        };
    });

    $(window).resize();

    var button = $(".description-button-list button");
        button.on("click",function () {
            button.removeClass("is-checked");
            $(this).addClass("is-checked");
    });

    button.on("click", function () {
        $(".description-text-list li").fadeOut(1);
        $("#text-" + $(this).attr("id")).fadeIn(500);
    });
});