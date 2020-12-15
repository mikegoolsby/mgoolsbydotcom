(function ($) {
    $(document).ready(function () {
        // hide entire header
        $('header').hide(); 

        // fade in header

        $(function(){
            $(window).scroll(function () { 
                if ($(this).scrollTop() > 100){
                    $('header').fadeIn();
                } else {
                    $('header').fadeOut();
                }
            });
        })
    });
});