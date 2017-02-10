
/*----------列表页——分页------------------*/


$(function(){

			var pageSize = 20; //每页的数据量
			var totalSize = 0; //总数据量
			var flag = true;
			
			getData(1);
			
			function getData(p){
				   $.ajax({
				      	url:"js/list.json",
				      	type:"get",
				      	success:function(data){
				      		totalSize = data.length;
				      		console.log(data);
							
				      		//每个页面 2条数据
				      		//数量量  pageSize = 3;
				      		//1.  1 2 3
				      		//2.  4 5 6
				      		//3.  7 8 9
				      		//..
				      		//当前页码     数据量 2个
				      		//start     end
				      		
				      		/*<a href="###" class="list-pic-l-l">
								<img src="img/list-pic1.png"/>
								<h6>魅族 EP51蓝牙运动耳机</h6>
								<span>&yen;269</span>
								<i>立即购买</i>
							</a>*/
				      		
				      		var end = p*pageSize; 
				      		end=end>totalSize?totalSize:end;
				      		var start=p*pageSize - (pageSize-1);
				      		$(".list-pic").empty();
				      		for(var i = start;i<=end;i++){
				      			//data[i-1]
				      			var currentObj = data[i-1];
			      			/*$("<h1>"+currentObj.info+"</h1>").appendTo($(".list-pic"));
				      		}*/
					      		var html='<div pid="'+currentObj.pid+'" class="list-pic-l-l">'+
											"<a href='Goods.html?id="+currentObj.pid+"'>"+'<img src="'+currentObj.img+'" />'+"</a>"+
											'<h6>'+currentObj.info+'</h6>'+
											'<span>'+currentObj.price+'</span>'+
											'<i><a href="###">'+currentObj.buy+'</a><i>'+
										'</div>'
											
					      		$(html).appendTo($(".list-pic"));
				      		}
				      		
				      						      		
				      		var pageCount = Math.ceil(totalSize/pageSize);
							if(flag){
								flag = false;
								createPaeBar(pageCount)
							}
							
				      	},
				      	error:function(){
				      		
				      	}
				      })
			}
			
			function createPaeBar(pageCount){
				//后端会给你返回，总页数，起始页，终止页
				$("#pagination").createPage({
						pageCount:pageCount, //总页数	        
						current:1,  //当前页码
						backFn:function(p){  //回调函数 ，点击当前页的回调函数
							getData(p)
						}
				});
				      		//console.log(data)
			}

			
			
	/*------------------------------添加商品------------------------------------*/		

				$(".list-pic").delegate(".list-pic-l-l i a","click",function(){
						/*alert("1");*/
						console.log("添加成功！去看看订单");
						alert("添加成功！");
						var productsStr = localStorage["products"]; 
							if(!productsStr){
								localStorage["products"] = '[]';
							}

				
				//再获取一次，因为productsStr第一次获取的时候，可能是undefined
					productsStr = localStorage["products"]; //获取字符串的json
					var productsObj = JSON.parse(productsStr);
					//[{},{},{}]  //数组对象
					//alert(productsObj)
					var div1 = $(this).parent().parent();  //
					var pid = div1.attr("pid");  //产品的编号
					//循环遍历容器中的数据，判断是否已经存在该商品，若存在，改变商品的数量。否则，添加一条相关该产品的数据（对象{}）
					for(var i = 0;i<productsObj.length;i++){
						//表示当前的正则遍历的产品对象
						var currentObj = productsObj[i];
						if(currentObj.pid==pid){//已经存在该商品
							//改变该商品的数量
							productsObj[i].pCount = parseInt(productsObj[i].pCount) + 1;
							//把改变后的数组的对象转换成 字符串Json存在在本地当中
							localStorage["products"] = JSON.stringify(productsObj);
							return;
						}
					}
					
					/*<div pid="1" class="list-pic-l-l">
						<img src="img/list-pic1.png"/>
						<h6>魅族 EP51蓝牙运动耳机</h6>
						<span>&yen;269</span>
						<i><a href="###">立即购买</a></i>
					</div>*/
					
					
					//图片路径
					var pImgSrc = div1.find("img").eq(0).attr("src");
					//产品名称
					var pName = div1.find("h6").eq(0).text();
					//产品价格
					var prcie = div1.find("span").eq(0).text();
					//产品描述
					
					//组织好改产品数据
					/*var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:1};*/
					
					var pObj = {pid:pid,pImgSrc:pImgSrc,pName:pName,prcie:prcie,pCount:1};
					productsObj.push(pObj);
					//把改变后的数组的对象转换成 字符串Json存在在本地当中
					localStorage["products"] = JSON.stringify(productsObj);
					/*alert(localStorage["products"])*/
				
					
									
			})


		/*$(".list-pic-l-l").find("a").on({"click",function(){
			alert("添加成功！")
		}})*/




})
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




















