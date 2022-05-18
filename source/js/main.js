$(function(){
    $('.slider__content').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="" >',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="" >'
    });
});

$(document).ready(function() {
    $('.mobile-menu-btn').click(function(event) {
        $('.mobile-menu').toggleClass('mobile-menu_show');
    });
});