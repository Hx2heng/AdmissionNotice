(function(){
	window.CanvasPro = function(config){
		this.config = {
			width:640,
			height:874,
			name:[]
		};
		this.config = $.extend({},this.config,config);
		return this.init();
	}
	CanvasPro.prototype.init = function(){
		console.log(this.config)
	};
	CanvasPro.prototype.loadImg = function(){

	}
})()