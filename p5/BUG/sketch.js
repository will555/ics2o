/*William Aitkens
BUG
2017-04-20*/
// position of the BUG
var y = 0;
var x = 0;
var bugSize = 20;
// how far the BUG moves every time
var speed = 2;

function setup() {
  createCanvas(400, 400);
}

function bug () {
//Bug
  fill(36, 116, 255);
  //left top leg
  rect(x+bugSize*-1.36,y+bugSize*1.41,32,11);
  //right top leg
  rect(x+bugSize*1.86,y+bugSize*1.41,32,11);
  //left bottom leg
  rect(x+bugSize*-1.36,y+bugSize*2.56,38,11);
  //right bottom leg
  rect(x+bugSize*1.89,y+bugSize*2.45,32,11);
  fill(38, 0, 255);
  //body of the bug
  ellipse(x+bugSize*1.14,y+bugSize*2.05,54,57);
  //head of the bug
  ellipse(x+bugSize*1.14,y+bugSize*0.45,40,40);
}

function draw() {
    background(127, 204, 255);
    bug();
   
   //moves the Bug
    y = y + speed;
    x = x + speed;
   //stops the bug from moving off the screen
    if (y > 400) {
        speed =-2;
       } 
   //changes the speed of the bug if the mouse is pressed
      else if (mouseIsPressed) {
            speed =-4;
        }
   //stops the bug from moving off the screen
    if (y < 0) {
        speed = 2;
    }
  //stops the bug from moving off the screen
    if (x < 0) {
        speed = 2;
    }
  //stops the bug from moving off the screen
    if (x > 400) {
        speed = -2;
    }
  //shows the sprey bottle when the mouse id pressed
    if (mouseIsPressed) {
      spray();
    }
  
    fill(196, 164, 164);
  //the food
    rect(334,338,54,54,23);
    fill(0, 0, 0);
    text('food',350,371);
    fill(250, 115, 115);
  //the bugs house
    rect(-20,-12,115,95,53);
    fill(0, 0, 0);
    text('BUG HOUSE',7,42);
  }
//the spray bottle
function spray () {
    fill(204, 171, 171);
  //the liquid spray
        triangle(mouseX+bugSize*-2.00,mouseY+bugSize*0.80,mouseX+bugSize*-2.00,mouseY+bugSize*-0.80,mouseX+bugSize*-0.05,mouseY+bugSize*0.15);
    fill(0, 0, 0);
  //the nozzle of the bottle
        rect(mouseX+bugSize*-0.60, mouseY+bugSize*-0.10, 13, 8);
    fill(230, 230, 230);
  //the top of the bottle
        rect(mouseX, mouseY+bugSize*-0.62, 35, 46,26);
    fill(255, 0, 0);
  //the can part of the bottle, the body
        rect(mouseX, mouseY+bugSize*0.78, 36, 75);
  }









