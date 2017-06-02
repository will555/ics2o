function setup() {
  createCanvas(800, 400);
}

function draw() {
var x = 200;
var y = 200;   
var speed = random(2, 9);
var targetSize = random(50,125);
var sizeT = random(20-200);
var score = 0;
var gunX = 200;
var lazerY = 256;
var lazerS = -45;

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
    }
    
if (mouseIsPressed && mouseX > x - targetSize/2 && mouseX < x + targetSize/2 && mouseY > y - targetSize/2 && mouseY < y + targetSize/2) { 
   
   score = score + 1;
    
} 

if (lazerY >= x - targetSize/2 && lazerY <= x + targetSize/2 && mouseX >= x - targetSize/2 && mouseX <= x + targetSize/2 ) {
    
    x = 0 - targetSize;    
    y = y = random(100,300);
}


fill(0, 0, 0);
text("Score:",730,35);
    text(score,770,35);    
};

};

