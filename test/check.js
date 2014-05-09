
//console.log( $yt( "li" ).get( 0 ) );	
var color = {aa:'aa1',bb:'bb1',cc:['cc1','cc2']}
console.log($yt().getFirstValue(color));
$yt('ul a').cancelDragDefault();
var chai = Object.create(chai);
var expect = chai.expect;
expect($yt().isArray([])).to.be.true;
expect('string').to.be.a("string");
var color1 = $yt().clone(color);
console.log(color1);
color.aa = 'aa2';
console.log(color1);
console.log(color);
$yt('#bar').hide();
console.log(escape('http://www.baidu.com?faasd=a234&rewr=987'));
//console.log($('ul li').css('background-color'));
//console.log(window.getComputedStyle($yt('ul li')[0],null).getPropertyValue('background-color'));
console.log($yt('#foo').getCssStyle('background-color'));
console.log($('ul li').hasClass('ss'));