
    $(document).ready(function () {
        $(window).on('resize', function () {
          var winHei = $(this).height();
      
          //top_visual 높이 지정 : 창 한칸을 모두 차지 하기
          $('#content .main_visual').css('height', winHei); 
        });

        $(window).trigger('resize');
      
        $(window).on('scroll', function () {
          var scrollT = $(this).scrollTop();
        });

        //첫번째 슬라이더
        var mySwiper1 = new Swiper('.main_visual .swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullet',
              //bullet 타입일 경우 버튼 클릭시 이동 가능함  
              },//자동실행
              /* autoplay: { 
                delay: 6000, //1초 = 1000
                disableOnInteraction: false, //swipe 이후에도 자동실행 동작
              }, */

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
              
            }
           
          })
        var mySwiper3 = new Swiper('.artists .swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
              //bullet 타입일 경우 버튼 클릭시 이동 가능함
            }
           
          })
    });