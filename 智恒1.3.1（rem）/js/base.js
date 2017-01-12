$(document).ready(function(){
	//new_business页面内
    $('.bd-n-btn').click(function(){
           //给id为btn的元素添加点击事件
          $(this).toggleClass('active');//每次点击的时候，将当前的元素切换active样式
                                        //如果有，则去掉，否则添加
    });
    //goods_order页面内
    $(".order-detail").click(function (){
        $(this).next(".order-t").toggle();
        $(this).toggleClass('active');
        });
   //new Clipboard('.btn-copy');

    //goods_card页面
    $(".goods-name").click(function(){
        if($(this).hasClass('selected')){
            $(".goods-name").removeClass('selected').children('img').animate({
                right:'-0.14rem',
                top:'-0.14rem'},"fast");
            $(this).removeClass("selected");
        }else{
            $(".goods-name").removeClass('selected').children('img').animate({
                right:'-0.14rem',
                top:'-0.14rem'},"fast");
            $(this).addClass("selected").children('img').animate({
                 top: '0.06rem',
                right: '0.1rem',
                width: '0.34rem',
                height: '0.47rem'},"fast");
        };
    });
	//加的效果
	$(".inpt-plus").click(function(){
	    var n=$(this).prev().val();
	    var num=parseInt(n)+1;
	    if(num==0){ return;}
	    $(this).prev().val(num);
	});
	//减的效果
	$(".inpt-minus").click(function(){
	    var n=$(this).next().val();
	    var num=parseInt(n)-1;
	    if(num==0){ return}
	    $(this).next().val(num);
	}); 


	//goods_business页面     business页面
    $(".ipt-both").click(function(){
        if($(this).hasClass('active')){
            $(".ipt-both").removeClass('active').find('div+img').animate({
            top:'-0.12rem'},"fast");
            $(this).removeClass("active");
        }else{
            $(".ipt-both").removeClass('active').find('div+img').animate({
            top:'-0.12rem'},"fast");
            $(this).addClass("active").find('div+img').animate({
                top: '0.06rem',
                right: '0.2rem',
                width: '0.23rem',
                height: '0.31rem'
            },"fast");
        };
    });

    $(".base-input").blur(function(){
        var oPhone= $('.base-input').val();
        var re=/^(13[0-9]{9})||(15[89][0-9]{8})$/;
        if(!re.test(oPhone)){
            alert('请输入正确的手机号码。');
            return false;  
        };
    });

    //activity页面    
    $('.bd-active-btn').click(function(){
 		$(this).addClass("active");
 	});
     //phone页面内        
	//按钮变色的效果
	$(".bd-p-color button").click(function(){
        $("button").removeClass('active');
		$(this).addClass('active');
   });
	$(".bd-p-edition button").click(function(){
        $(" button").removeClass('active');
		$(this).addClass('active');
   });
	$(".bd-p-memory button").click(function(){
        $(" button").removeClass('active');
		$(this).addClass('active');
   });
   //聚焦效果
   	$(".ipt-p-main").focus(function(){
   		$(this).css({
   			backgroundColor:'#fefefe',
   			border:'1px solid #aaa',
   			color:'#333'
   		});
        if(value=='1'){
            value=''
        };
   	}).blur(function(){
   		$(this).css({
   			backgroundColor:'#fff',
   			border:'1px solid #ddd'
   		});
        if(value==''){
            value='1'
        };
   	})
   //限制的效果,最大限额500
    function limitInput(o){
          var value=o.value;
          var min=1;
          var max=500;
          if(parseInt(value)<min||parseInt(value)>max){
              alert('超过最大限额');
              (document.getElementById('#popup').innerHTML).style.display=' ';
          }
    }
}
);

/*window.onload =function(){
    var text = document.getElementById("inp");
    text.onkeyup = function(){
        this.value=this.value.replace(/\D/g,'');
        if(text.value>500){
           text.value = 500;
        }
    };
}*/


    /*
    下拉加载更多
    function getScroolTop(){
    	//滚动条在y轴上的位置
    	var getScrollTop = 0 , bodyScrollTop = 0, documentScroolTop = 0;
    	if (document.body) {
    		bodyScrollTop = document.body.scrollTop;
    	}
    	if (document.documentElement){
    		documentElement = document.documentElement.scrollTop;

    	}
    	scrollTop = (bodyScrollTop- documentElement > 0 ) ? bodyScrollTop : documentElement ;
    	return scrollTop;
    }
    function getWindowHeight () {
    	var windowHeight = 0 ;
    	if (document.compatMode == "CSS1Compate"){

    	}
    }*/

/*

    var divTwo = $('.divTwo');
    //1.禁用div的滚轮事件
    $('.divTwo').mousewheel(function (e) {
            return false;
    });
    //2.如果滚动条到底底部的时候 禁用window的滚轮滚动
    //3.判断滚动的方向
    divTwo.mousewheel(function (e, delta) {
        var decoration = delta > 0 ? 'Up' : 'down';
        $('.divFixed').text(decoration);

        var scrollTop = divTwo.scrollTop();
        var scrollHegiht = divTwo[0].scrollHeight;
        var height = divTwo.height();
        //滚动条 到底部且 滚轮向下滚动
        if (scrollTop + height >= scrollHegiht && delta < 0) {
                e.preventDefault();
        }
                //滚动条 到顶部 且滚轮向上
        else if (scrollTop == 0 && delta > 0) {
                e.preventDefault();
        }
    });
 
    $(document).mousewheel(function (e, delta) {
            $('.divFixed').text(delta);
    });
*/