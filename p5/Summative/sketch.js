function setup() {
  createCanvas(800, 400);
}

function draw() {
var x = 200;
var y = 200;   
var speed = random(2, 9);
var targetSize = random(50,125);
var x2 = 800;
var y2 = 200;   
var speed2 = random(2, 9);
var targetSize2 = random(50,125);	
var sizeT = random(20-200);
var score = 0;
var gunX = 200;
var lazerY = 256;
var lazerS = -45;
var lives = 3;
	
    function lazer() {
    fill(255, 0, 0);
   rect(mouseX+10,lazerY,10,94,30); 
};
    function gun() {
    noStroke();
     fill(0, 0, 0);
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
        x2 = 900;
        y2 = random(100,300);
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
   textSize(12);
}
	
if (score >= 20){   
 target2();
   x2 = x2 - speed2;//move the target
if (mouseIsPressed && mouseX > x2 - targetSize2/2 && mouseX < x2 + targetSize2/2 && mouseY > y2 - targetSize2/2 && mouseY < y2 + targetSize2/2) {    
    score = score + 1;
    x2 = 900 - targetSize2;
    targetSize2 = random(50,100);
    speed2 = random(5, 12);
    y2 = y2 = random(100,300);
} 
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
}
};

};
