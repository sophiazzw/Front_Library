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
				this[i].insertAdjacentHTML('beforeend',content);
			};
		},
		prepend : function(content){
			var i = 0; len = this.length;
			for (; i <= len; i++) {
				this[i].insertAdjacentHTML('afterbegin',content);
			};
		},
		after : function(content){
			var i = 0; len = this.length;
			for (; i <= len; i++) {
				this[i].insertAdjacentHTML('afterend',content);
			};
		},
		before : function(content){
			var i = 0; len = this.length;
			for (; i <= len; i++) {
				this[i].insertAdjacentHTML('beforebegin',content);
			};
		}
	};
	//$('#a') $('.a .b') $('div a') $('<div>a</div>') $($('.a'))
	window.$ = $;
})(typeof window !== "undefined" ? window : this);

