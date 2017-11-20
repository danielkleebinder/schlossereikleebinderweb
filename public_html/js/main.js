/* 
 * AUTHOR: Daniel Kleebinder
 * CREATED ON: 23.06.2017
 */


$(document).ready(function () {
    // Disable smooth scrolling on internet explorer to
    // prevent "jumpy" page effect
    if (!!document.documentMode) {
        $('html').on("mousewheel", function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }

    // Enable the "scroll to top" function
    $("#scrolltop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Slideanimation effect
    $(window).scroll(function () {
        $('.slideanimation').each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    // Enable fancybox
    $("[data-fancybox]").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic",
        animationEffect: "fade",
        infobar: true
    });
});


/**
 * Scroll to the parent element within 500 ms.
 */
$.fn.scrollView = function () {
    return this.each(function () {
        $("html, body").animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
};