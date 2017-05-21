var shareDetail = {
	init: function(){
		var me = this;
		$("body").height($(window).height());

		var num = me.getQueryString("num");

		if(num == 0){
			$(".showResult .bg").attr("src", "imgs/share_1.png");
			$(".percent").hide();
		}else{
			var index = me.compareInit((num+"").replace(/\,/g, ""));
			var percent = me.percentage[index];

			if(percent>0 && percent <=10){
				$(".showResult .bg").attr("src", "imgs/share_2.png");
			}else if(percent>10 && percent <=50){
				$(".showResult .bg").attr("src", "imgs/share_3.png");
			}else{
				$(".showResult .bg").attr("src", "imgs/share_4.png");
			}

			$(".percent").html(percent).show();
		}
	},
	getQueryString: function(num) { //获取URL的参数，isEit
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	},
	percentage: [2,5,6,8,10,12,15,18,21,26,30,33,40,45,50,51,52,53,55,58,60,63,67,70,75,77,80,83,87,90,92,98],
	compareInit: function(num){
		if(num >= 1 && num <= 10){
			return 0;
		}else if(num >= 11 && num <= 20){
			return 1;
		}else if(num >= 21 && num <= 30){
			return 2;
		}else if(num >= 31 && num <= 40){
			return 3;
		}else if(num >= 41 && num <= 50){
			return 4;
		}else if(num >= 51 && num <= 60){
			return 5;
		}else if(num >= 61 && num <= 70){
			return 6;
		}else if(num >= 71 && num <= 80){
			return 7;
		}else if(num >= 81 && num <= 90){
			return 8;
		}else if(num >= 91 && num <= 100){
			return 9;
		}else if(num >= 101 && num <= 110){
			return 10;
		}else if(num >= 111 && num <= 120){
			return 11;
		}else if(num >= 121 && num <= 130){
			return 12;
		}else if(num >= 131 && num <= 140){
			return 13;
		}else if(num >= 141 && num <= 199){
			return 14;
		}else if(num >= 200 && num <= 400){
			return 15;
		}else if(num >= 401 && num <= 600){
			return 16;
		}else if(num >= 601 && num <= 800){
			return 17;
		}else if(num >= 801 && num <= 900){
			return 18;
		}else if(num >= 901 && num <= 999){
			return 19;
		}else if(num >= 1000 && num <= 1500){
			return 20;
		}else if(num >= 1501 && num <= 2000){
			return 21;
		}else if(num >= 2001 && num <= 3000){
			return 22;
		}else if(num >= 3001 && num <= 4000){
			return 23;
		}else if(num >= 4001 && num <= 5000){
			return 24;
		}else if(num >= 5001 && num <= 6000){
			return 25;
		}else if(num >= 6001 && num <= 7000){
			return 26;
		}else if(num >= 7001 && num <= 8000){
			return 27;
		}else if(num >= 8001 && num <= 9000){
			return 28;
		}else if(num >= 9001 && num <= 10000){
			return 29;
		}else if(num >= 10001 && num <= 15000){
			return 30;
		}else if(num >= 15001){
			return 31;
		}
	},
};

shareDetail.init();

