$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) $(".header").addClass("this--active");
        else $(".header").removeClass("this--active");
    });
});
