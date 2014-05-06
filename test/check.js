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