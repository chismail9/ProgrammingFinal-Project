void setup(){
 size (600, 600);
 frameRate(3);
}
void draw(){
	
	// Create a color array of 5 colors to serve as a palette
	color [] colarray = { hexToRgb("#EFC69B").rgb, hexToRgb("#AF1B3F").rgb, hexToRgb("#473144").rgb, hexToRgb("#CCB69B").rgb, hexToRgb("#DF9B6D").rgb };

	background(255);
	float m = 500;

	stroke(m);

	while(m > 0){
		stroke(5);
		// Select a random color from our palette
		col = colarray[(int)random(0,4)];
		fill(col, 100);
		ellipse(300,300,m,m);
		m  = m - random(50);//loop until while is false
	}
}
// This function converts hex colors to Red, Green, Blue values
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
    	rgb: color(parseInt(result[1], 16),  parseInt(result[2], 16), parseInt(result[3], 16)),
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}