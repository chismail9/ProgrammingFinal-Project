var angle = 0.0;
var offset = 200;
var scalar = 2;
var speed = 0.2;
function setup( ) {
createCanvas(400, 400);
  
fill(0);
background(204);
}

function draw() {
	background(204);
 var x = offset + cos(angle) * scalar;
var y = offset + sin(angle) * scalar;

fill(255);
stroke(255);
strokeWeight(2);
line(200, 200, x, y);
angle += speed;
scalar += speed;
  
}