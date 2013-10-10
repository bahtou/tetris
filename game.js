//// SETTING UP A GLOBAL MASTER VARIABLE //////////

var MYAPP = {};

/////////////ORIENTATION CHECK AND SET//////////////////

var orientation;

var orientationCheck = function() {
	if (window.orientation === undefined){
		orientation = 'Desktop';
	} else {
		if (window.orientation === 0 || window.orientation === 180) {
			orientation = 'Portrait';
			alert(orientation);
		} else {
			orientation = 'Landscape';
			alert(orientation);
		}
	};
}

//////////// CREATE BOARD OF TD ELEMENTS///////////////////

var vheight; // number of rows
var hwidth; // number of columns

// Setting the board dimensions based on orientation
if (orientation === 'Portrait' || orientation === 'Desktop') {
	vheight = 20;
	hwidth = 10;
} else {
	vheight = 10;
	hwidth = 20;
}

// Creating the board
var pit = function () {
	var i;
	var j;
	for (i = 0; i < hwidth; i++) {
		for (j = 0; j < vheight; j++) {
			document.write("0");
		}
		document.write("<br />");
	}
}



////// SHAPE FORMULAS AND COLORS //////////////

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


//////// CREATE BLOCKS ///////////////////////


function blockMake(type,atcol,atrow){
	blockformula[type,atcol,atrow]
}


