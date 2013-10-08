// this creates the board for portrait mode

var boardPortrait = function() {
	for (var i = 0; i < 23; i++) {
		document.writeln("<tr>")
			for (var j = 0; j < (10); j++) {
			document.writeln("<td id='b" + i+j +"' style='border:1px solid; padding: 10px; margin: 0; width:10px; height:10px'>" + i + j + "</td>");
		} 
		document.writeln("</tr>")
	}
};

// this creates the board for landscape mode

var boardLandscape = function() {
	for (var i = 0; i < 10; i++) {
		document.writeln("<tr>")
			for (var j = 0; j < (23); j++) {
			document.writeln("<td id='b"+ i+j +"' style='border:1px solid; padding: 10px; margin: 0; width:10px; height:10px'>" + i + j + "</td>");
		} 
		document.writeln("</tr>")
	}
};

// listen for orientation changes

var windowChange = function(){
	window.addEventListener('orientationchange', function(){
		alert('Window orientation has changed')
	}, false);
}


// remove last column



//use a make function that adds id values to target td in order to make a shape

// use arrays for each shape 

var shapes = [
	[20,21,22,23], // line
	[21,30,31,41], //t-shape
	[20,21,30,31], //square
	[21,22,30,31], // s shape
	[20,21,31,32], // z shape
	[20,30,31,32], // j shape
	[22,30,31,32] // l shape
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

var createBlock = function() {
	var typeBlock = Math.floor(Math.random()*7);
	for (var i = 0; i < 4; i++) {
		document.getElementById('b' + shapes[typeBlock][i]).style.backgroundColor=shapeColor[typeBlock];
	}
};