$(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) $(".header").addClass("this--active");
    else $(".header").removeClass("this--active");
});

$(".header__nav-item").click(function () {
    $(".header__nav-item").removeClass("this--active");
    $(this).addClass("this--active");
});
