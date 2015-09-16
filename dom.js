(function(window,undefined){
	var $ = function(properties){
		if(window === this){
			return new $(properties);
		}
		var result = [];
        if (typeof properties === 'string') {
            result = document.querySelectorAll(properties);
        }
        if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                this[i] = result[i];
            }
            this.length = result.length;
        }
        return this;
	};

	$.fn = $.prototype = {
		append : function(content){
			var i = 0; len = this.length;
			for (; i <= len; i++) {
				this[i].innerHTML = content;
			};
		},

	};
	//$('#a') $('.a .b') $('div a') $('<div>a</div>') $($('.a'))
	window.$ = $;
})(typeof window !== "undefined" ? window : this);

