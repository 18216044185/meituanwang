

//common.js

<!--------------------------导航栏开始-------------------------------------->
//实现顶部(手机美团)下拉菜单效果
window.addEventListener("load",function(){
	var li1 = document.getElementById("li1");
	li1.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li1.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}

	//实现顶部(我的美团)下拉菜单效果
	var li2 = document.getElementById("li2");
	li2.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li2.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}

	//实现顶部(最近浏览)下拉菜单效果
	var li3 = document.getElementById("li3");
	li3.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li3.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}


	//实现顶部(购物车)下拉菜单效果
	var li4 = document.getElementById("li4");
	li4.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li4.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}

	//实现顶部(联系客服)下拉菜单效果
	var li5 = document.getElementById("li5");
	li5.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li5.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}

	//实现顶部(我是商家)下拉菜单效果
	var li6 = document.getElementById("li6");
	li6.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li6.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}

	//实现顶部(更多)下拉菜单效果
	var li7 = document.getElementById("li7");
	li7.onmouseover = function(){
	//把类名改成 toggeli on
	this.className = "toggleli on";
	}
	li7.onmouseout = function(){
	//把on去掉
	this.className = "toggleli";
	}
});
<!-------------------------------------------------------------导航栏结束--->

<!--------------------------------------------------------------nav开始---->   
window.addEventListener("load",function(){
	var cateitemlist = document.getElementById("cateitemlist");
	var lis = cateitemlist.getElementsByTagName("li");
	lis.onclick = function(){

	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function(){
			//添加一个on类 ->cateitem on
			this.className =  "cateitem on";
		};
		lis[i].onmouseout = function(){
			//去掉on类 ->cateitem
			this.className =  "cateitem";
		}
	}
});
<!--------------------------------------------------------------nav结束---->	
