//版权 北京智能社©, 保留所有权利

$.fn.focusImg=function(){
	//this == .play	==一堆
	this.each(function(index,element){
		var aCardHead=$(element).find('ol li');	
		var oCardBody=$(element).find('ul');
		var oCardBodyLi=$(element).find('ul li');
		
		aCardHead.click(function(){
			aCardHead.removeClass('active');
			$(this).addClass('active');
			oCardBody.animate({"top":-$(this).index()*oCardBodyLi.height()+'px'});
		});
	});
	
	/*
	var aCardHead=this.find('ol li');	//this==jq对象
	var oCardBody=this.find('ul');
	var oCardBodyLi=this.find('ul li');
	
	aCardHead.click(function(){
		aCardHead.removeClass('active');
		$(this).addClass('active');
		oCardBody.animate({"top":-$(this).index()*oCardBodyLi.height()+'px'});
	});
	*/
};