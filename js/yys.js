$(function(){
	(function($){
	    $.fn.hoverDelay = function(options){
	        var defaults = {
	            hoverDuring: 500,
	            outDuring: 0,
	            hoverEvent: function(){
	                $.noop();
	            },
	            outEvent: function(){
	                $.noop();
	            }
	        };
	        var sets = $.extend(defaults,options || {});
	        return $(this).each(function(){
	            var that = this;
	            var hoverTimer, outTimer;
	            $(this).hover(
	                function(){
	                    clearTimeout(outTimer);
	                    hoverTimer = setTimeout(
	                        function(){sets.hoverEvent.apply(that)},
	                        sets.hoverDuring
	                    );
	                },
	                function(){
	                    clearTimeout(hoverTimer);
	                    outTimer = setTimeout(
	                        function(){sets.outEvent.apply(that)},
	                        sets.outDuring
	                    );
	                }
	            );
	        });
	    }
	})(jQuery);
	// 我的世界显隐
	$(".header-myworld").hoverDelay({
	    hoverEvent: function(){
	    $(".header-myworld-img-show").slideDown();
	    $(".header-myworld-img").css("visibility","hidden");
	    }
	});
	// $(".header-myworld").mouseover(function(){
	//     $(".header-myworld-img-show").slideDown();
	//     $(".header-myworld-img").css("visibility","hidden");
 //    })
    $(".header-myworld").mouseleave(function(){
	    $(".header-myworld-img-show").slideUp(function(){
	   	   $(".header-myworld-img").css("visibility","visible");
	    });
	   
    })
});


$(function(){
    //滚动固定导航栏
    $(window).scroll(function(){
    	console.log(1);
    	if($(window).scrollTop()>$(".header").height()){
    		$(".bottom-nav").css({"background":"#fff","position":"fixed","top":"0",});
    		$(".header-main-nav a").css("color","#000");
    	    $(".header-main-nav span").css("background-position","-1689px -248px");  
            // 字体hover事件
    	    $(".header-main-nav ul li").mouseover(function(){
				$(this).children().css({"color":"#bc2e2e"});		
			})
			$(".header-main-nav ul li").mouseleave(function(){
				$(this).children().css({"color":"#000"});
			})
            //二维码显示
            $(".header-main-nav-code").show();
           //官方渠道子菜单显隐
            $(".header-main-nav-qudao1").mouseover(function(){
            	$(".header-main-nav-qudao").slideDown();
            })
            //  $(".header-main-nav-qudao").mouseover(function(){
            // 	$(".header-main-nav-qudao").slideDown();
            // })
            // $(".header-main-nav-qudao").mouseleave(function(){
            // 	$(".header-main-nav-qudao").slideUp();
            // })
            $(".header-main-nav-qudao1").mouseleave(function(){
            	$(".header-main-nav-qudao").slideUp();
            })
    	}
    	else if($(window).scrollTop()<$(".header").height()){
    		$(".bottom-nav").css({"background":"none","position":"absolute","top":"56px"});
    		$(".header-main-nav a").css("color","#fff");
    	    $(".header-main-nav span").css("background-position","-1689px -224px");       
            //hover事件
			$(".header-main-nav ul li").mouseover(function(){
				$(this).children().css({"color":"#bc2e2e"});		
			})
			$(".header-main-nav ul li").mouseleave(function(){
				$(this).children().css({"color":"#fff"});
			})

			//二维码隐藏
			$(".header-main-nav-code").hide();
    	}
    })	
})

