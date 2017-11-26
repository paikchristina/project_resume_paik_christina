// Textillate h1 animation
$(function () {
    $('.tlt').textillate({ in: { effect: 'fadeIn' } });
})

// Backstrech as the body's background
$.backstretch('img/ocean.jpg');


// Custom jquery code
$('h3').on( "click", function() {
    $('h3').addClass('styled');
});
