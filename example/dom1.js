//Prototype
(function(window,undefined){
	function $(element){
	    if (typeof(element) == 'string')
	      	element = document.getElementById(element);
	    return element;
	}
	Element.prototype.parent = function(){
		return this.parentNode;
	}
	Element.prototype.children = function(){
		return this.childNodes;
	}
	Element.prototype.siblings = function(){
		var first = (this.parentNode || {}).firstChild,
			siblings = [];
		for(;first;first = first.nextSibling){
			if(first.nodeType === 1 && first !== this){
				siblings.push(first);
			}
		}	
		return siblings;
	}
	Element.prototype.prev = function(){
		return this.previousSibling;
	},
	Element.prototype.after = function(element){
		this.parentNode.insertBefore(element.cloneNode(true),this.nextSibling);
		return this;
	},
	Element.prototype.before = function(element){
		return this.parentNode.insertBefore(element.cloneNode(true),this);

	},
	Element.prototype.prepend = function(element){
		return this.insertBefore(element.cloneNode(true),this.firstChild)

	}
	window.$ = $;
	// console.log($('a').insertAfter($('a')));
	$('a').before($('a'))
})(typeof window !== "undefined" ? window : this);
//传入真正的window