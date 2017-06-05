$(function(){
	//锚节点链接的平滑滚动
	var $root = $('html,body');
	$('.circle').click(function(){
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		},500);
		return false;
	})
})

