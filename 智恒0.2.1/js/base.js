$(document).ready(function(){
	pageH();
	popup();
});
$(window).load(function(){
	
});

function pageH(){
	function pageMinH(){
		var pageH = $(window).height();
		$(".wrap").css("min-height",pageH);
	};
	pageMinH();
	$("html,body").resize(function(){
		pageMinH();
	});
};

function popup(){
	function center(){
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		$(".center").each(function(){
			var centerWidth = $(this).width();
			var centerHeight = $(this).height();
			var left = (screenWidth-centerWidth)/2;
			var top = (screenHeight-centerHeight)/2;
			if (screenHeight>centerHeight) {
				$(this).css({"position":"fixed","z-index":"50","top":top,"left":left,"margin":"0px"});
			};
			if (screenHeight<centerHeight) {
				$(this).css({"position":"relative","margin":"20px 0 20px","top":"0px","left":left});
			};
		});
	};
	center();
	$("html,body,.center").resize(function(){
		center();
	});
}