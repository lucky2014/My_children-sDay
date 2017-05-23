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
			$(".p1Text").addClass("myZoomIn1");

			$(".p2 .text1").removeClass("zoomInDown1");
			$(".p2 .text2").removeClass("zoomInDown2");
			$(".p2 .text3").removeClass("zoomInDown3");

			$(".p3 .textBox").removeClass("bounceInLeft");
			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 1){
			$(".p1Text").removeClass("myZoomIn1");

			$(".p2 .text1").addClass("zoomInDown1");
			$(".p2 .text2").addClass("zoomInDown2");
			$(".p2 .text3").addClass("zoomInDown3");
			
			$(".p3 .textBox").removeClass("bounceInLeft");
			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 2){
			$(".p1Text").removeClass("myZoomIn1");
			$(".p2 .textBox").removeClass("zoomInDown");
			$(".p3 .textBox").addClass("bounceInLeft");
			$(".p4 .textBox").removeClass("lightSpeedIn");
		}else if(nowInd == 3){
			$(".p1Text").removeClass("myZoomIn1");
			$(".p2 .textBox").removeClass("zoomInDown");
			$(".p3 .textBox").removeClass("bounceInLeft");
			$(".p4 .textBox").addClass("lightSpeedIn");
		}else{
			$(".p1Text").removeClass("myZoomIn1");
			$(".p2 .textBox").removeClass("zoomInDown");
			$(".p3 .textBox").removeClass("bounceInLeft");
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