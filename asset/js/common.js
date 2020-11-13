
var giMenuDuration = 700;

        // 전체 메뉴를 오른쪽으로 슬라이드하여서 보여준다.
		function ShowMenu(){
			$('.opacity').css( { 'display' : 'block' } );
			$('.opacity' ).css( { 'right' : '-100%' } );
			$('.opacity' ).animate( { right: '0px' }, { duration: giMenuDuration } );
		}

        // 전체 메뉴를 왼쪽으로 슬라이드하여서 닫는다.
		function HideMenu(){
			$('.opacity' ).animate( { right: '-100%' }, { duration: giMenuDuration, complete:function(){ $('.opacity' ).css( { 'display' : 'none' } ); } } );
		}

$(document).ready(function () {
	var $gnb = $('.opacity');

	var $first = $gnb.find('[data-link="first"]');
	var $last = $gnb.find('[data-link="last"]');

	 //첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
	 $first.on('keydown', function (e) {
        console.log(e.keyCode);   //tab을 클릭하면 9를 반환
        if ( e.shiftKey && e.keyCode == 9) {
          e.preventDefault();   //포커스 이동을 강제로 제한
          $last.focus();        //처음 포커스로 이동, #gnbWrap을 벗어나지 않고 순환됨
        }
      });
      //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
      $last.on('keydown', function (e) {
        if ( !e.shiftKey && e.keyCode == 9) {
          e.preventDefault();
          $('.btn_close').focus();
        }
      });
});
