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
$(".swiper-slide").height($(window).height());
$(".p2 .textBox").width($(window).width());
var swiper = new Swiper('.swiper-container', {
    pagination: '',
    direction: 'horizontal',
    slidesPerView: 1,
    paginationClickable: false,
    spaceBetween: 0,
    mousewheelControl: true
});



//填写数值
$(".p5 input[name=num]").bind("input propertychange",function(){
	var val = $(this).val();
	val = app.commafy(val);
	$(this).val(val);
}); 