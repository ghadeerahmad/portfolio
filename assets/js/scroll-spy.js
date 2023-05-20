
$(document).ready(function () {

    var sectionIds = $('a.nav-link');

    $(document).scroll(function () {
        sectionIds.each(function () {
            $('.content').removeClass('fadeUp')
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            $('.content').addClass('fadeUp')
            if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });



});