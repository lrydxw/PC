$(function(){
	
	$(".con-header a").click(function(){
		var index=$(this).index();
		$(".reg-pt").eq(index).addClass("active").siblings().removeClass("active");	
		$(this).addClass("active").siblings().removeClass("active");
		$(".reg-zc").eq(index).addClass("active").siblings().removeClass("active");	
		
	})

		var arr_pzc = [];//初始设为[0,0,0]
		var arr_zzc = [];//初始设为[0,0,0,0]
		var arr_pdl = [];//初始设为[0,0]
		var arr_ydl = [];//初始设为[0,0]
		
		/*手机号注册——手机号码*/
		$("#zc-p-phone").focus(function(){					
			$(this).next().css({display:"block"})
		})
		
		$("#zc-p-phone").blur(function(){
			var str=$(this).val();
			var reg=/^1[3458][0-9]\d{8}$/
			
			//var reg=/^[1-3]\d{10}$/
			if(reg.test(str)){				
				$(".zc-p-phone").next().hide()
				$(".zc-p-phone").removeClass("active");
				arr_pzc[0]=1;
			}else{								
				$(".zc-p-phone").next().html("请输入11位数字手机号码").show()
				$(".zc-p-phone").addClass("active").siblings().removeClass("active");
				arr_pzc[0]=0;
			}			
			$(this).next().css({display:"none"})

		})
		


		/*手机号注册——验证码*/
		$("#yz-yzm").focus(function(){					
			$(this).nextAll().eq(1).css({display:"block"})
		})
		$("#yz-yzm").blur(function(){
			var str=$(this).val();
			var reg1="123";
			if(reg1==str){	
				arr_pzc[1]=1;
				$(".zc-yzm").next().hide();
				$(".zc-yzm").removeClass("active");
			}else{
				arr_pzc[1]=0;
				$(".zc-yzm").next().html("验证码输入错误").show()
				$(".zc-yzm").addClass("active").siblings().removeClass("active");
			}			
			$(this).nextAll().eq(1).css({display:"none"})

		})
		
		
		/*手机号注册——密码*/
		
		$("#zc-p-password").focus(function(){					
			$(this).next().css({display:"block"})
		})
		
		$("#zc-p-password").blur(function(){
			var str=$(this).val();
			var reg=/^[a-zA-Z0-9]{8,16}$/
			if(reg.test(str)){	
				arr_pzc[2]=1;
				$(".zc-p-password").next().hide();
				$(".zc-p-password").removeClass("active");
			}else{		
				arr_pzc[2]=0;
				$(".zc-p-password").next().html("密码格式不对").show();
				$(".zc-p-password").addClass("active").siblings().removeClass("active");				
			}			
			$(this).next().css({display:"none"})
		

		})
		
		
/*			function getRandom(init,end){
				var d = end+1-init;
				return Math.floor(Math.random()*d+init);
			}
		
						//产生四个随机的字母
			var arr1 =[];
				for(var i=0;i<4;i++){
					var rd = getRandom(65,90);
					var ch = String.fromCharCode(rd);
					arr1.push(ch);
				}
*/				//document.write(arr+"<br/>");
				//document.write(arr.join("")+"<br/>"); //把数组转化为字符串，提供的参数是分隔符
				$(".zc-yzm>span").click(function(){
					$(this).html(123)
					})
				
				

		
	/*---------手机号---注册点击--------------*/	
		$(".zhuce").click(function(){
			if($("#zc-p-checkbox").is(':checked')){
				for(var i=0;i<arr_pzc.length;i++){
					if(arr_pzc[i]==0){alert("请按要求输入信息");
						 return false;
						 
					}
				} 				
				alert("注册成功");
				
				var userName = $("#zc-p-phone").val();
				var passWord = $("#zc-p-password").val();
				localStorage["userName"] = userName;
				localStorage["passWord"] = passWord;
				localStorage["isLogin"] = "true";
				console.log(userName)
				window.location.href = "index.html";
			}else{
				alert('请接受协议');
			}

		})
		
		


	
/*-----------------------账号注册------------------------------------------------------------*/
		
		$("#zc-phone1").focus(function(){
			$(this).nextAll().eq(1).show();

		})
		$("#zc-phone1").blur(function(){
			$(this).nextAll().eq(1).hide();
			var str=$(this).val();
			var reg=/^[a-zA-Z0-9_-]+$/;
			if(reg.test(str)){				
				if(str.length<4||str.length>32){
					$(".zc-phone").next().html("账号长度不对，需输入4-32位").show()
					$(".zc-phone").addClass("active").siblings().removeClass("active");
					arr_zzc[0]=0;
				}else{
					$(".zc-phone").next().hide()
					$(".zc-phone").removeClass("active");
					arr_zzc[0]=1;
				}								
			}else{								
				$(".zc-phone").next().html("输入格式不对，不能有特殊字符").show();
				$(".zc-phone").addClass("active").siblings().removeClass("active");
				arr_zzc[0]=0;
				
			}						
		})
		
		/*---------账号注册----密码--------------*/
		
		$("#zc-p1-password").focus(function(){					
			$(this).next().show();
		})
		
		$("#zc-p1-password").blur(function(){
			var str=$(this).val();
			//密码太简单了
			//var reg=/^[a-zA-Z0-9]{8,16}$/
			var reg=/^(?![^a-zA-Z]+$)(?!\D+$).{8,15}$///密码必须是数字加字母
			//var reg=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/ //没限制长度
			if(reg.test(str)){
				arr_zzc[1]=1;
				$(".zc-p-password").next().hide();
				$(".zc-p-password").removeClass("active");
			}else{
				arr_zzc[1]=0;
				$(".zc-p-password").next().html("密码格式不对").show();
				$(".zc-p-password").addClass("active").siblings().removeClass("active");
			}			
			$(this).next().hide();

		})
		
		/*---------账号注册----邮箱--------------*/
		
		$("#zc-p-email").focus(function(){					
			$(this).next().show();
		})
		
		$("#zc-p-email").blur(function(){
			var str=$(this).val();
			var reg=/^\w+@\w+(\.\w+)+$/
			if(reg.test(str)){
				arr_zzc[2]=1;
				$(".zc-p-email").next().hide();
				$(".zc-p-email").removeClass("active");
			}else{
				arr_zzc[2]=0;
				$(".zc-p-email").next().html("邮箱格式不对").show();				
				$(".zc-p-email").addClass("active").siblings().removeClass("active");
			}			
			
			$(this).next().hide();

		})
		
		
		
		/*---------账号注册----验证码--------------*/
		
		$("#yz-yzm1").focus(function(){					
			$(this).nextAll().eq(1).css({display:"block"})
		})
		$("#yz-yzm1").blur(function(){
			var str=$(this).val();		
			var reg1="123";			
			if(reg1==str){	
				arr_zzc[3]=1;
				$(".zc-yzm").next().hide();
				$(".zc-yzm").removeClass("active");
			}else{
				arr_zzc[3]=0;
				$(".zc-yzm").next().html("验证码输入错误").show();
				$(".zc-yzm").addClass("active").siblings().removeClass("active");
			}			
			$(this).nextAll().eq(1).hide();

		})
	
	/*---------账号--注册点击--------------*/	
		$(".zhuce_zh").click(function(){
			if($("#zc-z-checkbox").is(':checked')){
				for(var i=0;i<arr_zzc.length;i++){
					if(arr_zzc[i]==0){
						 return false;
					}
				} 				
				alert("注册成功");
				var userName = $("#zc-phone1").val();
				var passWord = $("#zc-p1-password").val();
				localStorage["userName"] = userName;
				localStorage["passWord"] = passWord;
				
				localStorage["isLogin"] = "true";
				window.location.href = "index.html";
			}else{
				alert('请接受协议');
				
				
				
			}

		})




/*----------------------------登录--------------------------------------*/

/*--------普通登录--手机号---------*/

	$("#pt-phone").focus(function(){					
		$(this).next().css({display:"block"})
		
	})
	
	$("#pt-phone").blur(function(){
		
		$(this).next().hide();
		
	})
	
/*---------普通登录--密码----------*/
	
	$("#pt-password").focus(function(){					
		$(this).next().css({display:"block"})
		/*alert("1")*/
	})
	
	$("#pt-password").blur(function(){
		
		$(this).next().hide();
		
	})

	
	
	$(".denglu").click(function(){
		var name=localStorage["userName"];
		var pass=localStorage["passWord"];
		console.log(name);
		console.log(pass)
		
		var userName = $("#pt-phone").val();
		alert(userName);
		var passWord = $("#pt-password").val();
		if(name==userName && pass==passWord){
			alert("登录成功");
			window.location.href = "index.html";
			localStorage["isLogin"] = "true";
		}else{
			alert("账号与密码输入不匹配");
		}
		
	})
	


/*--------------------- 验证码登录--手机------------------------------------*/

	$("#yz-phone1").focus(function(){					
		$(this).next().css({display:"block"})		
	})
	
	$("#yz-phone1").blur(function(){
	
		var str=$(this).val();
		var reg=/^1[3458][0-9]\d{8}$/
		//var reg=/^[1-3]\d{10}$/;
		if(reg.test(str)){
			arr_ydl[0]=1;
			$(".yz-phone").next().hide();
			$(".yz-phone").removeClass("active");
		}else{
			$(".yz-phone").next().html("手机号输入不正确").show();
			$(".yz-phone").addClass("active").siblings().removeClass("active");
			arr_ydl[0]=0;
		}
		$(this).next().hide();
	})


/*------------- 验证码登录--验证码----------------------*/

	$("#yz-yzm").focus(function(){					
		$(this).nextAll().eq(1).css({display:"block"})		
	})
	
	$("#yz-yzm").blur(function(){
		$(this).nextAll().eq(1).hide();				
		var str=$(this).val();		
		var reg1="123";			
		if(reg1==str){	
			arr_ydl[1]=1;
			$(".yz-yzm").next().hide();
			$(".yz-yzm").removeClass("active");
		}else{	
			arr_ydl[1]=0;
			$(".yz-yzm").next().html("验证码输入不正确").show();
			$(".yz-yzm").addClass("active").siblings().removeClass("active");
		}			
		$(this).nextAll().eq(1).hide();

	})


	$(".denglu_yz").click(function(){
		//var name=localStorage["userName"];
		var name=$("#yz-phone1").value;
		var pass=123;
		var userName = $("#yz-phone1").val();
		var passWord = $("#yz-yzm").val();
		if(name==userName && pass==passWord){
			alert("登录成功");
			window.location.href = "index.html";
			localStorage["isLogin"] = "true";
		}else{
			alert("手机号与验证码输入不匹配");
		}
		
	})


/*-------------二维码显示隐藏---------------------*/

	$(".ewm-x").mouseenter(function(){
		$(".ewm").show();
	});
	$(".ewm").mouseleave(function(){
		$(".ewm").hide();
	})
})
