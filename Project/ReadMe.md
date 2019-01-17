#MARKDOWN PREVIEW
---

Title : "ReadMe"
Author : "Ismail Chitaouy"
Date: "2019-01-5"

---


The original code *mySketch.pde* [OC]: https://github.com/chismail9/ProgrammingAssignment/blob/master/Original%20Code/mySketch.pde has completely been modified. *FinalProject.js* is a javasript program which uses mainly, __forms and sounds libraries__. This sketch **exhibit** a concert scene, where the user is the dj as he/she has the ability to not only play the music, but mix it as well, by adding sounds and modifying the speed. Moreover, a set of images were used in the background to give the sketch a dynamic aspect. Furthermore, The __link between the sketch and both the keyboard and mouse__ is an important add to the original code, which is present in only 2 canvas, as the interface of the speaker.

This Markdown document will highlight the **functions** used in the file *FinalProject.js*

- Preload()
- Setup()
- Draw()
- Drawcanv1()
- Drawcanv3()
- KeyPressed()
- Drawcanv2()
- Drawcanv4()
- Drawcanv5()
- Drawcanv6()
- MousePressed()

#Preload {javascript, p5.js}


```
  for (var i=0; i<=5; i++) {
    imgs[i] = loadImage(i+".jpg"); 
  }
  for (var j=0; j<=2; j++) {
    sounds[j] = loadSound(j+".mp3"); 
  }
  for (var k=1; k<=3; k++) {
    sons[k] = loadSound("Track"+k+".mp3"); 
  } 
}
```
This function affects to the list imgs[i] a number of pictures in jpg format ![](Project/0.png) ![](Project/1.png) ![](Project/2.png) ![](Project/3.png) ![](Project/4.png) ![](Project/5.png) . Moreover, these pictures are listed from 0 to 5.
Furthermore, it affects to the two otherlists, sounds[j] and sons[k] a list of sounds. These functions will be called differently later on in the code.


##Setup {javascript, p5.js}


```
    createCanvas(1000, 600);
	img=loadImage("back.png");
	img6=loadImage("canv6back.png")
	sons[1].play();
	time = 0;
    canv1 = createGraphics(1000, 600);
    canv2 = createGraphics(170, 70);
	canv3 = createGraphics(170, 70);
	canv4 = createGraphics(80, 90);
	canv5 = createGraphics(80, 90);
	canv6 = createGraphics(125, 60);
	//canv7 = createGraphics(1000, 600);
	frameRate(10);
}
```
This fucntion creates the main canva, and sets images ![](Project/back.png) ![](Project/canv6back.png),sounds and time. Moreover, it divides the screen into 6 canvas, by using the function createGraphics(). The use of numerous canvas in this ccode is due to the use of sketches in different part of the screen. 

###Draw


```
    drawcanv1();
    drawcanv2();
	drawcanv3();
	drawcanv4();
	drawcanv5();
	drawcanv6();
	//drawcanv7();
    image(canv1, 0, 0,1000,600);
	//image(canv7, 0, 0);
	image(canv6, 595, 375);
	rotate(radians(-1,5));
    image(canv2, 560, 515);
	rotate(radians(1,5));
	image(canv3, 255,510);
	rotate(radians(-8));
    image(canv4, 102, 408);
	rotate(radians(15));
	image(canv5, 810, 280);
}
```
This function displays the canvas, and rotates them. 


####Drawcanv1 {javascript, p5.js}


```
	if (i>5){i=0;}  
    canv1.image(imgs[i],0,0, width, height); 
	i=i+1;
	
	canv1.image(img, 50, 320,900,420);
    canv1.fill(255, 255, 255);
    canv1.textSize(32);
	if (mouseIsPressed){
		canv1.fill(255);
		canv1.stroke(200,200,200);
		canv1.strokeWeight(5);
	}
}
```
This function displays the images contained in the list imgs[i] ![](Project/0.png) ![](Project/1.png) ![](Project/2.png) ![](Project/3.png) ![](Project/4.png) ![](Project/5.png)and uses incrementation to scroll them. Moreover, another picture  ![](Project/back.png) will be displayed at the bottom of the canva.


#####Drawcanv3 {javascript, p5.js}


```
	//canv3.background(18,16,19);
	canv3.background(0,0);
    canv3.fill(255, 255, 255);
	canv3.fill(255,0,110);
	if (key === 'q') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 0,40,22);
		canv3.fill(255,0,220);
	if (key === 'a') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 24,40,22);
		canv3.fill(178,0,255);
	if (key === 'z') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 48,40,22);
		canv3.fill(76,255,0);
	if (key === 'w') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 0,40,22);
		canv3.fill(0,255,255);
	if (key === 's') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 24,40,22);
		canv3.fill(0,148,255);
	if (key === 'x') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 48,40,22);
		canv3.fill(255,216,0);
	if (key === 'e') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 0,40,22);
		canv3.fill(255,106,0);
	if (key === 'd') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 24,40,22);
		canv3.fill(255,0,0);
	if (key === 'c') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 48,40,22);	
}
```
This function creates 9 rectangles and colours them differently, using the conditions of the key pressed. Every key controls a rectangle. ex: [the key "q" controls the rectangle with coordinates (923,0)]


######Keypressed {javascript, p5.js}


```
	if ((key === 'a')||(key === 'z')||(key === 's')||(key === 'x')||(key === 'e')||(key === 'd')||(key === 'c')) {
		for (var i=0;i<=2;i++){
			if (sounds[i].isPlaying()){sounds[i].stop();}}}
	if (key === 'q'){
		sounds[0].play();}
	if (key === 'a'){
		sounds[1].play();}
	if (key === 'z') {
		sounds[2].play();}
	if (key === 'w') {
		sounds[2].play();}
	if (key === 's') {
		sounds[3].play();}
	if (key === 'x') {
		sounds[4].play();}
	if (key === 'e') {
		sounds[5].play();}
	if (key === 'd') {
			sounds[6].play();}
	if (key === 'c') {
		sounds[7].play();}	
}
```
This function links different keys of the keyboard to the sounds. whenever a key is pressed, the sounds playing stops and the the sound affected to the same key plays.


#######Drawcanv2 {javascript, p5.js}


```
	if (angle>=1.3){angle=0.7;}
	canv2.rectMode(CENTER);
	//canv2.background(18,16,19);
	canv3.background(0,0);
	canv2.fill(0);
	canv2.stroke(200,200,200);
	canv2.strokeWeight(2);
 	canv2.translate(85,35);
	canv2.rotate(angle);
	canv2.translate(-85,-35);
	canv2.ellipse(85,35,69,70);
    canv2.stroke(255);
    canv2.strokeWeight(1);
	canv2.fill (255,255,255,0);
	canv2.ellipse(85,35,45,46);
	canv2.ellipse(85,35,25,26);
	canv2.stroke(255,0,0);
	canv2.fill (255,0,0);
	canv2.strokeWeight(1);
    canv2.rect(85,35,4,4);
    var speed = map(mouseX-560, 50, 120, 0, 4);
	speed = constrain(speed, 0.01, 8);
	angle += 0.1;
	if (((mouseY-515>=20)&&(mouseY-515<=50))&&((mouseX-560>=50)&&(mouseX-560<=120))){ 		
		for (var i=1;i<=3;i++){
		sons[i].rate(speed);}
	}
}
```
This function displays numerous ellipses as well as a rectangle, and center them in canva 2. Moreover, the last condiition links the coordinates of the mouse, to the speed of the sound playing. In fact, the speed raises when we move the mouse to the left and vice versa.


########Drawcanv4 {javascript, p5.js}


```
	//canv4.background(31,31,29);
	canv4.background(0,0);
	background(255);
	var m = 80;
	stroke(m);
	while(m > 0){
		canv4.stroke(5);
		canv4.fill(random(255),random(255),random(255));
		canv4.ellipse(40,45,m,m);
		m  = m - random(50);
	}
}
```
This function uses the original code [OC]: https://github.com/chismail9/ProgrammingAssignment/blob/master/Original%20Code/mySketch.pde , and displays numerous ellipses and fill them with random colours. The number of the ellispses is controlled by the variable m which is a parametre of the ellipse.


#########Drawcanv5 {javascript, p5.js}


```
	//canv5.background(31,31,29);
	canv5.background(0,0);
	var m = 80;
	stroke(m);
	while(m > 0){
		canv5.stroke(5);
		canv5.fill(random(255),random(255),random(255));
		canv5.ellipse(40,45,m,m);
		m  = m - random(50);
	}
}
```
This function uses the original code [OC]: https://github.com/chismail9/ProgrammingAssignment/blob/master/Original%20Code/mySketch.pde , displays numerous ellipses and fill them with random colours. The number of the ellispses is controlled by the variable m which is a parametre of the ellipse.


##########Drawcanv6 {javascript, p5.js}\


```
	canv6.background(img6);
	canv6.textSize(18);
	canv6.textAlign(LEFT, RIGHT);
	canv6.fill(0,0,255);
	canv6.text("Track1",20,20);	  
	canv6.text("Track2",20,35);	  
	canv6.text("Track3",20,50);	  	
}

```
This function displays an image  ![](Project/canv6back.png) as the background of canva 6, and 3 texts [Track1, Track2, Track3]


########### MousePressed {javascript, p5.js}


```
	if (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=0)&&(mouseY-375<=50))){
		for (var i=1;i<=3;i++){
				if (sons[i].isPlaying()){
					sons[i].stop();
				}
		}
		if (((mouseX-595>=20)&& (mouseX-595<=125))&&(mouseY-375<=20)){
			sons[1].play();
		}
		if  (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=20)&&(mouseY-375<=35))){
			sons[2].play();
		}
		if (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=35)&&(mouseY-375<=50))){
			sons[3].play();
		}
	}
}
		
```
This function links the mouse coordinate to the the music. when the mouse is at a certain coordinates of the screen, the sounds are displayed.



