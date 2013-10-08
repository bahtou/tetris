// creating the board

var board = function() {
	var end = "<td id='boundary'>br</td>";

	if (window.screen.width < 480){
		if (window.orientation == 0 || window.orientation == 180) {
			for (var i = 0; i < 23; i++) {
				document.writeln("<tr>")
					document.writeln(end)
					for (var j = 0; j < (10); j++) {
					document.writeln("<td id='b" + i+j +"'><span>" + i + j + "</span></td>");
					} 
					document.writeln(end)
				document.writeln("</tr>")
			}
			document.writeln("<tr>")
				for (var j = 0; j < (12); j++) {
					document.writeln(end);
				}
		} else { //landscape here 
			for (var i = 0; i < 10; i++) {
				document.writeln("<tr>")
					document.writeln(end)
					for (var j = 0; j < (23); j++) {
					document.writeln("<td id='b"+ i+j +"'><span>" + i + j + "</span></td>");
					} 
					document.writeln(end)
				document.writeln("</tr>")
			}
			document.writeln("<tr>")
				for (var j = 0; j < (25); j++) {
					document.writeln(end);
					}
		}
	} else { // desktop version
		for (var i = 0; i < 23; i++) {
				document.writeln("<tr>")
					document.writeln(end)
					for (var j = 0; j < (10); j++) {
					document.writeln("<td id='b" + i+j +"'><span>" + i + j + "</span></td>");
					} 
					document.writeln(end)
				document.writeln("</tr>")
			}
			document.writeln("<tr>")
				for (var j = 0; j < (12); j++) {
					document.writeln(end);
				}

	}

var cw = document.getElementById('a[id^=b]').width();
document.getElementById('a[id^=b]').css({'height':cw + 'px'});
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
