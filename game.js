//// SETTING UP A GLOBAL MASTER VARIABLE //////////

var MYAPP = {};

/////////////ORIENTATION CHECK//////////////////

var orientation;

var orientationCheck = function() {
	if (window.orientation === undefined) {
		alert('Desktop');
	} else {
		if (window.orientation === 0 || window.orientation === 180) {
			alert('Portrait');
		} else {
			alert('Landscape');
		}
	}
}

//////////// CREATE PIT OBJECT AND METHODS///////////////////

var pit = {
	vheight : 0,  // number of rows
	hwidth : 0,  // number of columns
	
	//// Setting the board dimensions based on orientation //////

	layout : function() {
		if (window.orientation === 0 || window.orientation === 180) {
			this.vheight = 20;
			this.hwidth = 10;
		} else {
			this.vheight = 10;
			this.hwidth = 20;
		}
	}, // End of Method

	////// Creating the board ///////

	create : function() { 
		var i;
		var j;
		for (i = 0; i < this.hwidth; i++) {
			for (j = 0; j < this.vheight; j++) {
				document.write("0");
			}
			document.write("<br />");
		}
	} // EOM
};


/*var vheight; // number of rows
var hwidth; // number of columns

// Setting the board dimensions based on orientation

if (window.orientation === 0 || window.orientation === 180) {
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

*/

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


