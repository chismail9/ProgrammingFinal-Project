function setup(){
 createCanvas (600, 600);
 frameRate(3);
}
function draw(){
	
	// Create a color array of 5 colors to serve as a palette
	background(255);
	var m = 500;

	stroke(m);

	while(m > 0){
		stroke(5);
		// Select a random color from our palette
		fill((random(255),random(255),random(255)));
		ellipse(300,300,m,m);
		m  = m - random(50);//loop until while is false
	}
}
