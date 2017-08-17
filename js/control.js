
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