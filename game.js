// creating the board

var board = function() {
	var end = "<td id='boundary'>br</td>";

	for (var i = 0; i < 23; i++) {
				document.writeln("<tr>")
					document.writeln(end)
					for (var j = 0; j < (10); j++) {
					document.writeln("<td><span>" + i + j + "</span></td>");
					} 
					document.writeln(end)
				document.writeln("</tr>")
			}
			document.writeln("<tr>")
				for (var j = 0; j < (12); j++) {
					document.writeln(end);
				}
};

// use arrays for each shape 

var shapeFormulas = [
	[[0,0],[1,0],[2,0],[3,0]], // line
	[[0,0],[1,0],[2,0],[1,1]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[0,0],[1,0],[1,1],[2,1]], // s shape
	[[0,1],[1,1],[1,1],[2,0]], // z shape
	[[0,0],[1,0],[2,0],[2,1]], // j shape
	[[0,1],[1,1],[2,1],[2,0]] // l shape
];

var shapeColor = [
	"Aqua", // for line
	"purple", // for t-shape
	"yellow", // for square
	"green", // s shape
	"red", // z shape
	"blue", // j shape
	"DarkOrange" // l shape
];


// creating blocks at the top of the board if another shape is already there - game over

var createBlock = function() {
	var typeBlock = Math.floor(Math.random()*7);
	for (var i = 0; i < 4; i++) {
		document.getElementById('b' + shapes[typeBlock][i]).style.backgroundColor=shapeColor[typeBlock];
	}
};

window.addEventListener('load', function(){ // on page load
 
 document.body.addEventListener('touchstart', function(e){
  alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
 }, false)
 
}, false)
