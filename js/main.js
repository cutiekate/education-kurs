new WOW().init();


//Smooth scrolling page
var $page = $('html, body');
$('a[href*="#"]').on('click', function() {
    $page.animate({
        scrollTop: $($(this).attr('href').length <= 1?"#head":$.attr(this, 'href')).offset().top - 110
    }, 400);
    return false;
});
$('.next-step').on('click', function(){
    $('.step').removeClass('active');
    $('.step-two').addClass('active');
});