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
			$('#exp1').css('opacity',"1");
			$('#exp2').css('opacity',"0");
		}else{
			$('#exp2').css('opacity',"1");
			$('#exp1').css('opacity',"0");
		}
	});
})