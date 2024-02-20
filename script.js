$( document ).ready(function() {

    $('.fon').on('click', function() {
        $('.fon').css('z-index', '1');
        $('.karta').css('z-index', '2');
    });

    $('.karta').on('click', function() {
        $('.fon').css('z-index', '2');
        $('.karta').css('z-index', '1');
    });

    // $('.bl').on('click', function() {
    //     $(this).css('left', '210px');
    // });


});
