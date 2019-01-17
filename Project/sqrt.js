
let angle = 0.0;
let jitter = 0.0;
var i=0;
function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  //Draw the rectangle from the center and it will also be the
  //rotate around that center
  //rectMode(CENTER);
}

function draw() {
  background(51);
	i+=1;
	if (i>=500){i=0;}
	stroke(255);
	fill(255);
	strokeWeight(5);
	line(0,0,width/2-i,sqrt(i*i+(width/2)*(width/2)));
	
}