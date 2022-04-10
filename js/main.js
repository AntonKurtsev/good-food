$(document).ready(function () {
    
    $('.faq-accordeon__question').click(function () {
        $('.faq-accordeon__question').not($(this)).removeClass('faq-accordeon__question--active');
        $(this).toggleClass('faq-accordeon__question--active');
        $('.faq-accordeon__answer').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    const swiper = new Swiper('.rewievs-slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.rewievs-slider__pagination',
            clickable: true,
        },
    });

});