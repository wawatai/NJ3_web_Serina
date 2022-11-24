$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1600: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1260: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    });
})