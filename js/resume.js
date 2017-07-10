$(function(){
	//锚节点链接的平滑滚动
	var $root = $('html,body');
	$('.slip').click(function(){
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		},500);
		return false;
	});

	$('.exp-slide').click(function(){
		if ($.attr(this,'exp') == 1) {
			$("li[exp='2']").css('background-color','rgb(175,113,100)');
			$("li[exp='1']").css('background-color','rgb(98,60,50)');
			$('#exp1').css('opacity',"1");
			$('#exp2').css('opacity',"0");
		}else{
			$("li[exp='1']").css('background-color','rgb(175,113,100)');
			$("li[exp='2']").css('background-color','rgb(98,60,50)');			
			$('#exp2').css('opacity',"1");
			$('#exp1').css('opacity',"0");
		}
	});

	//鼠标滚动至页面节点
	function fixedScrollListener(event){
		event.preventDefault();//阻止默认的鼠标滚动行为
		var part = $(document).height() < $('body').height() ? $(document).height() : $('body').height(); //页面高度
		var direction = null;
		var scrollTopOld = $(document).scrollTop();
		var scrollTopNew = 0;
		event = event || window.event;
		direction = event.wheelDelta || event.detail
		// if (event.wheelDelta) {// IE/Opera/Chrome
		// 	direction = event.wheelDelta;
		// }else{
		// 	direction = event.detail;
		// };
		if (direction == 120 || direction == -3) {//向上翻滚
			direction = false;
		}else{//向下翻滚
			direction = true;
		};
		scrollTopNew = (direction==true ? scrollTopOld+part:scrollTopOld-part);
		// scrollTopNew = (direction==true ? scrollTopOld + part > part * 4 ? part*4: scrollTopOld + part : scrollTopOld - part < 0 ? 0 : scrollTopOld - part);
		$root.animate({
			scrollTop:scrollTopNew
		},500);
	}

	var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
    //Firefox事件：DOMMouseScroll、IE/Opera/Chrome事件：mousewheel
    var mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";
	if (document.addEventListener) {
		window.addEventListener(mousewheel,fixedScrollListener,false);
	};

})