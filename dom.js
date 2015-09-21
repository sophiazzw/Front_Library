(function(window,undefined){
	var DIV = document.createElement("div"),
		FRAGMENT = document.createDocumentFragment();
	var $ = function(properties){
		if(window === this){
			return new $(properties); //实例化$
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
			/* content is string*/
			var i = 0; len = this.length;
			console.log(len);
			for (; i < len; i++) {
				this[i].insertAdjacentHTML('beforeend',content);
			};
		},
		prepend : function(content){
			var i = 0; len = this.length;
			for (; i < len; i++) {
				this[i].insertAdjacentHTML('afterbegin',content);
			};
		},
		after : function(content){
			var i = 0; len = this.length;
			for (; i < len; i++) {
				this[i].insertAdjacentHTML('afterend',content);
			};
		},
		before : function(content){
			var i = 0; len = this.length;
			for (; i < len; i++) {
				this[i].insertAdjacentHTML('beforebegin',content);
			};
		}
	};

	function elementToHTML(element){
		var div = DIV;
		div.appendChild(element)
		return div.innerHTML;
	}
	function fragment( html ){
        var div = DIV,
            frag = FRAGMENT;
        div.innerHTML = html;
        while(div.firstChild){
            frag.appendChild( div.firstChild );
        }
        return frag;
    }
	console.log(elementToHTML($('div')[0]));
	console.log(fragment('<a><a>'));
	//$('#a') $('.a .b') $('div a') $('<div>a</div>') $($('.a'))
	window.$ = $;
})(typeof window !== "undefined" ? window : this);

