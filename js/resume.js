$(function(){
	//锚节点链接的平滑滚动
	var $root = $('html,body');
	$('.circle').click(function(){
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
})