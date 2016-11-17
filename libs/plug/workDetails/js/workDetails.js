(function($){
	$.details=function(opts){
		var _default = {
			title: "暂无",
			parts: "暂无",
			strengths: "暂无",
			tool: "暂无"
		};
		opts = $.extend(true,_default,opts);
		var $details=$(".details").length;
		//console.log($alert)
		if($details==0){
			console.log("A")
			$("<div class='details'><div class='title'></div><div class='header'><h4>清理部位</h4></div><div class='content'><h4>服务亮点</h4></div><div class='footer'><h4>服务工具</h4></div></div>").appendTo("body");
			$(".title").text(opts.title);
			$("<div class='parts'>"+opts.parts+"</div>").appendTo(".header");
			$("<div class='strengths'>"+opts.strengths+"</div>").appendTo(".content");
			$("<div class='tool'>"+opts.tool+"</div>").appendTo(".footer");
			$("body").addClass("change");
		}else{
			
		}
		$(".change").on("touchstart",function(evt){
			console.log("a");
		});
	}
})(jQuery)
