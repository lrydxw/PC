$(function(){

	$("#cfix>.ccar").mouseenter(function(){
		$("#ccars").show();	
	});
	$("#cfix>.ccar").mouseleave(function(){
		$("#ccars").hide();	
	});
	
$.get("goods.json",function(obj){
	if(typeof obj == "string")obj=eval("("+obj+")");
	var aarr=obj.list;
	//console.log(aarr);
});
	showCarts();
	
	

});

	//顶部购物车
	function showCarts(){
		var cart=document.getElementById("acart");
		cart.innerHTML="";
		var str=document.cookie;
		var arr=str.split("; ");
		//console.log(arr)
		var sum=0;
		for(i=0;i<arr.length;i++){
			var col=arr[i].split("=");
			if(eval("/^"+getCookie("txt")+"g[0-9]+$/").test(col[0])){
				var o=eval("("+decodeURIComponent(col[1])+")");
				//console.log(o);
				var lis=$("<li><img class='l' src='../images/goods/"+o.img+"'/><div class='zh'><p class='title'>"+o.title+"</p><span class='ys'>颜色:"+o.gys+"</span><span class='dx'>尺码:"+o.gdx+"</span></div><div class='you'><span class='price'>"+o.price+"</span><br/><span class='gs'>x"+o.num+"</span></div></li>");
				$("#acart").append(lis);
				sum+=o.price*o.num;
			}				
		}
		//var li2=$("#li21");
		$("#li21").html((sum).toFixed(2));
	}
	
	
var sums;	
window.onload=function(){
	var num=document.getElementById("num");
	
	
	var deleteAll=document.getElementById("deleteAll");
	deleteAll.onclick=function(){
		var str=document.cookie;
		var arr=str.split("; ");
		for(i=0;i<arr.length;i++){
			var col=arr[i].split("=");
			if(eval("/^"+getCookie("txt")+"g[0-9]+$/").test(col[0])){
				setCookie(col[0],"",-10);
			}
		}
		showCart();
		showCarts();
		var tbod=document.getElementById("tbod");
		if(tbod.children.length==0){
			$("#thead").append("<tr class='tishi'><td colspan='7'><a href='goods.html'>购物车已空，请添加商品</a></td></tr>");
		}
	}
	showCart();
	
	var check=document.getElementsByClassName("check");
	$(".check-all").click(function(){
		var v=this.checked;
		for (var i = 0; i < check.length; i++) {
            check[i].checked=this.checked;
            if(v==true){
            	num.innerHTML=sums;
            }else{
            	num.innerHTML=0;
            }
        };
	});
	
	var carss=document.getElementById("acart");
	if(carss.children.length==0){
		$("#tiao1").show();
	}
	
	var tbod=document.getElementById("tbod");
	if(tbod.children.length==0){
		$("#thead").append("<tr class='tishi'><td colspan='7'><a href='goods.html'>购物车已空，请添加商品</a></td></tr>");
	}
	
}	
	function checkid(id){
		var check=document.getElementById("check"+id);
		var xj=document.getElementById("xj"+id);
		var str=getCookie(getCookie('txt')+"g"+id);
		var obj=eval("("+str+")");
		var sum=parseFloat((obj.price*obj.num).toFixed(2));
		var xz=parseFloat(num.innerHTML)
		if(check.checked){
			num.innerHTML=xz+sum;
			
		}else{
			num.innerHTML=xz-sum;
		}
	}
	
	
	function showCart(){
		var cart=document.getElementById("tbod");
		cart.innerHTML="";
		var str=document.cookie;
		var arr=str.split("; ");
		var count=0;
		var sum=0;
		for(i=0;i<arr.length;i++){
			var col=arr[i].split("=");
			if(eval("/^"+getCookie("txt")+"g[0-9]+$/").test(col[0])){
				//变量所选商品
				var o=eval("("+decodeURIComponent(col[1])+")");
				//console.log(o);
				//声明创建tr
				var tr1=$("<tr class='tr_title'><td colspan='7'><span class='title'>"+o.title+"</span></td></tr>");
				var tr2=$("<tr class='cent'></tr>");
				/*var tr3=$("<tr class='tr_zj'><td colspan='7'><span class='xj'>小计</span><span class='j_xj' id='xj"+o.id+"'>0</span><span class='qxx'>"+(o.price*o.num).toFixed(2)+"</span></td></tr>");*/
				var tr4=$("<tr class='kong'></tr>");
				//声明创建td
				var td1=$("<td class='dj'><input type='checkbox' id='check"+o.id+"' class='check-one check' onclick='checkid("+o.id+")'/></td>");
				var td2=$("<td class='td_content'><img src='../images/goods/"+o.img+"' /><span class='content'>"+o.title+"</span></td>");
				var td3=$("<td class='td_size'><span class='ys'>"+o.gys+"</span><br/><span class='dx'>"+o.gdx+"</span></td>");
				var td4=$("<td class='td_price'><span class='price'>"+(o.price).toFixed(2)+"</span></td>");
				var td5=$("<td class='jiajian'><span class='jian' id='jians"+o.id+"' onclick='jiangoods("+o.id+")'>-</span><span class='num' id='num"+o.id+"'>"+o.num+"</span><span class='jia' id='jias"+o.id+"' onclick='jiagoods("+o.id+")'>+</span></td>");
				var td6=$("<td class='td_sum'><span class='sum'>"+(o.price*o.num).toFixed(2)+"</span></td>");
				var td7=$("<td class='td_cz'><span class='cz' id='del"+o.id+"' onclick='deletes("+o.id+")'>删除</span></td>");
				//添加tr、td到table
				var table=$("#tbod");
				tr2.append(td1);tr2.append(td2);tr2.append(td3);tr2.append(td4);tr2.append(td5);tr2.append(td6);tr2.append(td7);
				table.append(tr1);table.append(tr2);/*table.append(tr3);*/table.append(tr4);
				//console.log(tr2);
				sum+=o.price*o.num;
				//count+=o.num;
			}
				sums=parseInt(sum);
		}
	}
	
	
	function deletes(id){
		var delid=document.getElementById("del"+id);
		var str=getCookie(getCookie('txt')+"g"+id);
		var obj=eval("("+str+")");
		setCookie("g"+obj.id,"",-10);
		showCart();
		showCarts();
	}
	function jiangoods(id){
		var jian=document.getElementById("jians"+id);
		var gs=document.getElementById("num"+id);
		var str=getCookie(getCookie('txt')+"g"+id);
		var obj=eval("("+str+")");
		var n=obj.num;
		num.innerHTML=0;
		$(".check-all").removeAttr("checked");
		n=n-1;
		var str="{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':"+obj.price+", 'num':"+n+", 'gys':'"+obj.gys+"', 'gdx':'"+obj.gdx+"'}";
		setCookie(getCookie('txt')+"g"+id, str, 10);
		
		showCart();
		showCarts();
	}
	function jiagoods(id){
		var jia=document.getElementById("jias"+id);
		var gs=document.getElementById("num"+id);
		var str=getCookie(getCookie('txt')+"g"+id);
		var obj=eval("("+str+")");
		var n=obj.num;
		num.innerHTML=0;
		$(".check-all").removeAttr("checked");
		n=n+1;
		var str="{'id':'"+obj.id+"', 'title':'"+obj.title+"', 'img':'"+obj.img+"', 'price':"+obj.price+", 'num':"+n+", 'gys':'"+obj.gys+"', 'gdx':'"+obj.gdx+"'}";
		setCookie(getCookie('txt')+"g"+id, str, 10);
		showCarts();
		showCart();
	}


	