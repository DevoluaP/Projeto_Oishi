$(document).ready(() => {
    $(window).resize(() => {
        if ($(window).width() >= 768) {
            $('#bt-menu').css('display', 'none');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'flex');
        } else {
            $('#bt-menu').css('display', 'inline');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'none');
        }
    }); 

    $('#bt-menu').click(() => {
        $('#bt-menu').css('display', 'none');
        $('#bt-fechar').css('display', 'inline');
        $('.menu-principal').css('display', 'flex');
    });

    $('#bt-fechar').click(() => {
        $('#bt-fechar').css('display', 'none');
        $('#bt-menu').css('display', 'inline');
        $('.menu-principal').css('display', 'none');
    });
});

$('.imagens-do-ambiente').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});