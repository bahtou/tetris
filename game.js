//checking orientation
var orientation; 

function orientationCheck() {
	if (window.orientation === undefined){
		orientation = 'Desktop';
		return orientation;
	} else {
		if (window.orientation === 0 || window.orientation === 180) {
			orientation = 'Portrait';
			return orientation;
		} else {
			orientation = 'Landscape';
			return orientation;
		}
	};
}


// creating the board

var pit = new Object();
pit.vdepth = 20;
pit.hwidth = 10;
pit.create = function() {

};

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

var blockformula = [
	[[0,0],[1,0],[2,0],[3,0]], // line
	[[0,0],[1,0],[2,0],[1,1]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[0,0],[1,0],[1,1],[2,1]], // s shape
	[[0,1],[1,1],[1,1],[2,0]], // z shape
	[[0,0],[1,0],[2,0],[2,1]], // j shape
	[[0,1],[1,1],[2,1],[2,0]] // l shape
];

var blockcolor = [
	"Aqua", // for line
	"purple", // for t-shape
	"yellow", // for square
	"green", // s shape
	"red", // z shape
	"blue", // j shape
	"DarkOrange" // l shape
];


// creating blocks at the top of the board if another shape is already there - game over
