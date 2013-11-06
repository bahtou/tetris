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
	var changedTouches = event.changedTouches;
	var numberTouches = event.touches.length;
	var x = event.touches[0].pageX;
	var y = event.touches[0].pageY;
	alert(allTouches);
	alert(changedTouches);
	alert(numberTouches);
	alert(x + " and " + y);
}


function touchMove(event) {
    event.preventDefault();
    curX = event.targetTouches[0].pageX - startX;
    curY = event.targetTouches[0].pageY - startY;
    event.targetTouches[0].target.style.webkitTransform =
        'translate(' + curX + 'px, ' + curY + 'px)';
}

document.addEventListener("touchstart", touchStart, false);

/*element.addEventListener("touchmove", touchMove, false);
element.addEventListener("touchend", touchEnd, false);
element.addEventListener("touchcancel", touchCancel, false); */

//////////// CREATE PIT OBJECT AND METHODS///////////////////

var depth;
var hwidth;

switch (window.orientation) {
		case 0:
		case 180:
			depth = 20;
			hwidth = 10;
			break;
		case 90:
		case -90:
			depth = 10;
			hwidth = 20;
			break;
		default:
			depth = 12;
			hwidth = 10;
	}

// CREATE BOARD


function pitcreate(){
	var i;
	var j;
	for (i = 0; i < depth; i++) {
		for (j = 0; j < hwidth; j++) {
			document.writeln("<img src='bblock.png' />");
		}
		document.writeln("<br />")
	}
}

function imagenumber(atcol, atrow) {
	var i = atrow * hwidth + atcol;
	return i;
}

function getRow(imagenum) {

}

function getFirstOccupiedRowAtColumn(atcol) {
	var atrow;
	var imagenum;
	var n;
	for (atrow = 0; atrow < depth; atrow++) {
		imagenum = imagenumber(atcol,atrow);
		n = String(document.images[imagenum].src).indexOf('bblock.png');
		if (n == -1) {
			break;
		} else {
			continue;
		}
	break;
	}
	return atrow;
}

function getLeftMostAvailableColumnAtRow(atrow) {
	var atcol;
	var n;
	var imagnum;
	for (atcol = 0; atcol < hwidth; atcol++) {
		imagenum = imagenumber(atcol,atrow);
		n = String(document.images[imagenum].src).indexOf('bblock.png');
		if (n != -1) {
			break;
		} else {
			continue;
		}
	break;
	}
	return atcol;
}

function getRightMostAvailableColumnAtRow(atrow) {
	var atcol;
	var n;
	var imagnum;
	for (atcol = hwidth-1; atcol >= 0; atcol--) {
		imagenum = imagenumber(atcol,atrow);
		n = String(document.images[imagenum].src).indexOf('bblock.png');
		if (n != -1) {
			break;
		} else {
			continue;
		}
	break;
	}
	return atcol;
}

////// CREATE A BLOCK FORMULA AND CLASS //////////////

//// BLOCK FORMULA

var blockformula = [
	[							// At 0 rotation
	[[0,0],[1,0],[2,0],[3,0]], // line
	[[0,0],[1,0],[2,0],[1,1]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[0,0],[1,0],[1,1],[2,1]], // s shape
	[[0,1],[1,1],[1,0],[2,0]], // z shape
	[[0,0],[1,0],[2,0],[2,1]], // l shape
	[[0,1],[1,1],[2,1],[2,0]] // j shape
	],
	[							// At 90 rotation
	[[0,0],[0,1],[0,2],[0,3]], // line
	[[1,0],[1,1],[1,2],[2,1]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[1,0],[1,1],[0,1],[0,2]], // s shape
	[[1,2],[1,1],[0,1],[0,0]], // z shape
	[[1,2],[1,1],[1,0],[2,0]], // l shape
	[[2,2],[2,1],[2,0],[1,0]] // j shape
	],
	[							// At 180 rotation
	[[0,0],[1,0],[2,0],[3,0]], // line
	[[0,1],[1,1],[2,1],[1,0]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[0,0],[1,0],[1,1],[2,1]], // s shape
	[[2,0],[1,0],[1,1],[0,1]], // z shape
	[[2,1],[1,1],[0,1],[0,0]], // l shape
	[[2,0],[1,0],[0,0],[0,1]] // j shape
	],
	[ 						// At 270 rotation
	[[0,0],[1,0],[2,0],[3,0]], // line
	[[1,0],[1,1],[1,2],[0,1]], //t-shape
	[[0,0],[1,0],[0,1],[1,1]], //square
	[[1,0],[1,1],[0,1],[0,2]], // s shape
	[[1,2],[1,1],[0,1],[0,0]], // z shape
	[[1,0],[1,1],[1,2],[0,2]], // l shape
	[[1,0],[1,1],[1,2],[2,2]] // j shape
	],
]; // END OF FORMULA

//// CREATE BLOCK ////

var current = [ 	// TYPE, ROTATION, COL, ROW OF CURRENT BLOCK
[0,0,0,0,0,0], // THIS CONTAINS KEY (LAST 2 ELEMENTS) TO RETAIN COL & ROW ON ROTATION
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]
];

var bulletin = document.getElementById('bulletin');

function createBlock(atcol, atrow) {
	var i;
	var j;
	var type = Math.floor(Math.random() * 7); // RANDOMIZE THE TYPE
	var block = "sblock.png";
	var formula = blockformula[0][type];
	var imagenum;
	var bulletin = document.getElementById('bulletin');
	good2go = true;
	
	/* REMOVE OLD IMAGE BLOCKS  FOR TESTING
	for (j = 0; j < 4; j++) {
		imagenum = imagenumber(current[j][2],current[j][3]);
		document.images[imagenum].src = 'bblock.png';
	} */


	for (i = 0; i < 4; i++) {
		imagenum = imagenumber(atcol + formula[i][0], atrow + formula[i][1]);
		if(String(document.images[imagenum].src).indexOf(block) == -1) {
			document.images[imagenum].src = block;
			current[i][0] = type;
			current[i][2] = atcol + formula[i][0];
			current[i][3] = atrow + formula[i][1];
			current[0][4] = atcol;
			current[0][5] = atrow;
		} else {
			bulletin.innerHTML="<p>Game Over Sucker</p>";
			bulletin.style.display="block";
		}
		
	}

}

////// START AND QUIT GAME ////////////

var blockinterval;

function blockMotion() {
	if (document.getElementById('bulletin').innerHTML != "Game Over Sucker" ) {
		createBlock(4,1);
		blockinterval = window.setInterval(function(){moveDown()},1000);
	} else {
		gameEnd();
	}
	
}

function blockStop() {
	window.clearInterval(blockinterval);
}



//// MOVE BLOCKS //////

var good2go;
var minleft;
var maxright;
var maxdown;


var getmaxright = function(){
	var maxright = 0;
	for (var i = 3; i >= 0; i--) {
		if (current[i][2] > maxright) {
			maxright = current[i][2];
		} else {

		}
	return maxright;
	}
};

var getminleft = function(){
	var minleft = 0;
	for (var i = 0; i < 4; i++) {
		if (current[i][2] > minleft) {
			minleft = current[i][2];
		}
	return minleft;
	}
};

var getmaxdown = function(){
	var maxdown = 0;
	for (var i = 0; i < 4; i++) {
		if (current[i][3] > maxdown) {
			maxdown = current[i][3];
		}
	return maxdown;
	}
};

// CHECK BOARD FOR ANY BLOCKED PIECES ////

function blocked(atcol, atrow) {
	var imagenum = imagenumber(atcol, atrow);
	if (String(document.images[imagenum].src).indexOf('sblock.png') != -1) {
		alert(String(document.images[imagenum].src).indexOf('bblock.png') != -1);
	}
}

// FUNCTION TO CHECK IF BLOCK CAN MOVE OR ROTATE


function getgood2go(checktype) {
	var i;
	var imagenum;
	var imagenum2;
	var test;
	var test2;

	if (checktype == 'left') {
		for (i = 0; i < 4; i++) {

			// IS IT AT THE WALL?

			if (current[i][2] == 0) {
				good2go = false;
				break;
			} else {

			// IS THE BLOCK OCCUPIED?
				
				imagenum = imagenumber(current[i][2]-1,current[i][3]);
				test = String(document.images[imagenum].src).indexOf('sblock.png');
					
				if (test != -1) {
					good2go = false;
					break;
				} else {
					good2go = true;
				}
			}
		}
	}
	if (checktype == 'right') {
		for (i = 0; i < 4; i++) {
		
			// IS THE BLOCK AT THE WALL?

			if (current[i][2] == hwidth - 1) {
				good2go = false;
				break;
			} else {

			// IS THE BLOCK OCCUPIED?
				
				imagenum = imagenumber(getmaxright()+1,current[i][3]);
				test = String(document.images[imagenum].src).indexOf('sblock.png');
					
				if (test != -1) {
					good2go = false;
					break;
				} else {
					good2go = true;
				}
			}
		}
	}
	if (checktype == 'down') {
		for (i = 0; i < 4; i++) {
			
			// IS THE BLOCK AT THE BOTTOM?
			
			if (current[i][3] == depth - 1) {
				good2go = false;
				break;
			} else {

			// IS THE BLOCK OCCUPIED?
				
				imagenum = imagenumber(current[i][2],getmaxdown()+1);
				test = String(document.images[imagenum].src).indexOf('sblock.png');
					
				if (test != -1) {
					good2go = false;
					break;
				} else {
					good2go = true;
				}
			}
		}
	}
	if (checktype == 'rotate') {
		for (i = 0; i < 4; i++) {
			if (current[i][2] == 0 || current[i][2] == hwidth - 1 || current[i][3] == depth - 1) {
				good2go = false;
				break;
			} else {
				good2go = true;
			}
		}
	}

}

// MOVE BLOCK FUNCTIONS

function moveLeft() {
	var i;
	var j;
	
	getgood2go('left');
	
	if (good2go) {
		for (j = 0; j < 4; j++) {
			imagenum = imagenumber(current[j][2],current[j][3]);
			document.images[imagenum].src = 'bblock.png';
		}
		for (i = 0; i < 4; i++) {
			imagenum = imagenumber(current[i][2] - 1, current[i][3]);
			document.images[imagenum].src = 'sblock.png';
			current[i][2] -= 1;
		}
		current[0][4] -= 1; // ROTATION KEY
	}

}

function moveRight() {
	var i;
	var j;
	
	getgood2go('right');

	if (good2go) {
		for (j = 0; j < 4; j++) {
			imagenum = imagenumber(current[j][2],current[j][3]);
			document.images[imagenum].src = 'bblock.png';
		}
		for (i = 0; i < 4; i++) {
			imagenum = imagenumber(current[i][2] + 1, current[i][3]);
			document.images[imagenum].src = 'sblock.png';
			current[i][2] += 1;
		}
		current[0][4] += 1; // ROTATION KEY
	}

}

function moveDown() {
	var i;
	var j;
	
	getgood2go('down');

	if (good2go) {
		for (j = 0; j < 4; j++) {
			imagenum = imagenumber(current[j][2],current[j][3]);
			document.images[imagenum].src = 'bblock.png';
		}
		for (i = 0; i < 4; i++) {
			imagenum = imagenumber(current[i][2], current[i][3] + 1);
			document.images[imagenum].src = 'sblock.png';
			current[i][3] += 1;
		}
		current[0][5] += 1; // ROTATION KEY
	} 

}


function rotate() {
	var i;
	var j;
	var col = current[0][4];
	var row = current[0][5];
	var rotation;

	getgood2go('rotate'); // SET GOOD2GO

	/// Making sure Rotation is an index of 0-3 ///

	if ((current[0][1] + 1) == 4) {
		rotation = 0;
	} else {
		rotation = current[0][1] + 1;
	}

	var type = current[0][0];
	var block = "sblock.png";
	var formula = blockformula[rotation][type];

	if (good2go) {
	for (j = 0; j < 4; j++) {
		imagenum = imagenumber(current[j][2],current[j][3]);
		document.images[imagenum].src = 'bblock.png';
	}
	for (i = 0; i < 4; i++) {
		imagenum = imagenumber(col + formula[i][0], row + formula[i][1]);
		document.images[imagenum].src = block;
		current[i][1] = rotation;
		current[i][2] = col + formula[i][0];
		current[i][3] = row + formula[i][1];
	}
	}
}


///// GAME MECHANICS //////////



