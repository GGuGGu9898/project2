$(document).ready(function () {
    //첫번째 슬라이더
    var mySwiper1 = new Swiper('.main_visual .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable : 'boolean',
          bulletElement : 'string'
          //bullet 타입일 경우 버튼 클릭시 이동 가능함  
          },//자동실행
          autoplay: { 
            delay: 6000, //1초 = 1000
            disableOnInteraction: false, //swipe 이후에도 자동실행 동작
          }, 
         
        });

        $('.main_visual .swiper-container .controller .autostop').on('click', function(){
        $(this).hide().siblings().show();
        mySwiper1.autoplay.stop();
        return false;
        });
        $('.main_visual .swiper-container .controller .autoplay').on('click', function(){
        $(this).hide().siblings().show();
        mySwiper1.autoplay.start();
        return false;
        });

    var mySwiper2 = new Swiper('.exhibition .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          centeredSildes: 'true',
          watchOverflow :'boolean'
          
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      })
    var mySwiper3 = new Swiper('.artists .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          //bullet 타입일 경우 버튼 클릭시 이동 가능함
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      })

      $(document).ready(function () {
        var scrollT;
        var timer = 0;
      
        $(window).on('scroll', function () {
          clearTimeout(timer);
        
          timer = setTimeout(function () {
            scrollT = $(this).scrollTop();
        
            $('.fade').each(function () {
            if (scrollT > $(this).offset().top - 500) $(this).addClass('on');
            });
          }, 50);
          });
      });
});