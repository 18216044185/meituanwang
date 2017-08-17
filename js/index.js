// index.js
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
	console.info(lis);
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

/**
 * 选项卡效果
 * @type {[type]}
 */
window.addEventListener("load",function(){
	var linknav = document.getElementById("linknav");
	var lis = linknav.getElementsByTagName("li");
	var divs = linknav.getElementsByTagName("div");
	console.info(lis);
	//给每一个li添加事件响应，点击时，显示对应的那个div
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function(){
			console.info(i);
			//让对应的div显示。
			//第一步，把所有的div隐藏
			for (var i = 0; i < divs.length; i++) {
				divs[i].style.display = "none";
			}
			//第二步，把当前的div显示
			divs[ this.index ].style.display ="block"; 
		}
	}
});




/**
 * 在主页中使用的轮播的效果
 * @type {[type]}
 */
window.addEventListener("load",function(){
	var itemlistul = document.getElementById('itemlistul');
	var dx = 90;
	var currentIndex = 0 ; //当前是第1屏
	//向左移动,减少left。
	//思路
	//动画控制ul移动一屏，当完成移动后，停3秒，再进行下一屏。
	//go();
	//只移动一屏
	function move(){
		//请你把ul从 -currentIndex*1170  ----> -(currentIndex+1)*1170
		//从0屏到1屏 ：left 从 0 ---> -1170
		//从1屏到2屏 ：left 从 -1170 --->  -1170*2
		//从2屏到3屏 ：left 从 -1170*2 ---> -1170*3
		//从3屏到4屏 ：left 从 -1170 --->  -1170*2
		currentIndex++;
		if(currentIndex == 4){
			//把ul的left设置为0
			//currentIndex = 1;
			itemlistul.style.left = "0px";
			currentIndex = 1;
		}
		var timer = null;
		var target = -1 * currentIndex *1170;
		timer =setInterval(function(){
			//1.获取oldleft
			var oldleft = itemlistul.offsetLeft
			// 只考虑目标从右向左移动
			// If(oldleft <=target) //
			// {
			//   达到了（超过了目标 ）
			// }
			if(oldleft <=target){
				//达到了（超过了目标 ） 
				//停止定时器
				clearInterval(timer);
				//休息3s再来执行一次move()
				setTimeout(function(){
					move();
				},3000)

			}else{
				//2.把值减少newleft = oldleft - dx;
				var newleft = oldleft -dx;
				//3.把新的left设置给ul
				itemlistul.style.left =newleft + "px";
			}
		},25);
	}

	move();

	//第一次调用 move，currentIndex是0，相当是从0屏到第1屏。
	//第二次调用 move，currentIndex是1，相当是从1屏到第2屏。
});



	
	
	
	
	
	
	
	
	
	
	
	