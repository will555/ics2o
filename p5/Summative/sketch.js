/*Summative Game
19/06/2017
William Aitkens*/

function setup() {
  createCanvas(1132, 600);
}

function draw() {
var x = 200;
var y = 200;   
var speed = random(2, 9);
var targetSize = random(50,125);
var x2 = 900;
var y2 = 200;   
var speed2 = random(5, 10);
var targetSize2 = random(50,125);	
var x3 = -100;
var y3 = 200;   
var speed3 = random(6, 13);
var targetSize3 = random(50,125);
var x4 = 900;
var y4 = 200;   
var speed4 = random(8, 12);
var targetSize4 = random(50,125);
var sizeT = random(20-200);
var score = 0;
var gunX = 200;
var lazerY = 256;
var lazerS = -45;
var lives = 3;
var start = 0;
var red = 255;
var blue = 255;
var green = 255;
var redG = 0;
var blueG = 0;
var greenG = 0;

    function lazer() {
    fill(red, green, blue);
   rect(mouseX+10,lazerY,10,94,30); 
};
    function gun() {
    noStroke();
     fill(redG, greenG, blueG);
    rect(mouseX+5,330,19,23);
    rect(mouseX,339,30,130);
    };
    background(255, 255, 255);
  
    function target() {
    fill(255, 0, 0);
        ellipse(x,y,targetSize,targetSize);
    fill(255, 255, 255);
        ellipse(x,y,targetSize/-1.38,targetSize/1.38);
    fill(255, 0, 0);
        ellipse(x,y,targetSize/2.20,targetSize/-2.20);
    };
    
    function target2() {
    fill(0, 50, 255);fill(0, 50, 255);
        ellipse(x2,y2,targetSize2,targetSize2);
    fill(255, 255, 255);
        ellipse(x2,y2,targetSize2/-1.38,targetSize2/1.38);
    fill(0, 50, 255);
        ellipse(x2,y2,targetSize2/2.20,targetSize2/-2.20);
    };
	
	function target3() {
    fill(255, 0, 255);
        ellipse(x3,y3,targetSize3,targetSize3);
    fill(255, 255, 255);
        ellipse(x3,y3,targetSize3/-1.38,targetSize3/1.38);
    fill(255, 0, 255);
        ellipse(x3,y3,targetSize3/2.20,targetSize3/-2.20);
    };
	
		function target4() {
    fill(255, 94, 0);
        ellipse(x4,y4,targetSize4,targetSize4);
    fill(255, 255, 255);
        ellipse(x4,y4,targetSize4/-1.38,targetSize4/1.38);
    fill(255, 94, 0);
        ellipse(x4,y4,targetSize4/2.20,targetSize4/-2.20);
    };
	
draw = function() {

background(148, 218, 255);//the sky
target();//creates target
noStroke();
fill(15, 209, 21);
    ellipse(34,378,233,122);//hills
    ellipse(189,381,220,84);//hills
    ellipse(345,381,231,131);//hills
	ellipse(545,381,231,100);//hills
    ellipse(745,381,231,131);//hills
fill(255, 208, 0); 
    ellipse(770,38,90,90);//sun

       if (lazerY < -110) {
        lazerY = 280;
    }
    if (mouseIsPressed){
         lazer();
   lazerY = lazerY + lazerS;
    }  
 gun(); 
    x = x + speed;//move the target

    if (x > 900) {
        x = -100;
        y = random(100,300);
        lives = lives -1;
    }
    
    if (x2 < -100) {
        x2 = 900 + targetSize2;
        y2 = random(100,300);
        lives = lives -1;
    }
    
	if (x3 > 900) {
        x3 = -100;
        y3 = random(100,300);
        lives = lives -1;
    }
	
	if (x4 < -100) {
        x4 = 900 + targetSize4;
        y4 = random(100,300);
        lives = lives -1;
    }
if (mouseIsPressed && mouseX > x - targetSize/2 && mouseX < x + targetSize/2 && mouseY > y - targetSize/2 && mouseY < y + targetSize/2) {  
    score = score + 1;
    x = 0 - targetSize;
    targetSize = random(50,125);
    speed = random(3, 10);
    y = y = random(100,300); 
} 


fill(0, 0, 0);
text("Score:",730,35);
text(score,770,35); 
text("lives:",20,35);
text(lives,50,35);
	
if (mouseIsPressed && mouseX > 300 && mouseX < 475 && mouseY > 305 && mouseY < 355 && lives <=0){
   lives = 3; 
   score = 0;
   speed = random(3, 10);
   speed2 = random(5, 10);
   speed3 = random(6, 15);
   speed4 = random(8, 12);
   x = 0;
   y = 100;
   textSize(12);
}
	
if (score >= 20){   
 target2();
   x2 = x2 - speed2;//move the target
if (mouseIsPressed && mouseX > x2 - targetSize2/2 && mouseX < x2 + targetSize2/2 && mouseY > y2 - targetSize2/2 && mouseY < y2 + targetSize2/2) {    
    score = score + 1;
    x2 = 1000 - targetSize2;
    targetSize2 = random(70,100);
    speed2 = random(5, 10);
    y2 = y2 = random(100,300);
} 
}
	
if (score >= 60){   
 target3();
   x3 = x3 + speed3;//move the target
if (mouseIsPressed && mouseX > x3 - targetSize3/2 && mouseX < x3 + targetSize3/2 && mouseY > y3 - targetSize3/2 && mouseY < y3 + targetSize3/2) {    
    score = score + 1;
    x3 = 0 - targetSize3;
    targetSize3 = random(50,75);
    speed3 = random(6, 13);
    y3 = y3 = random(100,300);
} 
}

if (score >= 100){   
 target4();
   x4 = x4 - speed4;//move the target
if (mouseIsPressed && mouseX > x4 - targetSize4/2 && mouseX < x2 + targetSize4/2 && mouseY > y4 - targetSize4/2 && mouseY < y4 + targetSize4/2) {    
    score = score + 1;
    x4 = 1000 - targetSize4;
    targetSize4 = random(70,100);
    speed4 = random(8, 12);
    y4 = y4 = random(100,300);
} 
}

if (mouseIsPressed && mouseX > 300 && mouseX < 475 && mouseY > 305 && mouseY < 355 && score <=0){
	start = 1;
	textSize(12);
	lives = 3;
    speed = random(2, 9);
	x = 0 - targetSize;
}
	
if (lives <= 0) {
    fill(59, 134, 255);
    rect(0,0,800,400);
    fill(255, 0, 0);
    textSize(65);
    text("Game over",220,141);
    fill(0, 0, 0);
    textSize(40);
    text("Score:",300,250);
    text(score,430,250); 
    fill(255, 0, 0);
    rect(300,305,175,50);
    fill(0, 0, 0);
    textSize(30);
    text("Restart",340,340);
    speed = 0;
    speed2 = 0;
	speed3 = 0;
	speed4 = 0;
	x = 0;
	x2 = 1000;
	x3 = 0;
	x3 = 1000;
	y = 2000;
	y2 = 2000;
	y3 = 2000;
	y4 = 2000;
}



if (start <= 0) {
    fill(255, 220, 125);
    rect(0,0,800,400);
    fill(255, 0, 0);
    textSize(65);
    text("Target Practice",175,141);
    fill(0, 0, 0);
    textSize(40);
    fill(255, 0, 0);
    rect(300,305,175,50);
    fill(0, 0, 0);
    textSize(30);
    text("Start",355,340);
}
//lazer
if (start <= 0) {
//lowers the R of the RBG of the square
	if (keyIsDown(87)) {
		red = red - 5;
    }
//lowers the G of the RBG of the square 
	if (keyIsDown(65)) {
		green = green - 5;
    }
//lowers the B of the RBG of the square
	if (keyIsDown(68)) {
		blue = blue - 5;
    }
//makes the colour of the square white when "S" is pressed
	if (keyIsDown(83)) {
		red = 255;
		green = 255;
		blue = 255;
    }
//the colour of the square
	fill(red, green, blue);
	rect(75,200,150,150,29);
//the size of the text
	textSize(30);
	fill(0,0,0)
//the text above the square
	text("Lazer Colour",70,185);
}

//Gun colour
if (start <= 0) {
//lowers the R of the RBG of the square
	if (keyIsDown(37)) {
		redG = redG + 5;
    }
//lowers the G of the RBG of the square 
	if (keyIsDown(38)) {
		greenG = greenG + 5;
    }
//lowers the B of the RBG of the square
	if (keyIsDown(39)) {
		blueG = blueG + 5;
    }
//makes the colour of the square white when "S" is pressed
	if (keyIsDown(40)) {
		redG = 0;
		greenG = 0;
		blueG = 0;
    }
//the colour of the square
	fill(redG, greenG, blueG);
	rect(550,200,150,150,29);
//the size of the text
	textSize(30);
	fill(0,0,0)
//the text above the square
	text("Gun Colour",550,185);
}
};

};
