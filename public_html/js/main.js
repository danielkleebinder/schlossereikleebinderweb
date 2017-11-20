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

    // Slideanimation effect
    $(window).scroll(function () {
        $('.slideanimation').each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();
            if (pos < winTop + (winHeight * 0.75)) {
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