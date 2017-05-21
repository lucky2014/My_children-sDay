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
var swiper = new Swiper('.swiper-container', {
    pagination: '',
    direction: 'vertical',
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