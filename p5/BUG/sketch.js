function setup() {
  createCanvas(400, 400);
}

// position of the ball
var y = 0;
var x = 0;
var bugSize = 20;
// how far the ball moves every time
var speed = 2;

function bug () {
//Bug
fill(36, 116, 255);
rect(x+bugSize*-1.36,y+bugSize*1.41,32,11);
rect(x+bugSize*1.86,y+bugSize*1.41,32,11);
rect(x+bugSize*-1.36,y+bugSize*2.56,38,11);
rect(x+bugSize*1.89,y+bugSize*2.45,32,11);
fill(38, 0, 255);
ellipse(x+bugSize*1.14,y+bugSize*2.05,54,57);
ellipse(x+bugSize*1.14,y+bugSize*0.45,40,40);
};

function draw() {
    background(127, 204, 255);
    bug();
   //move Bug

    y = y + speed;
    x = x + speed;
    
    if (y > 400) {
        speed =-2;
       } 
      else if (mouseIsPressed) {
            speed =-4;
        }
    
    if (y < 0) {
        speed = 2;
    }
    if (x < 0) {
        speed = 2;
    }
    if (x > 400) {
        speed = -2;
    }
   
    fill(196, 164, 164);
    rect(334,338,54,54,23);
    fill(0, 0, 0);
    text('food',350,371);
    fill(250, 115, 115);
    rect(-20,-12,115,95,53);
    fill(0, 0, 0);
    text('BUG HOUSE',7,42);
  
function spray () {
    fill(204, 171, 171);
        triangle(mouseX+bugSize*-2.00,mouseY+bugSize*0.80,mouseX+bugSize*-2.00,mouseY+bugSize*-0.80,mouseX+bugSize*-0.05,mouseY+bugSize*0.15);
    fill(0, 0, 0);
        rect(mouseX+bugSize*-0.60, mouseY+bugSize*-0.10, 13, 8);
    fill(230, 230, 230);
        rect(mouseX, mouseY+bugSize*-0.62, 35, 46,26);
    fill(255, 0, 0);
        rect(mouseX, mouseY+bugSize*0.78, 36, 75);
  
  if (mouseIsPressed){
    spray();
}
};

};







