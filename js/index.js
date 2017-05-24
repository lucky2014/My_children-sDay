var app = {
	init: function(){
		var me = this;
		
	},
	commafy: function(num){
		var reg = /(?=(?!\b)(\d{3})+$)/g; 
    	return String(num.replace(/\,/g,"")).replace(reg, ',');  
	}
};

app.init();

//
$(".swiper-slide").height($(window).height()).width($(window).width()).css("overflow","hidden");
var swiper = new Swiper('.swiper-container', {
    pagination: '',
    direction: 'horizontal',
    slidesPerView: 1,
    paginationClickable: false,
    spaceBetween: 0,
    mousewheelControl: true,
    onSlideChangeEnd: function(swiper){
		var nowInd = swiper.activeIndex;
		//alert(nowInd);
		if(nowInd == 0){
			$(".p2 .textBox,.p4 .textBox,.p3 .textBox").hide();
			$(".p1Text").addClass("myZoomIn1");

			$(".p2 .text1").removeClass("zoomInDown1");
			$(".p2 .text2").removeClass("zoomInDown2");
			$(".p2 .text3").removeClass("zoomInDown3");

			$(".p3 .text1").removeClass("bounceInLeft1");
			$(".p3 .text2").removeClass("bounceInLeft2");
			$(".p3 .text3").removeClass("bounceInLeft3");

			$(".p3 .textBox").removeClass("bounceInLeft");
			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 1){
			//所有文字隐藏
			$(".p2 .textBox,.p4 .textBox,.p3 .textBox").hide();
			$(".p1Text").removeClass("myZoomIn1");
			setTimeout(function(){
				$(".p2 .textBox").show();
			});

			$(".p2 .text1").addClass("zoomInDown1");
			$(".p2 .text2").addClass("zoomInDown2");
			$(".p2 .text3").addClass("zoomInDown3");
			
			$(".p3 .text1").removeClass("bounceInLeft1");
			$(".p3 .text2").removeClass("bounceInLeft2");
			$(".p3 .text3").removeClass("bounceInLeft3");

			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 2){
			//所有文字隐藏
			$(".p2 .textBox,.p4 .textBox,.p3 .textBox").hide();
			//所有背面隐藏，正面显示
			$(".p1Text").removeClass("myZoomIn1");

			$(".p2 .text1").removeClass("zoomInDown1");
			$(".p2 .text2").removeClass("zoomInDown2");
			$(".p2 .text3").removeClass("zoomInDown3");

			setTimeout(function(){
				$(".p3 .textBox").show();
			});
			$(".p3 .text1").addClass("bounceInLeft1");
			$(".p3 .text2").addClass("bounceInLeft2");
			$(".p3 .text3").addClass("bounceInLeft3");

			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 3){
			//所有文字隐藏
			$(".p2 .textBox,.p4 .textBox,.p3 .textBox").hide();
			$(".p1Text").removeClass("myZoomIn1");

			$(".p2 .text1").removeClass("zoomInDown1");
			$(".p2 .text2").removeClass("zoomInDown2");
			$(".p2 .text3").removeClass("zoomInDown3");

			$(".p3 .text1").removeClass("bounceInLeft1");
			$(".p3 .text2").removeClass("bounceInLeft2");
			$(".p3 .text3").removeClass("bounceInLeft3");

			//第三页文字显示
			setTimeout(function(){
				$(".p4 .textBox").show();
			});
			$(".p3 .textBox").removeClass("bounceInLeft");
			$(".p4 .textBox").addClass("lightSpeedIn");
		}else{
			//所有文字隐藏
			$(".p2 .textBox,.p4 .textBox,.p3 .textBox").hide();
			$(".p1Text").removeClass("myZoomIn1");

			$(".p2 .text1").removeClass("zoomInDown1");
			$(".p2 .text2").removeClass("zoomInDown2");
			$(".p2 .text3").removeClass("zoomInDown3");

			$(".p3 .text1").removeClass("bounceInLeft1");
			$(".p3 .text2").removeClass("bounceInLeft2");
			$(".p3 .text3").removeClass("bounceInLeft3");
			
			$(".p4 .textBox").removeClass("lightSpeedIn");
		}
    },
    nextButton:'.swiper-button-next', //下一页
});


$(".p2_front").click(function(){
	$(this).addClass("font").siblings(".p2_back").addClass("back");
});


//填写数值
$(".p5 input[name=num]").bind("input propertychange",function(){
	var val = $(this).val();
	val = app.commafy(val);
	$(this).val(val);
}); 