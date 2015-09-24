(function(window,undefined){
	var FUNCTION_CLASS = '[object Function]',
		ARRAY_CLASS = '[object Array]',
		OBJECT_CLASS = '[object Object]';

	var TO_STRING = Object.prototype.toString;
	var rhtml = /<|&#?\w+;/;

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
        if(properties instanceof($)){
        	return properties;
        }
        return this;
	};

	$.isArray = ('isArray' in Array) ? Array.isArray : function(arg){
		return TO_STRING.call(arg) === ARRAY_CLASS;
	};

	$.isFunction = function(arg){
		return TO_STRING.call(arg) === FUNCTION_CLASS;
	};

	$.isPlainObject = function(arg){
		return TO_STRING.call(arg) 
	}
	function fragment( element ){
        var fragment = document.createDocumentFragment(),
        	div = document.createElement('div'),
        	l = element.length,
        	ele,
        	i = 0;
        if(typeof(element) == 'string'){
        	div.innerHTML = element;
        	ele = div.childNodes;
        	l = ele.length;
        }else{
        	ele = element;
        }
        for(;i < l;i++){
        	fragment.appendChild(ele[i]);
        }
        return fragment;
    }
    function HTMLtoElement(html){
    	var div = document.createElement('div');
    	div.innerHTML = html;
    	return div.childNodes;
    }
	$.fn = $.prototype = {};

	//$.extend([deep], target, object1, [objectN])
	$.extend = $.fn.extend = function(){
		var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !$.isFunction( target ) ) {
			target = {};
		}
		// Extend $ itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( $.isPlainObject( copy ) ||
						( copyIsArray = $.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && $.isArray( src ) ? src : [];
						} else {
							clone = src && $.isPlainObject( src ) ? src : {};
						}
						// Never move original objects, clone them
						target[ name ] = $.extend( deep, clone, copy );
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		};
		// Return the modified object
		return target;
	};
	$.extend({
		fragment : fragment
	}) 
	$.fn.extend({
		prepend : function(child){
			var node = this,
				len = node.length,
				i = 0;

			if(node.length == 0 || !child) {
				return false;
			}
			for(;i < len; i++){
				node[i].insertBefore($.fragment(child).cloneNode(true),node[i].firstChild)
			}
			return this;
		},
		append : function(child){
			var node = this,
				len = node.length,
				i = 0;

			if(node.length == 0 || !child) {
				return false;
			}
			for(;i < len; i++){
				node[i].appendChild($.fragment(child).cloneNode(true));
			}
			return this;
		},
		after : function(child){
			var node = this,
				len = node.length,
				i = 0;

			if(node.length == 0 || !child) {
				return false;
			}
			for(;i < len; i++){
				if(node[i].parentNode){
					node[i].parentNode.insertBefore($.fragment(child).cloneNode(true),node[i].nextSibling);
				}
			}
			return this;
		},
		before : function(child){
			var node = this,
				len = node.length,
				i = 0;

			if(node.length == 0 || !child) {
				return false;
			}
			for(;i < len; i++){
				if(node[i].parentNode){
					node[i].parentNode.insertBefore($.fragment(child).cloneNode(true),node[i]);
				}
			}
			return this;
		},
		empty : function(){
			var ele,
				i = 0;
			for(;(ele = this[i]) != null;i++){
				if(ele.nodeType === 1){
					//$.cleanData(ele)
					ele.textContent = "";
				}
			}
			return this;
		},
		html : function(value){
			if(typeof(value) == 'string' || value.nodeType === 1){
				return this.innerHTML = value;
			}
		}
	});

	//console.log(fragment('<a>'));
	//console.log($.extend({},{a:2,b:3}));
	console.log($('.real').prepend('ass'));

	//console.log($('.real1').append($('.text')));
	// console.log(fragment($('.real')));
	// console.log($.isArray([1]));
	// console.log($.isFunction(function a(){}));
	//$('#a') $('.a .b') $('div a') $('<div>a</div>') $($('.a'))
	window.$ = $;
})(typeof window !== "undefined" ? window : this);

