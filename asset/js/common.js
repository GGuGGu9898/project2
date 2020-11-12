
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


});