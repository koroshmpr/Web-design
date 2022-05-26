let x = window.matchMedia("(max-width: 1000px)")
$(window).scroll(function() {
    if ($(this).scrollTop()>100)
     {
        $('#hide-item').css('margin-top' , '0');
        $('#hide-item').css('visibility' , 'visible');
        $('#hide-item').css('transition' , ': 0.5s');
    }
    else if (x.matches) {
        $('#hide-item').css('margin-top' , '0');
        $('#hide-item').css('visibility' , 'visible');
        $('#hide-item').css('transition' , ': 0');
    }
    else
    {
        $('#hide-item').css('margin-top' , '-120px');
        $('#hide-item').css('visibility' , 'hidden');
        $('#hide-item').css('transition' , ': 0.5s');
     }
    })
    