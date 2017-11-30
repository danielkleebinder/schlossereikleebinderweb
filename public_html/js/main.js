/* 
 Created on : 23.06.2017
 Author     : Daniel Kleebinder
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
        $('.slideanimation, .slideanimation-up, .slideanimation-down, .slideanimation-left, .slideanimation-right').each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            var winHeight = $(window).height();
            if (pos < winTop + (winHeight * 0.75)) {
                if ($(this).hasClass('slideanimation') || $(this).hasClass('slideanimation-up')) {
                    $(this).addClass('slide-up');
                }
                if ($(this).hasClass('slideanimation-down')) {
                    $(this).addClass('slide-down');
                }
                if ($(this).hasClass('slideanimation-left')) {
                    $(this).addClass('slide-left');
                }
                if ($(this).hasClass('slideanimation-right')) {
                    $(this).addClass('slide-right');
                }
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