// Khi cuon chuot xuong 1 ti thi them class vao thanh header
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) $(".header").addClass("this--active");
    else $(".header").removeClass("this--active");
});

// Khi click vao cac muc khac tren thanh header thi xoa class this--active
// va them this--active vao muc vao click vao
// Vi da co script khi luot toi thi no tu add class nen cai nay co ve
// nhu la khong can thiet nua
// $(".header__nav-item").click(function () {
//     $(".header__nav-item").removeClass("this--active");
//     $(this).addClass("this--active");
// });

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
    if ($(this).scrollTop() >= $("#Home").position().top && $(this).scrollTop() <= $("#Home").position().top + $("#Home").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Home']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#About").position().top && $(this).scrollTop() <= $("#About").position().top + $("#About").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='About']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#Product").position().top && $(this).scrollTop() <= $("#Product").position().top + $("#Product").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Product']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#InCome").position().top && $(this).scrollTop() <= $("#InCome").position().top + $("#InCome").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='InCome']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#Road").position().top && $(this).scrollTop() <= $("#Road").position().top + $("#Road").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Road']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#Download").position().top && $(this).scrollTop() <= $("#Download").position().top + $("#Download").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Download']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#FAQ").position().top && $(this).scrollTop() <= $("#FAQ").position().top + $("#FAQ").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='FAQ']").parent().addClass("this--active");
    }

    if ($(this).scrollTop() >= $("#Contact").position().top && $(this).scrollTop() <= $("#Contact").position().top + $("#Contact").height()) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Contact']").parent().addClass("this--active");
    }
});
