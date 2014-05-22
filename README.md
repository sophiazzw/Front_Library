Front Library
=============

A personal common javascript library for front web development, based on jQuery.

## Main Method

* hide
* show 
* get 
* alert
* toArray
* isArray
* genRate 
* getArrayMax
* getArrayMin
* getFirstValue
* loadImage
* cancelDragDefault
* getCookie
* setCookie
* isIpad
* isMobile
* isIE6
* isIE6_8
* islessIE6
* islessIE7
* islessIE8
* islessIE9
* islessIE10
* supportHTML5Level
* supportCss3
* openURLs
* clone
* objectChanger
* getCssStyle
* addHandler
* removeHandler
* stopPropagation
* getEvent
* getTarget
* getKeyCode
* hasClass
* addClass
* clear
* first
* last
* isFunction
* isString
* from
* of

...to be continued

## Usage
	<script src="YT.min.js"></script>

This will provide $yt ad a global object , and this object has kinds of methods

Ajax library
============
Completely extract from jquery ajax method , separated from other methods , light and clear

## Usage 
	$.ajax({
		'type'    :  'GET or POST',
		'url'     :  'ajaxUrl',
		'data'    :  'cur={$cur}&ve={$ve}&is_ajax=1',
		'cache'   :  true,
		'dataType':  'json',
		'success' :  function(r) {
			alert('success');	
		}
	})

md5 library
===========
Get from Gist , valued as the fast and lightest md5 library 

##Usage
	var result = md5(string);