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

///////////// TOUCH EVENTS ////////////////////////////



//// ALT REGISTER OF TOUCH EVENT HANDLERS ////

function touchStart(event) {
	var allTouches = event.touches;
	alert(allTouches);
}

document.addEventListener("touchstart", touchStart, false);

/*element.addEventListener("touchmove", touchMove, false);
element.addEventListener("touchend", touchEnd, false);
element.addEventListener("touchcancel", touchCancel, false); */

//////////// CREATE PIT OBJECT AND METHODS///////////////////

var pit = {
	depth : 0,  // number of rows
	hwidth : 0,  // number of columns
	
	//// BOARD DIMENSIONS AND ORIENTATION //////

	layout : function() {
		switch (window.orientation) {
			case 0:
			case 180:
				this.depth = 20;
				this.hwidth = 10;
				break;
			case 90:
			case -90:
				this.depth = 10;
				this.hwidth = 20;
				break;
			default:
				this.depth = 20;
				this.hwidth = 10;
		}
	}, // End of Method

	////// CREATE BOARD ///////

	board : [],
	
	create : function() { 
		var i;
		var j;
		for (i = 0; i < this.depth; i++) {
			var colArray = [];				// Nested Array 
			for (j = 0; j < this.hwidth; j++) {
				colArray.push("0");
			}
			colArray.push("<br />") // 10th Element is a line break to keep! 
			this.board.push(colArray);
		}
	}, // EOM

	///// GETTER METHODS //////// /////// CHANGE NAME? //////

	getFirstOccupiedRowAtColumn : function(col) {
		var row = 1;
		for (var i = 0; i < this.depth; i++) {
			if (pit.board[i][col] != 0 ) {
				row += i;
				break;
			}
		}
		return row;
	}, // EOM

	getLeftMostAvailableColumnAtRow : function(row) {
		var col = 1;
		for (var i = 0; i < this.hwidth; i++) {
			if (pit.board[row][i] == 0) {
				col += i;
				break; 
			}
		}
		return col;
	}, // EOM

	getRightMostAvailableColumnAtRow : function(row) {
		var col = 1;
		for (var i = this.hwidth-1; i >= 0; i--) {
			if (pit.board[row][i] == 0) {
				col += i;
				break; 
			}
		}
		return col;
	}, // EOM
};

/// END OF PIT OBJECT ////



////// CREATE A BLOCK CLASS //////////////

function Block() {
	this.top = pit.board[0];
	this.left = top[4];
	this.rotation = [0,90,180,270];
	this.create = function(a,b,c,d) {
		pit.board[0]
	}
}

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


