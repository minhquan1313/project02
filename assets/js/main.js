// Khi cuon chuot xuong 1 ti thi them class vao thanh header
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) $(".header").addClass("this--active");
    else $(".header").removeClass("this--active");
});

// Khi click vao cac muc khac tren thanh header thi xoa class this--active
// va them this--active vao muc vao click vao
$(".header__nav-item").click(function () {
    $(".header__nav-item").removeClass("this--active");
    $(this).addClass("this--active");
});

//Thay doi border-radius cua thanh cuon neu dang o dau trang hay cuoi trang
$(window).on("scroll", function () {
    if ($(this).scrollTop() < 1) $("body").addClass("atTopOfThisWeb");
    else $("body").removeClass("atTopOfThisWeb");

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("body").addClass("atBotOfThisWeb");
    } else $("body").removeClass("atBotOfThisWeb");
});

// Tu dong them va xoa this--active khi luot den noi dung cua tieu de do
$(document).on("scroll", function () {
    if ($(this).scrollTop() >= $("#About").position().top) {
        console.log("I have been reached");
    }
});
