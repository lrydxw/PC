
/*-------公共导航---------*/
	
	
	$(function(){
		
	/*-----------导入公共头部尾部---------------------------*/
	

		
		/*var phoneNumber = "phoneNumber";//
		var phonePwd = "phonePwd";//
		var isLogin = "isLogin";//*/
		//$("#louti").load("louti.html");
		$("#foot").load("foot.html");
	/*-----------导入公共头部头部---------------------------*/
		$("#headerr").load("header.html",function(){
			
			$('.x').click(function(){
				$('.q').slideUp(1000)
				$('.x').hide(300)
				})
			$(".nav-item").mouseenter(function()
			{
				var index=$(this).index();
				$(".nav-item-children").eq(index).stop().slideDown()
				$(this).addClass("active").siblings().removeClass("active");
				$(".nav-item-children1").eq(index).stop().animate({'left':'0px'},1000);
				
				//$(this).find('img').stop().fadeTo(1000,.3)
			});
			
			$(".nav-item").mouseleave(function()
			{
				var index=$(this).index();
				$(".nav-item-children").eq(index).stop().slideUp()
				$(this).addClass("active").siblings().removeClass("active");
				$(".nav-item-children1").eq(index).stop().animate({'left':'60px'})
				$(".menu-product-item").stop().fadeIn(1000,1)
			});
			
				
			$(".nav-item-children .menu-product-item").mouseenter(function(){
					
				$(this).stop().fadeIn(100,1);
				$(this).siblings().stop(true).fadeTo(100,.3);
			})
			$(".nav-item-children .menu-product-item").mouseleave(function(){
					
				$(this).stop().fadeTo(100,1);
				$(this).siblings().stop(true).fadeTo(100,1);
			})
/*--------------登录 退出  显示隐藏--------------------------------*/
			
			
			
			
			var userName = localStorage["userName"];
			var isLogin = localStorage["isLogin"];
			
			if(isLogin){
				if(isLogin=="true"){      //登录状态
					$(".mz_login").removeClass("act");     //登录、注册隐藏
					$(".name").addClass("act");    //显示用户名
					$("#userName").html(userName);   //显示用户名，从localStorage拿取数据。
					$(".topbar-order-msg").show();  //登录状态：我的订单显示
					$(".topbar-order-msg-nodeng").hide();   //登录状态：我的订单（登录）隐藏页面
				}
				
				$(".exit").click(function(){
					localStorage["isLogin"] = "false";
					$(".name").removeClass("act");
					$(".mz_login").addClass("act");	
					$(".topbar-order-msg").hide();
					$(".topbar-order-msg-nodeng").show();  //未登录状态：我的订单显示（跳转到登录页面）
					//window.location.href = "index.html";
					
					
				})
			}
			



		});
		

/*--------------------主页--立即购买显示与隐藏--------产品图片阴影--------------------------*/
				
		$(".phone-one").mouseenter(function(){
			$(this).find(".phone-show").show(300).animate({'top':'238px'});
		});
		$(".phone-one").mouseleave(function(){
			$(this).find(".phone-show").hide(300);
		});
		
		
	
		$(".phone-product").hover(
			function(){
				$(this).find("a").eq(0).animate({top:-3})
			},
			function(){
				$(this).find("a").eq(0).animate({top:3})
			}
		)
	
	
	
	
		
		
	/*$.get("data.json",function(msg){
		   addNav(msg);
		   hover();
	});*/
	
	/*function addNav(json){
		
		
		'<li class="menu-product-item">'+
			'<a href="###">'+
				'<div>'+'<img src="'+'img/phone1_180x180.png" +'/>'+'</div>'+
				'<p>魅族PRO 6</p>'+
				'<h4>&yen;<span>2499</span></h4>'+'</a></li>'
	}*/


		/*------------二级菜单----------------------------*/
		
			var index;
			$(".menus li").mouseenter(function(){
				$(".contents").css("display","block");
				$(this).addClass("active").siblings().removeClass("active");
				index=$(this).index();
				$(".submenu").eq(index).addClass("active").siblings().removeClass("active");	
			})	
			$(".bigBox").mouseleave(function(){
				$(".contents").css("display","none");
				$(this).find("li").removeClass("active");
			})

	
		/*-------滚动---------*/	
	
	
		var index=0;
		var termId;

		$(".site-gun-left").click(function(){	
			index--;
			if(index<0){
				index=0;
				
			}			
			var w=$(".site-gun-img").width();
			var v = -1*index*w + "px"; 		
			$(".site-gun-img-big").animate({left:v});	
		})		
		$(".site-gun-right").click(function(){	
			index++;						
			if(index>$(".site-gun-img-group").length-1){
				index=$(".site-gun-img-group").length-1;
				
			}
			
			var w=$(".site-gun-img").width();
			var v = -1*index*w + "px"; 		
			$(".site-gun-img-big").animate({left:v});
		})
		
		$('.phone-one').mouseenter(function(){
			
			$('.phone-one-position').stop().animate({top:"238px"},1000)
			$('.phone-one-text').stop().animate({top:"268px"},1000)
			})
		$('.phone-one').mouseleave(function(){
			
			$('.phone-one-position').stop().animate({top:"338px"})
			$('.phone-one-text').stop().animate({top:"370px"})
			})
		
		/*var index=0;
		var termId;
		var w;
		var v; 	
			

		$(".site-gun-left").click(function(){	
			clearInterval(termId);
			index--;
			if(index<0){
				index=0;				
			}	
			w=$(".site-gun-img").width();
			v = -1*index*w + "px";
				
			$(".site-gun-img-big").animate({left:v});	
			autoPlay();
		})		
		$(".site-gun-right").click(function(){	
			clearInterval(termId)
			index++;						
			if(index>=$(".site-gun-img-group").length-1){
					index=0;
				}
			if(index<=0){
				index=$(".site-gun-img-group").length-1;
			}
			w=$(".site-gun-img").width();
			v = -1*index*w + "px";
	
			$(".site-gun-img-big").animate({left:v});
			console.log(index);
			autoPlay();
		})
		
		autoPlay();
		
		function autoPlay(){
			termId=setInterval(function(){
				index++;
				if(index>=$(".site-gun-img-group").length-1){
					index=0;
				}
				if(index<=0){
					index=$(".site-gun-img-group").length;
				}
				w=$(".site-gun-img").width();
				v = -1*index*w + "px";
				$(".site-gun-img-big").animate({left:v})	
			},3000);
		}
		
		
		$(".site-gun-img").onmouseenter = function(){
				clearInterval(termId)
		}
			
		$(".site-gun-img").onmouseleave = function(){
				autoPlay();
		}*/
		

		
		
/*-----------------------phone详情页——PIC-------------------------------*/	
		
	
		/*-------------放大镜--------------------*/
	
			$(".phone-top-pic").on({
				mouseenter:function(){
					$("#tool").css({display:"block"});
					$(".phone-top-pic-big").css({display:"block"});
				},
				mouseleave:function(){
					$("#tool").css({display:"none"});
					$(".phone-top-pic-big").css({display:"none"})
				},
				mousemove:function(e){					
					var cX = e.clientX-$(".phone-top-pic").offset().left-$("#tool").width()/2;
					var cY = e.clientY-($(".phone-top-pic").offset().top-$(window).scrollTop())-$("#tool").height()/2;
					if(cX<0){
						cX = 0;
					}
					if(cX>$(".phone-top-pic").width()-$("#tool").width()){
						cX = $(".phone-top-pic").width()-$("#tool").width();
					}
					if(cY<0){
						cY = 0;
					}
					if(cY>$(".phone-top-pic").height()-$("#tool").height()){
						cY = $(".phone-top-pic").height()-$("#tool").height();
					}
						
					$("#tool").css({
						left:cX,
						top:cY
					});
					
					var x = $("#tool").position().left*$(".phone-top-pic-big").width()/$("#tool").width();
					var y= $("#tool").position().top*$(".phone-top-pic-big").height()/$("#tool").height();
					
					$(".bigImg").css({
						left:-x,
						top:-y
					})
					
				}
			})
	
	
	
		$(".phone-top-pic-min li").click(function(){
			
			//index=$(this).index();
			
			$(this).addClass("active").siblings().removeClass("active");
			
			var imgSrc=$(this).find("img").attr("src");
			//alert(imgSrc);
			var html='<img src="'+imgSrc+'" />';
			
			$(html).appendTo($(".phone-top-pic"));
			$(".phone-top-pic").find("img").eq(0).remove();
			
			$(html).appendTo($(".phone-top-pic-big")).addClass("bigImg");
			$(".phone-top-pic-big").find("img").eq(0).remove();
			
	
		})
	
	

	

	
	
	/*------------不同手机效果切换---------------------*/
	//var spanI=$(".p-r").find("h4").eq(3).find("span")
	
	/*spanI.click(function(){
		
		
		index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");

		
		$(".p-r-ys").text(spanI.eq(index).text())
		
		$(".phone-phone").eq(index).addClass("active").siblings().removeClass("active");
		
	})*/
	
	
	
	
	/*--------------手机添加到购物车---------------------------------*/
	/*--------------手机添加到购物车---------------------------------*/
	
	
	
	var spanRom=$(".p-r").find("h4").eq(5).find("span")
	spanRom.click(function(){
		index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		/*alert("1")*/
		$(".p-r-rl").text(spanRom.eq(index).text())
	})
	
	var num=1;
	var jian=$(".p-r").find("h4").eq(7).find("a").eq(0);
	var jia=$(".p-r").find("h4").eq(7).find("a").eq(1);
	//num=Number(jian.text());
	//alert(num)
	
	
	
	var phonePrice;
	//var phonePriceNumber;
	var phonePriceAll;
	jian.click(function(){
		num--
		if(num<=1){
			num=1;
		}
		$(".p-r").find("h4").eq(7).find("i").eq(0).text(num); //改变数字
		
		
		num=Number($(".p-r").find("h4").eq(7).find("i").eq(0).text());   //获取商品添加个数
		
		//alert(Number($(".c-price").text().substring(1)));
		//Number($(".c-price").text().substring(1))
		phonePriceAll=Number($(".c-price").text().substring(1))*num;
		phonePrice.text(" ¥ "+phonePriceAll);
		$(".ceil-price").text(phonePriceAll);
	})
	
	
	jia.click(function(){
		num++	
		$(".p-r").find("h4").eq(7).find("i").eq(0).text(num);   //改变数字
		
		
		 		
		phonePrice=$(".p-r").find("h4").eq(8).find("strong").eq(0)  //获取价格节点
		//phonePriceNumber=Number((phonePrice.text()).substring(1));    //去除"￥"符号
		
		num=Number($(".p-r").find("h4").eq(7).find("i").eq(0).text());   //获取商品添加个数
		phonePriceAll=Number($(".c-price").text().substring(1))*num;
		phonePrice.text(" ¥ "+phonePriceAll);
		
		//alert(phonePriceAll)
		$(".ceil-price").text(phonePriceAll);
		
	})
	
	/*$(".phone-top-right").find("h1").text()*/

		$(".buy-now").click(function(){
			alert("添加成功")
			//alert($(".phone-top-right").find("h1").text());
			var productsStr = localStorage["products"];
			//alert(productsStr)
				if(!productsStr){
					localStorage["products"] = '[]';
				}

				
				//再获取一次，因为productsStr第一次获取的时候，可能是undefined
					productsStr = localStorage["products"]; //获取字符串的json
					//alert(productsStr)
					var productsObj = JSON.parse(productsStr);
					
					var pid = "26";  //产品的编号
/*					var pid=Request("id")
					console.log(pid)
					//获取url栏中显示的id
					function Request(_name){
						var str=location.href;
						var arr=str.split("?");
						if(arr.length==2){
							var col=arr[1].split("&");
							for(var i=0; i<col.length; i++){
								var a=col[i].split("=");
								if(a[0]==_name){
									return a[1];
								}
							}
						}
						return "";
					}
					
*/					//循环遍历容器中的数据，判断是否已经存在该商品，若存在，改变商品的数量。否则，添加一条相关该产品的数据（对象{}）
					for(var i = 0;i<productsObj.length;i++){
						//表示当前的正则遍历的产品对象
						var currentObj = productsObj[i];
						if(currentObj.pid==pid){//已经存在该商品
							//改变该商品的数量
							productsObj[i].pCount = parseInt(productsObj[i].pCount) + num;
							//把改变后的数组的对象转换成 字符串Json存在在本地当中
							localStorage["products"] = JSON.stringify(productsObj);
							return;
						}
					}
					
					var con=$(".phone-top-right").find("h1").text();
					
					
					var pImgSrc = $(".img26").attr("src");
					//产品名称
					var pName = con;
					//产品价格
					var prcie = "￥699.00";
					//产品描述
					
					//组织好改产品数据
					/*var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:1};*/
					
					var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:num};
					productsObj.push(pObj);
					//把改变后的数组的对象转换成 字符串Json存在在本地当中
					localStorage["products"] = JSON.stringify(productsObj);
					/*alert(localStorage["products"])*/	
		})
	/*================倒计时==================*/
/*	function FreshTime(){
			var nowtime = new Date();
			var endtime=new Date("2016/11/20,24:00:00");//结束时间new Date("2016/11/20,12:20:12")
			//当前时间
			
		    var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
		    d=tool(parseInt(lefttime/3600/24));
		    h=tool(parseInt((lefttime/3600)%24));
		    m=tool(parseInt((lefttime/60)%60));
		    s=tool(parseInt(lefttime%60));
		    a=tool(0);
		    
			//document.getElementById("LeftTime").innerHTML="还剩" + d+"天"+h+"小时"+m+"分"+s+"秒";
			var times=$(".lefttime");
			
			for(var i=0;i<times.length;i++){
				//$(".LeftTime").eq(i).html("剩余" + d+"天"+h+"小时"+m+"分"+s+"秒");
				$(".xiaoshi").html(h);
				$(".fenzhong").html(m);
				$(".miao").html(s);
				if(lefttime<=0){
				    //$(".lefttime").html=("团购已结束");
				    clearInterval(sh);
				    $(".xiaoshi").html(a);
					$(".fenzhong").html(a);
					$(".miao").html(a);
				}
			}
			
		}
			function tool(num){
		 	if(num < 10){
		 		return "0" + num;
		 	}
		 	return num;
		}
		
		var arrs;
		var fenlei;
	window.onload=function(){
		
		FreshTime();
		var sh;
		sh=setInterval(FreshTime,1000);}*/
	
	/*-------------------购物车-------------------------------------*/
	
				//读取本地数据
				var productsStr = localStorage["products"];
				
				if(!productsStr){
					localStorage["products"] = '[]';
				}
				
				productsStr = localStorage["products"];
				
				//转换成数组对象
				var productsObj = JSON.parse(productsStr);
				//console.log(productsObj)
				//productsObj []
				if(productsObj.length==0){
					
					$("<h1>您还没有添加商品!</h1>").appendTo($(".shopping-cart"))
				}else{
					
				
					
						$("thead").show();
						$(".shopping-cart h3").show();
						$(".shopping-cart h2").show();
						$(".shopping-cart .payment").show();
						
						var prcieAll=0;
						for(var i = 0;i<productsObj.length;i++){
							var currentObj = productsObj[i];
													
							$('<tr>' +
								'<td><img src="'+currentObj.pImgSrc+'" /></td>'+
								'<td><span>'+currentObj.pName+'</span></td>'+
								'<td><i>'+currentObj.prcie+'</i></td>'+
								'<td><strong class="emjian">-</strong><em>'+currentObj.pCount+'</em><strong class="emjia">+</strong></td>'+
								/*'<td class="tcount">'+currentObj.pCount+'</td>'+*/
								/*'<td><i>'+小计+'</i></td>'+*/
								'<td><b class="xiaoji">'+parseInt((currentObj.prcie).substring(1))*parseInt(currentObj.pCount)+'.00'+'</b></td>'+
								'<td class="del">删除</td>'+
							'</tr>').appendTo($(".pList"))
	
							prcieAll += parseInt((currentObj.prcie).substring(1))*parseInt(currentObj.pCount);
							
							$(".payment").find("span").eq(0).html('￥'+prcieAll);
							$(".payment").find("span").eq(3).html('￥'+prcieAll);
							$(".text-left").find("span").html('￥'+prcieAll);
							$("<p>"+"商品："+currentObj.pName+"X"+currentObj.pCount+"</p>").appendTo($(".pp"))
						}
						
					$(".emjian").on("click",function(){
						var count1 = Number( $(this).next().text());
						var i=count1;
						if(i<=1){
							i=1;
						}else{
							i--;
							$(this).next().text(i);   //数量    
							var jiage=$(this).parent().parent().find("i").text();   //价格
							var single=parseInt((jiage).substring(1))*i;       //计算价格
							$(this).parent().parent().find("b").text(single+".00");
							//alert(single);							
							total()
						}
						
					});
				
					$(".emjia").on("click",function(){
						var count2 = Number( $(this).prev().text());
						var i=count2;
						i++;
						$(this).prev().text(i);
						var jiage=$(this).parent().parent().find("i").text();   //价格
						var single=parseInt((jiage).substring(1))*i; 
						$(this).parent().parent().find("b").text(single+".00");   //改变小计价格
						total();
					})
					
					
						//表示当前的正则遍历的产品对象
						
					
					$(".del").on("click",function(){
						
						alert($(this).parent().index())
						alert(JSON.parse(localStorage["products"]))
						alert((JSON.parse(localStorage["products"])).splice($(this).parent().index(),1))
/*						var currentObj = productsObj[($(this).parent()).index()];
						
						for(var i = 0;i<productsObj.length;i++){
						var index=($(this).parent()).index();
						a=JSON.stringify(currentObj)
						console.log(a)
						//console.log(localStorage.removeItem("("+JSON.stringify(currentObj)+")"))*/
						//localStorage.removeItem("products")
						//localStorage.removeItem((JSON.parse(localStorage["products"]))[$(this).parent().index()])
						//(JSON.parse(localStorage["products"])).splice($(this).parent().index(),1);
						var productsObj=(JSON.parse(localStorage["products"])).splice(($(this).parent().index()),-1);
							localStorage["products"] = JSON.stringify(productsObj);
			            //  localStorage.setItem("student",objToStr);
						
						//localStorage.setItem("products");
						//localStorage.removeItem(a);
						//console.log(productsStr)
						$(this).parent().remove();
						total();
					
						
						
						
						
/*	function dd(pid){		
				productsStr = localStorage["products"]; //获取字符串的json
			//	 var jsonstr = JSON.parse(productsStr.substring(1, productsStr.length)); 
				var productsObj = JSON.parse(productsStr);
				var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
				console.log(productsObj)
				var list = []; 
				if(!productsStr){
					localStorage["products"] = '[]';
				}
				
				for(var i = 0;i<productsObj.length;i++){
						//表示当前的正则遍历的产品对象
				var currentObj = productsObj[i];
				console.log(currentObj.pid)
				//var pid=productsObj[($(this).parent()).index()].pid
						
				if(currentObj.pid==pid){//已经存在该商品
							//改变该商品的数量
				jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - parseInt(currentObj.num);  
                jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseInt(currentObj.num) * parseFloat(currentObj.price);  
            							
				return;
				} else {  
                list.push(currentObj);  
            } 
						
				var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:num};
				productsObj.push(pObj);
					//把改变后的数组的对象转换成 字符串Json存在在本地当中
				localStorage["products"] = JSON.stringify(productsObj);
				 jsonstr.productlist = list;  
				orderdetail.totalNumber = jsonstr.totalNumber;  
				orderdetail.totalAmount = jsonstr.totalAmount;  
				utils.setParam("products", "'" + JSON.stringify(jsonstr));				
				
				} 
					
					 
				}
*/						
					})
					
					
					function total(){
						/*var num = 0;
						for(var i = 0;i<$(".single-total").length;i++){
							
							num += Number($(".single-total").eq(i).html()); 
							console.log(num);
						}
						$('.foot-center-top ul li').find('strong').html('￥'+num);*/
						var allPrice=0;
						for(var i=0;i<$(".xiaoji").length;i++){
							allPrice+=Number($(".xiaoji").eq(i).text());
						}
						$(".payment").find("span").eq(0).html('￥'+allPrice);
						$(".payment").find("span").eq(3).html('￥'+allPrice);
						
						
							//alert(allPrice)
						
						
						
					}
					
					$(".payment li").eq(4).click(function(){
						alert("提交成功")
					});
				
		
				};
			
	/*-----------------------phone详情页——内容区-----------------------------*/	
	
	$(".phone-detail-text li").click(function(){
		index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".phone-detail-sp").eq(index).addClass("active").siblings().removeClass("active");
		
	})
	
/*--------------------------吸顶盒---------------------------------------------------*/

		window.onscroll = function() {
			
			var top=$(".phone-top-left").height()+$(".site-header").height()+$(".topbar").height()+80;
			//var top=$("#shop").height()+80;
			var sc = document.documentElement.scrollTop || document.body.scrollTop;
			if (sc>=top) {				
				$(".phone-detail-top-all").css({position:"fixed",top:"0px",left:"0px",background:"#fff"});
				$(".phone-detail-top-all").show();
				$(".phone-detail-top").hide();
								
			} else if(sc<=top) {
				$(".phone-detail-top-all").hide();
				$(".phone-detail-top").show();
				
			};
		
		};
























/*----------二级菜单--------------------*/

	/*$.post("menu.json",function(msg){
		addNav(msg);
		
	})*/
	
	/*$.ajax({
		type:"get",
		url:"menu.json",
		async:true,
		success:function(msg){
			addNav(msg);
		}
	});*/
	
	/*<li>
		<a href="###">
			<img src="img/wfgd01_180x180.png" />
			<span>魅蓝 3S</span>
		</a>
	</li>*/
	
	/*function addNav(json){
		for(var key in json){
			var sub= json[key].sub;
			var adrs=json[key].adrs;
			var $liNav= $("<li>"+catalog+"</li>").appendTo($('.menus'));	
		}
	}*/
	/*楼梯*/
		
			var flag = true;
			var flag2 = true;
			$(function(){

				$(window).scroll(function(){
					var h1=$('#headerr').height();
					var h2=$(window).scrollTop();
					if(h2>h1){
						$(".LoutiNav").fadeIn();
					}else{
						$(".LoutiNav").fadeOut();
					};//alert($(window).height())
					//alert($(".Louti").length)
					$(".Louti").each(function(i,e){
						var loutiH=$(e).offset().top+$(e).height()/2;
						//console.log($(e).offset().top+$(e).height()/2)
						var index=i;
						if(flag2){
							if(loutiH>h2){
								console.log(i)
								$(".LoutiNav li:not(:last)").removeClass("a");
								$(".LoutiNav li:not(:last)").eq(index).addClass("a");
								return false;
							}
						}	
					})
					$(".LoutiNav li:not(:last)").click(function(){				//alert($(this).index())
						if(flag){
							flag2=false;
							flag=false;
							$(this).addClass("a").siblings().removeClass("a");
							var index=$(this).index();
							var top=$(".Louti").eq(index).offset().top;
							$("html,body").animate({scrollTop:top},500,function(){
								flag=true;
								flag2=true;
							})
						}

					})

					
					$("li:last").click(function(){
						
						
						if(document.body.scrollTop){	
						  		document.body.scrollTop=0;
						  	}else{
						  		document.documentElement.scrollTop=0;
						}
					})
					
				})
				
				$(".LoutiNav li").mouseenter(function(){
					$(this).stop().animate({height:40,width:40},200)
					$(this).siblings().stop().animate({height:30,width:30},200)
					
					})
				$(".LoutiNav li").mouseleave(function(){
					$(this).stop().animate({height:30,width:30},200)
					$(this).siblings().stop().animate({height:30,width:30},200)
					
					})
				
				
				
			})
			
})


	