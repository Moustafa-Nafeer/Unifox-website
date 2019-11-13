$(document).ready(function () {
    // section header >> small screen
    // show icon on click this button 
    
    $('i.icon').click(function(){
        $('.nav-list').slideToggle();
    });
    // when scroll ... do sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if( sc > 100)
            {
                $("header").addClass('sticky');
            }
        else
            {
                $("header").removeClass('sticky');
            }
        // section static
        // countTo run plugin 
        if( sc > 2000)
        {
            $('.stat-count').countTo();
            
            $(window).off('scroll');
        }
        // fadein scroll top btn
        if( sc > 500)
            {
                $('.scrolltop').fadeIn();
            }
        else
            {
                $('.scrolltop').fadeOut();
            }
        
    });
    
    //section portoflio
    // change button bg-color when be active 
    
    $('.buttons button').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn'); 
        var cssfilter = $(this).attr('id');
        if( cssfilter === 'all')
        {
            $('.images > div').fadeIn();
        }
        else
            {
                $('.images > div').fadeOut();
                $('.images').contents().filter('.' + cssfilter).fadeIn();
            }
    });
    // owl carsoul >> team section
                $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
    
        // section choose >> panel
    
        $('.c-panel li').click(function(){
            $(this).addClass('active-btn').siblings().removeClass('active-btn');
            var p = $(this).data('role');
            $('.content > div ').hide();
            $('.content').contents().filter('#' + p ).fadeIn();
        });
    
            // magnific-popup video section choose
                $('.pop').magnificPopup({
                  type: 'iframe'
                  // other options
                });
    
    // section getstarted "slick"
            $('.slick').slick({
                nextArrow : false,
                prevArrow : false,
            });
    // scroll to top 
    $('.scrolltop').click(function(){
       $('body , html').animate({scrollTop : 0},500);
    });
    
    // smooth scroll 
    
});