$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('.box-shadow').toggleClass('active-shadow');
        $('.blacked').toggleClass('blacked__on');
    });
});
