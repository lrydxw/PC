	
	
var nums=1;	
var arr,ysz,dxz;
/*var ys_value=$("#xcolor>.xuanz>span").html();
var dx_value=$("#xsize>.xuanz").html();*/
window.onload=function(){
		//获取url栏中显示的id
	var id=Request("id");//Request函数在下面封装 获取url的id
	//获取数据
	console.log(id)
	console.log(Request)
	$.get("list.json",function(obj){
		if(typeof obj == "string")obj=eval("("+obj+")");
		var arr=obj;
		//alert(arr.length)
		var o=getGoods(id);//获取id的对象
		console.log(o);
		//获取json数据中的id对应对象
		function getGoods(id){
			for(var i=0; i<arr.length; i++){
				var o=arr[i];
				if(o.pid==id){
					return o;
		//console.log(o)
				}
			}}
		
		//获取元素对象
	
		var img=$("#shop>.xq>.left>div>img");//商品图片
		var glass=$("#shop>.xq>.left>div>div");//商品上的放大镜
		var option=$("#shop>.xq>.left>div:eq(1)");//商品的其它小图片
		//添加小图片
		//var pics=o.pic;
		//console.log(o.pic);
		for(var i=0; i<o.pic.length; i++){
			option.append("<img src='"+o.pic[i]+"'/>");
		}
		//在小图片上绑定单击事件，当单击时，大图片发生改变
		$(".option>img").bind("click", function(){
			img.attr("src", $(this).attr("src"));
			$(".big>img").attr("src", $(this).attr("src"));
		});
		//添加大图片
		img.attr("src", o.img);
		//添加默认放大镜里的图片
		$(".big>img").attr("src", o.img);      
		//鼠标放到大图片上时，触发放大镜效果
		//console.log(scrollTop);
		$(".bigger").mousemove(function(e){
			var offset=$(this).offset();
			
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
			
			var x=e.clientX+scrollLeft-offset.left;
			var y=e.clientY+scrollTop-offset.top;
			//console.log(e.clientY+","+scroll);
			x-=115;
			y-=115;
			if(x<0)x=0;
			if(x>230)x=230;
			if(y<0)y=0;
			if(y>230)y=230;		
			$(".bigger>div").css({
				left:x,
				top:y
			});		
			$(".big>img").css({
				left:-2*x,
				top:-2*y
			});
			//console.log( e.clientX-offset.left );
		});
		$(".bigger").mouseover(function(){
			$(".bigger>div").show();
			$(".big").show();
		});
		$(".bigger").mouseout(function(){
			$(".bigger>div").hide();
			$(".big").hide();
		});
			$(".bigger>div").hide();
			$(".big").hide();
		
		//var zk_value=parseFloat((parseInt(parseFloat(o.price/o.o_price)*100))/10);
		//var jc_value=parseFloat(o.o_price-o.price);
		//console.log(jc_value);
		//添加商品信息
		$(".phone-top-right>h1").append(o.info);
		$("#xq>.title>span").append(o.info);
		$(".wo").append(o.info);
		$(".phone-top-right>h6").append(o.content);
		$(".center").append(o.content);
		//alert(o.price)
		$(".c-price").append(o.price);
		$(".price").append(o.price);
		$(".p-r-jg").append(o.price);
		$(".zz").append(o.price);
		
		//添加颜色
		var colors=o.color;
		var size=o.size;
		var yanse=$("#xcolor");
		var daxiao=$("#xsize")
			for(var i=0; i<colors.length; i++){
				yanse.append("<li class='yanse'><img src='"+o.pic[i]+"'/><span>"+colors[i]+"</span></li>");
			}
			for(var i=0; i<size.length; i++){
			daxiao.append("<li class='size'>"+size[i]+"</li>");
			}
		//}
		
		$(".yanse").click(function(){
			index=$(this).index();
		$(".p-r-rl").text($(".yanse").eq(index).text())
			
			
			});

		
		//选定颜色、大小
		var ys=$("#xcolor>.yanse");
		var dx=$("#xsize>.size");
		ys.click(function(){
			for(var i=0;i<ys.length;i++){
				ys.eq(i).attr("class","");
				ys.eq(i).css("border-radius","5px");
				
			}
			ys.eq($(this).index()).attr("class","xuanz");
		});
		dx.click(function(){
			for(var i=0;i<dx.length;i++){
				dx.eq(i).attr("class","");
				dx.eq(i).css("border-radius","5px");
			}
			dx.eq($(this).index()).attr("class","xuanz");
			
		});
		//增减商品件数
		$("#jian").click(function(){
			nums--;
			if(nums<=1)nums=1;
			$("#xnum").html(nums);
		});
		$("#jia").click(function(){
			nums++;
			$("#xnum").html(nums);
		});
	//添加购物车	
	
	//console.log(ys_value+"，"+dx_value);
	$("#buy-now").click(function(){
		alert("添加成功")
			var ys_value=$("#xcolor>.xuanz>span").html();
			var dx_value=$("#xsize>.xuanz").html();	
			if(ys_value!=undefined && dx_value!=undefined){
				$("#tishi").hide();
				$("#tiao").css("display","none");
				//addCart(o.id,ys_value,dx_value);
				
			}else{
				$("#tishi").show();
			}
			
			var productsStr = localStorage["products"];
			//alert(productsStr)
				if(!productsStr){
					localStorage["products"] = '[]';
				}

				
				//再获取一次，因为productsStr第一次获取的时候，可能是undefined
					productsStr = localStorage["products"]; //获取字符串的json
					//alert(productsStr)
					var productsObj = JSON.parse(productsStr);
					
					var pid=Request("id");
					//alert(pid)  //产品的编号
					for(var i = 0;i<productsObj.length;i++){
						//表示当前的正则遍历的产品对象
						var currentObj= productsObj[i];
						
						if(currentObj.pid==pid){//已经存在该商品
							//改变该商品的数量
							//return currentObj;
							console.log(currentObj.info)
							productsObj[i].pCount = parseInt(productsObj[i].pCount) + nums;
							//把改变后的数组的对象转换成 字符串Json存在在本地当中
							localStorage["products"] = JSON.stringify(productsObj);
							return;
						}
					}
					
					
					
					var pImgSrc = o.img;
					//产品名称
					var pName = o.info;
					//产品价格
					var prcie = o.price;
					//产品描述
					
					//组织好改产品数据
					/*var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:1};*/
					
					var pObj = {pid:pid,pImgSrc:o.img,pName:o.info,prcie:o.price,pCount:nums};
					productsObj.push(pObj);
					//把改变后的数组的对象转换成 字符串Json存在在本地当中
					localStorage["products"] = JSON.stringify(productsObj);
			//console.log(localStorage["products"])
		});
		
	
		
	});
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
	
}