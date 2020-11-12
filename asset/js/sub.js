$(document).ready(function () {
    //첫번째 슬라이드
    var mySwiper4 = new Swiper('.top_visual .swiper-container', {
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

        $('.top_visual .swiper-container .controller .autostop').on('click', function(){
        $(this).hide().siblings().show();
        mySwiper1.autoplay.stop();
        return false;
        });
        
        $('.top_visual .swiper-container .controller .autoplay').on('click', function(){
        $(this).hide().siblings().show();
        mySwiper1.autoplay.start();
        return false;
        });

        //두번째 슬라이드
        var mySwiper4 = new Swiper('.exOne .swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            //bullet 타입일 경우 버튼 클릭시 이동 가능함
          }
          
        })
});