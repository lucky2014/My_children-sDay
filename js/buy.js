var app = {
	ajaxUrl: "/PICCWxServerAdvance/http/Server.do",
	insureds: [],
	count: 0,
	url: "",
	init: function(){
		var me = this;
		//验证手机
		var regPhone = /^1[34578]\d{9}$/;
		me.validatorInit("phone", "请输入正确的手机号码！", regPhone);

		//验证身份证
		var regIdCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
		me.validatorInit("idCard", "请输入正确的身份证号码！", regIdCard);
	},
	getQueryString: function(name) { //获取URL的参数，isEit
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	},
	validatorInit: function(name, msgStr, reg){
		$("input[name="+name+"]").bind("input propertychange",function(){
			var val = $(this).val();
			if(!val){
				$(".msg span").html(msgStr);
				$(".msg").show();
			}else{
				if(!reg.test(val)){
					$(".msg span").html(msgStr);
					$(".msg").show();
				}else{
					$(".msg").hide();
				}
			}
		});
	},
	getDate3: function(){
		var dd = new Date();
		dd.setDate( dd.getDate() + 3);
		var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);
		var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate()
		return dd.getFullYear() +"-"+ m +"-"+ d;
	},
	submitInit: function(len){
		var me = this;
		var insuredName = $("input[name=parentName]").val();
		var identifyNumber = $("input[name=idCard]").val();
		var mobile = $("input[name=phone]").val();
		var insuredAddress= $("textarea[name=address]").val();

		//获取名单
		me.insureds.push({insuredName: insuredName, mobile: mobile, insuredFlag: "100", identifyNumber: identifyNumber, insuredAddress: insuredAddress});
		var childName = $(".childName");
		for(var j=0; j<childName.length;j++){
			var vv = $(".childName").eq(j).find("input").val();
			if(vv.length>2){
				me.insureds.push({
					insuredName: vv,
					insuredFlag: "010",
					mobile: "13000000000"
				});
			}
		}
		
		var params = {
			planCode:"ZKF",
			startDate: me.getDate3(),
			insurancePeriod: 365,
			count: len,
			sumPrice: $("#sum").html()*100,
			sumAmount: (len*5)+"0000",
			insureds: me.insureds,
			oucCode: me.getQueryString("oucCode"),
			timeLimited:"N",
			benifitlaw: "Y",
			insuredmatch: "N"
		}
		console.log(JSON.stringify(params,null,2));
		$.ajax({
			type: 'post',
			url: me.ajaxUrl,
			data: {cmd:"prpServSaveOrder",value:JSON.stringify(params)},
			dataType: 'json',
			success: function(msg){
				if(msg.code==100){ 
					$(".p6Box dd a").css("pointer-events", "auto"); //添加成功后才能再次点击，防止重复提交
					var object = strToJson(msg.result);
					location.href = "../wxPay/wxPay.html?trade_no="+object;
				}else{
					alert(msg.result)
				}
			}
		});
	},
	add: function(count){
		if(count == 2){
			count = 2;
		}else{
			++count;
			app.count = count;
			if(count == 2){
				$("#reduce").css("display","inline-block");
				$("#add").hide();
			}
		} 
		$(".childName").eq(count).show();
	},
	reduce: function(count){
		var me = this;
		if(count == 0){
			count = 0;
		}else{
			$(".childName").eq(count).hide();
			--count;
			app.count = count;
			if(count == 0){
				$("#add").css("display","inline-block");
				$("#reduce").hide();
			}
		} 
	}
};

//业务逻辑
app.init();

//增加孩子姓名
$("#add").click(function(){
	app.add(app.count);
});
//减少孩子姓名
$("#reduce").click(function(){
	app.reduce(app.count);
});

$(".childName input").bind("input propertychange",function(){
	var len = 0;
	var childName = $(".childName");
	for(var j=0; j<childName.length;j++){
		var vv = $(".childName").eq(j).find("input").val();
		if(vv.length>2){
			len = len+1;
			$("#sum").html((len*6.1).toFixed(2));
			$("#originPrice").html((len*41));
			$(".p6Box dd a").attr("len", len);
		}
	}
});

$(".p6Box dd a").click(function(){
	var self = $(this);
	self.css("pointer-events", "none"); //不能点击，防止重复提交
	
	var len = self.attr("len");
	app.submitInit(len);
});

