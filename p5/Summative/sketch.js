function draw() {
background(148, 218, 255);

var x = 200;
var y = 200;   
var speed = random(2, 9);
var targetSize = random(20,150);
var sizeT = random(20-200);
var score = 0;




    var target = function() {
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
fill(255, 208, 0); 
    ellipse(371,38,90,90);//sun
    
    //x = x + speed;//move the target

    if (x > 400) {
        x = 0;
        y = random(100,300);
    }
    
fill(0, 0, 0);
text("Score:",338,35);
    text(score,376,35);    
};

if (mouseIsPressed && mouseX >= x + targetSize/2 && mouseX <= x - targetSize/2 && 
mouseY >= y + targetSize/2 && mouseY <= y - targetSize/2) { 
   
   score = score + 1;
    
}
}
