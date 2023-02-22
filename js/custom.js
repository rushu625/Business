
(function($){

    function onScrollInit(items, trigger)
    {
        items.each(function()
        {
            var osElement = $(this), osAnimationClass = osElement.attr('data-os-animation'), osAnimationDelay = osElement.attr
            ('data-os-animation-delay');
            osElement.css(
            {
                '-webkit-animation-delay' : osAnimationDelay,
                '-moz-animation-delay' : osAnimationDelay,
                'animation-delay' : osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function()
            {
                osElement.addClass('animate__animated').addClass(osAnimationClass);
            },
            {
                triggerOnce : true,
                offset : '90%'
            });
        });
    }

    onScrollInit($('.bu-animate'));

    $('.bu-articale-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
       responsive: [
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },]
        });

})(jQuery)


