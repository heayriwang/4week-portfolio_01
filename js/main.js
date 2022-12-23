$(function () {


    $('.mainSlide').slick({
        slidesToShow: 1,
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
})

// $('.mainSlide').on('afterChange', function (e, s, c) {
//     $('.main_dots li').eq(c).addClass('on')
//         .siblings().removeClass('on');
//     $('.mainVisual .main_num').text(c + 1)
// });
